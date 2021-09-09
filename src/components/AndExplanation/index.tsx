import React from 'react';

 import { Container } from './styles';
 import imagem1 from "../../assets/imagemand1.png" 
 import imagem2 from "../../assets/imagemand2.png"
 import imagem3 from "../../assets/imagemand3.png"
 import imagem4 from "../../assets/imagemand4.png"
const AndExplanation: React.FC = () => {
  return (
    <Container> 
      <p>
      A função <span>E</span> ou <span>(AND)</span> executa a multiplicação booleana de duas ou mais variáveis.<br />
      <br />Para representar a expressão da função utilizamos:
      <br />S = A <span>e</span> B ou S = A<span>.</span>B<br />
      <br />Representação em imagem:
      <br /> <img src={imagem3} alt="" /><br />
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
          <td>0</td> 
        </tr>
        
        
        <tr> 
          <td>0</td>
          <td>1</td>
          <td>0</td>
        </tr>

        <tr> 
          <td>1</td>
          <td>0</td>
          <td>0</td>
        </tr>

        <tr> 
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
      </table>
      
      {/* <br /> <img src={imagem4} alt="" /><br /> */}
      <br />Situações possíveis para melhor entendimento do <span>(AND)</span>:
      <br /> <img src={imagem2} alt="" />
      <br /> Quando a chave A e a chave B estão abertas, ou seja, (A=0) e (B=0), não irá passar energia no circuito e, portanto, a lâmpada fica apagada (S=0)<br />
      <br />Quando a chave A está aberta (A=0) e a chave B estiver fechada (B=1), não irá passar energia no circuito e, portanto, a lâmpada fica apagada (S=0)<br />
      <br />Quando a chave A está fechada (A=1) e a chave B estiver aberta (B=0), não irá passar energia no circuito e, portanto, a lâmpada fica apagada (S=0)<br />
      <br />Quando a chave A e a chave B estão fechadas, ou seja, (A=1) e (B=1),  irá passar energia no circuito e, portanto, a lâmpada fica acessa (S=1)


      </p> 

     
    </Container>
  );
}

export default AndExplanation;