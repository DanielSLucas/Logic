import { ReactNode, useCallback, useState, useEffect } from "react";
import { FiMail } from "react-icons/fi";
import { useExplanation } from "../../hooks/explanation";
import AndExplanation from "../AndExplanation";
import NandExplanation from "../NandExplanation";
import StepButton from "../StepButton";
import { Container, Title } from "./styles";

const SideBar: React.FC = () => {
  const { addExplanation, removeExplanation, isShowingAnExplanation } = useExplanation();
  const [idOfCurrentlyVisibleExplanation, setIdOfCurrentlyVisibleExplanation] = useState('');
  const [currentlySelectedStep, setCurrentlySelectedStep] = useState('');

  const handleStepClick = useCallback((title: string, content: ReactNode, step: string) => {                
    isShowingAnExplanation && removeExplanation(idOfCurrentlyVisibleExplanation);        

    setTimeout(() => {
      const explanation = addExplanation({
        title,
        content,      
      });
      setIdOfCurrentlyVisibleExplanation(explanation.id)
      setCurrentlySelectedStep(step);
    }, isShowingAnExplanation ? 700 : 0);      
    
  }, [addExplanation, removeExplanation, idOfCurrentlyVisibleExplanation, isShowingAnExplanation]);

  useEffect(() => {    
    if(!isShowingAnExplanation) {
      setCurrentlySelectedStep('');
    }
  }, [isShowingAnExplanation]);

  return (
    <Container>      
      <Title>Logic</Title> 
      <div className="divider"/>
      <nav>
        <ul>              
          <li>
            <StepButton 
              stepNumber="0"
              currentlySelectedStep={currentlySelectedStep} 
              type="button"
              onClick={() => handleStepClick('Passo 0', <AndExplanation/>, '0')}
            >
              Passo 0
            </StepButton>
          </li>
          <li>
            <StepButton 
              stepNumber="1"
              currentlySelectedStep={currentlySelectedStep} 
              type="button"
              onClick={() => handleStepClick('Passo 1', <NandExplanation/>, '1')}
            >
              Passo 1
            </StepButton>
          </li>
          <li>
            <StepButton 
              stepNumber="2"
              currentlySelectedStep={currentlySelectedStep} 
              type="button"
              onClick={() => handleStepClick('Passo 2', <></>, '2')}
            >
              Passo 2
            </StepButton>
          </li>
          <li>
            <StepButton 
              stepNumber="3"
              currentlySelectedStep={currentlySelectedStep} 
              type="button"
              onClick={() => handleStepClick('Passo 3', <></>, '3')}
            >
              Passo 3
            </StepButton>
          </li>
          <li>
            <StepButton 
              stepNumber="4"
              currentlySelectedStep={currentlySelectedStep} 
              type="button"
              onClick={() => handleStepClick('Passo 4', <></>, '4')}
            >
              Passo 4
            </StepButton>
          </li>
          <li>
            <StepButton 
              stepNumber="5"
              currentlySelectedStep={currentlySelectedStep} 
              type="button"
              onClick={() => handleStepClick('Passo 5', <></>, '5')}
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
}

export default SideBar;