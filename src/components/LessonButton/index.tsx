import { ButtonHTMLAttributes, useCallback, useState } from 'react';
import { FiCheck } from 'react-icons/fi';

import { Container } from './styles';

interface LessonButtonProp extends ButtonHTMLAttributes<HTMLButtonElement> {
  lessonNumber: string;
  currentlySelectedLesson: string;
}

const LessonButton: React.FC<LessonButtonProp> = ({
  children,
  lessonNumber,
  currentlySelectedLesson,
  ...rest
}) => {
  const [done, setDone] = useState(false);

  const handleClick = useCallback(() => {
    setDone(state => !state);
  }, []);

  return (
    <Container
      isDone={done}
      isSelected={currentlySelectedLesson === lessonNumber}
    >
      <button type="button" onClick={handleClick}>
        {done ? <FiCheck /> : lessonNumber}
      </button>
      <button type="button" {...rest}>
        {children}
      </button>
    </Container>
  );
};

export default LessonButton;
