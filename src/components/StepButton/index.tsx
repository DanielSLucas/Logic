import React, { ButtonHTMLAttributes, useCallback, useState } from 'react';
import { FiCheck } from 'react-icons/fi';

import { Container } from './styles';

interface StepButtonProp extends ButtonHTMLAttributes<HTMLButtonElement>{
  stepNumber: string;
  currentlySelectedStep: string;
}


const StepButton: React.FC<StepButtonProp> = ({ children, stepNumber, currentlySelectedStep, ...rest }) => {
  const [done, setDone] = useState(false);
  
  const handleClick = useCallback(() => {
    setDone((state) => !state);
  },[])

  return (
    <Container isDone={done} isSelected={currentlySelectedStep === stepNumber}>            
      <button 
        type="button" 
        onClick={handleClick}
      >
        {done ? <FiCheck /> : stepNumber }
      </button>      
      <button {...rest}>
        {children}
      </button>
    </Container>
  );
}

export default StepButton;