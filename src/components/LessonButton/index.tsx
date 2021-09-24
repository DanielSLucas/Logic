import { ButtonHTMLAttributes, useCallback, useEffect, useState } from 'react';
import { FiCheck } from 'react-icons/fi';
import Cookies from 'js-cookie';

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

  useEffect(() => {
    setDone(!!Cookies.get(`lesson${lessonNumber}`));
  }, []);

  const handleClick = useCallback(() => {
    setDone(state => !state);
    if (!done) Cookies.set(`lesson${lessonNumber}`, String(!done));
    else Cookies.remove(`lesson${lessonNumber}`);
  }, [done, lessonNumber]);

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
