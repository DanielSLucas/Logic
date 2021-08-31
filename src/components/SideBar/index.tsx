import { ReactNode, useCallback, useState } from "react";
import { useExplanation } from "../../hooks/explanation";
import { Container, Title, Step, PlayGroundButton } from "./styles";

const SideBar: React.FC = () => {
  const { addExplanation, removeExplanation } = useExplanation();
  const [idOfCurrentlyVisibleExplanation, setIdOfCurrentlyVisibleExplanation] = useState('');

  const handleStepClick = useCallback((title: string, content: ReactNode) => {        
    const isShowingSomeExplanation = !!idOfCurrentlyVisibleExplanation;
    
    isShowingSomeExplanation&& removeExplanation(idOfCurrentlyVisibleExplanation);
    
    setTimeout(() => {
      const explanation = addExplanation({
        title,
        content,      
      });
      setIdOfCurrentlyVisibleExplanation(explanation.id)
    }, isShowingSomeExplanation ? 700 : 0);      

  }, [addExplanation, removeExplanation, idOfCurrentlyVisibleExplanation]);

  return (
    <Container>      
      <Title>Logic</Title>        
      <nav>
        <ul>              
          <Step>            
            <button 
              type="button" 
              onClick={() => handleStepClick('Passo 1', <></>)}
            >
              <div>1</div>
              introducao
            </button>
          </Step>
          <Step>            
            <button 
              type="button" 
              onClick={() => handleStepClick('Passo 2', <></>)}
            >
              <div>2</div>
              passo 1
            </button>
          </Step>
          <Step>            
            <button 
              type="button" 
              onClick={() => handleStepClick('Passo 3', <></>)}
            >
              <div>3</div>
              passo 2
            </button>
          </Step>
          <Step>            
            <button 
              type="button" 
              onClick={() => handleStepClick('Passo 4', <></>)}
            >
              <div>4</div>
              passo 3
            </button>
          </Step>
          <Step>            
            <button 
              type="button" 
              onClick={() => handleStepClick('Passo 5', <></>)}
            >
              <div>5</div>
              passo 4
            </button>
          </Step>
          <Step>          
            <button 
              type="button" 
              onClick={() => handleStepClick('Passo 6', <></>)}
            >
              <div>6</div>
              passo 5
            </button>
          </Step>
        </ul>
      </nav>
      <div className="divider-2"></div>
      <PlayGroundButton type="button">Playground</PlayGroundButton>        
    </Container>
  );
}

export default SideBar;