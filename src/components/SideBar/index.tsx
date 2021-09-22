import { useCallback, useEffect, useState } from 'react';
import PrismicDOM from 'prismic-dom';
import { Document } from '@prismicio/client/types/documents';
import { FiMail } from 'react-icons/fi';

import { useToast } from '../../hooks/toasts';
import LessonButton from '../LessonButton';

import { Container, Title } from './styles';

interface SideBarProps {
  lessons: Document[];
}

const SideBar: React.FC<SideBarProps> = ({ lessons }) => {
  const { addToast, removeToast, isShowingAnToast } = useToast();
  const [idOfCurrentlyVisibleToast, setIdOfCurrentlyVisibleToast] =
    useState('');
  const [currentlySelectedLesson, setCurrentlySelectedLesson] = useState('');

  const handleLessonClick = useCallback(
    (title: string, content: Document, lesson: string) => {
      if (isShowingAnToast) removeToast(idOfCurrentlyVisibleToast);

      setTimeout(
        () => {
          const toast = addToast({
            title,
            content,
          });
          setIdOfCurrentlyVisibleToast(toast.id);
          setCurrentlySelectedLesson(lesson);
        },
        isShowingAnToast ? 700 : 0,
      );
    },
    [addToast, idOfCurrentlyVisibleToast, isShowingAnToast, removeToast],
  );

  useEffect(() => {
    if (!isShowingAnToast) {
      setCurrentlySelectedLesson('');
    }
  }, [isShowingAnToast]);

  return (
    <Container>
      <Title>Logic</Title>
      <div className="divider" />
      <nav>
        <ul>
          {lessons.map((lesson, index) => (
            <li key={lesson.id}>
              <LessonButton
                lessonNumber={(index + 1).toString()}
                currentlySelectedLesson={currentlySelectedLesson}
                type="button"
                onClick={() =>
                  handleLessonClick(
                    PrismicDOM.RichText.asText(lesson.data.title),
                    lesson,
                    (index + 1).toString(),
                  )
                }
              >
                {PrismicDOM.RichText.asText(lesson.data.title)}
              </LessonButton>
            </li>
          ))}
        </ul>
      </nav>
      <footer>
        <a href="mailto:daniellucas-pms@hotmail.com">
          <FiMail />
          Contact us!
        </a>
      </footer>
    </Container>
  );
};

export default SideBar;
