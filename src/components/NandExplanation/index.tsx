import React from 'react';

 import { Container } from './styles';
 import imagem6 from "../../assets/imagemnand1.png" 

const NandExplanation: React.FC = () => {
  return (
    <Container> 
      <p>
      A função <span>Nand</span> é composta pela função E com a função NÃO, ou seja, a saída da função E é invertida<br />
      <br />Para representar a expressão da função utilizamos:
      <br />S = (A<span>.</span>B)'<br />
      <br />Representação em imagem:
      <br /> <img src={imagem6} alt="" /><br />
      <br />Tabela verdade do circuito:
      
      <table className="border">
        <tr> 
          <th className="border th">A</th>
          <th>B</th>
          <th>A.B</th> 
        </tr>
        
        <tr> 
          <td className="border td">0</td>
          <td>0</td>
          <td>1</td> 
        </tr>
        
        
        <tr> 
          <td>0</td>
          <td>1</td>
          <td>1</td>
        </tr>

        <tr> 
          <td>1</td>
          <td>0</td>
          <td>1</td>
        </tr>

        <tr> 
          <td>1</td>
          <td>1</td>
          <td>0</td>
        </tr>
      </table>
      
      
      <br />Situações possíveis para melhor entendimento do <span>(Nand)</span>:
      {/* <br /> <img src={imagem2} alt="" /> */}
      <br /> Quando a chave A e a chave B estão abertas, ou seja, (A=0) e (B=0), irá passar energia no circuito e, portanto, a lâmpada fica acessa (S=1)<br />
      <br />Quando a chave A está aberta (A=0) e a chave B estiver fechada (B=1), nirá passar energia no circuito e, portanto, a lâmpada fica acessa (S=1)<br />
      <br />Quando a chave A está fechada (A=1) e a chave B estiver aberta (B=0), irá passar energia no circuito e, portanto, a lâmpada fica acessa (S=1)<br />
      <br />Quando a chave A e a chave B estão fechadas, ou seja, (A=1) e (B=1), não irá passar energia no circuito e, portanto, a lâmpada fica apagada (S=0)


      </p> 

     
    </Container>
  );
}

export default NandExplanation;