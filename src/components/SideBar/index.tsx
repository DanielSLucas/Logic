import { useCallback, useState } from 'react';
import { FiMail } from 'react-icons/fi';
import { useRouter } from 'next/router';
import StepButton from '../StepButton';
import { Container, Title } from './styles';

const SideBar: React.FC = () => {
  const router = useRouter();
  const [currentlySelectedStep, setCurrentlySelectedStep] = useState('');

  const handleStepClick = useCallback(
    (route: string, step: string) => {
      setCurrentlySelectedStep(step);
      router.push(route);
    },
    [router],
  );

  return (
    <Container>
      <Title>
        <button type="button" onClick={() => handleStepClick('/', '')}>
          Logic
        </button>
      </Title>
      <div className="divider" />
      <nav>
        <ul>
          <li>
            <StepButton
              stepNumber="0"
              currentlySelectedStep={currentlySelectedStep}
              type="button"
              onClick={() => handleStepClick('/learn/and', '0')}
            >
              Passo 0
            </StepButton>
          </li>
          <li>
            <StepButton
              stepNumber="1"
              currentlySelectedStep={currentlySelectedStep}
              type="button"
              onClick={() => handleStepClick('/learn/Passo 1', '1')}
            >
              Passo 1
            </StepButton>
          </li>
          <li>
            <StepButton
              stepNumber="2"
              currentlySelectedStep={currentlySelectedStep}
              type="button"
              onClick={() => handleStepClick('/learn/Passo 2', '2')}
            >
              Passo 2
            </StepButton>
          </li>
          <li>
            <StepButton
              stepNumber="3"
              currentlySelectedStep={currentlySelectedStep}
              type="button"
              onClick={() => handleStepClick('/learn/Passo 3', '3')}
            >
              Passo 3
            </StepButton>
          </li>
          <li>
            <StepButton
              stepNumber="4"
              currentlySelectedStep={currentlySelectedStep}
              type="button"
              onClick={() => handleStepClick('/learn/Passo 4', '4')}
            >
              Passo 4
            </StepButton>
          </li>
          <li>
            <StepButton
              stepNumber="5"
              currentlySelectedStep={currentlySelectedStep}
              type="button"
              onClick={() => handleStepClick('/learn/Passo 5', '5')}
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
