import { Container, Title, Step, Button } from "./styles";

const SideBar: React.FC = () => {
  return (
    <Container>      
      <Title>Logic</Title>        
      <nav>
        <ul>              
          <Step>
            <div>1</div>
            <a href="#">introducao</a>
          </Step>
          <Step>
            <div>2</div>
            <a href="#">passo 1</a>
          </Step>
          <Step>
            <div>3</div>
            <a href="#">passo 2</a>
          </Step>
          <Step>
            <div>4</div>
            <a href="#">passo 3</a>
          </Step>
          <Step>
            <div>5</div>
            <a href="#">passo 4</a>
          </Step>
          <Step>
            <div>6</div>
            <a href="#">passo 5</a>
          </Step>
        </ul>
      </nav>
      <div className="divider-2"></div>
      <Button type="button">Playground</Button>        
    </Container>
  );
}

export default SideBar;