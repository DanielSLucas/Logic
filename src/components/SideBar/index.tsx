import { ReactNode, useCallback, useEffect, useState } from 'react';
import { FiMail } from 'react-icons/fi';
import { useToast } from '../../hooks/toasts';
import StepButton from '../LessonButton';
import { Container, Title } from './styles';

const SideBar: React.FC = () => {
  const { addToast, removeToast, isShowingAnToast } = useToast();
  const [idOfCurrentlyVisibleToast, setIdOfCurrentlyVisibleToast] =
    useState('');
  const [currentlySelectedLesson, setCurrentlySelectedLesson] = useState('');

  const handleLessonClick = useCallback(
    (title: string, content: ReactNode, lesson: string) => {
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
          <li>
            <StepButton
              lessonNumber="0"
              currentlySelectedLesson={currentlySelectedLesson}
              type="button"
              onClick={() => handleLessonClick('Passo 0', <></>, '0')}
            >
              Passo 0
            </StepButton>
          </li>
          <li>
            <StepButton
              lessonNumber="1"
              currentlySelectedLesson={currentlySelectedLesson}
              type="button"
              onClick={() => handleLessonClick('Passo 1', <></>, '1')}
            >
              Passo 1
            </StepButton>
          </li>
          <li>
            <StepButton
              lessonNumber="2"
              currentlySelectedLesson={currentlySelectedLesson}
              type="button"
              onClick={() => handleLessonClick('Passo 2', <></>, '2')}
            >
              Passo 2
            </StepButton>
          </li>
          <li>
            <StepButton
              lessonNumber="3"
              currentlySelectedLesson={currentlySelectedLesson}
              type="button"
              onClick={() => handleLessonClick('Passo 3', <></>, '3')}
            >
              Passo 3
            </StepButton>
          </li>
          <li>
            <StepButton
              lessonNumber="4"
              currentlySelectedLesson={currentlySelectedLesson}
              type="button"
              onClick={() => handleLessonClick('Passo 4', <></>, '4')}
            >
              Passo 4
            </StepButton>
          </li>
          <li>
            <StepButton
              lessonNumber="5"
              currentlySelectedLesson={currentlySelectedLesson}
              type="button"
              onClick={() => handleLessonClick('Passo 5', <></>, '5')}
            >
              Passo 5
            </StepButton>
          </li>
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
