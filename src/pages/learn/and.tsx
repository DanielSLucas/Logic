import React from 'react';
import Image from 'next/image';

import { Container, ImageContainer } from '../../styles/learn/And';
// w: 476 h: 250
// 913 x 465
// 449 x 213
// 650 x 446

const And: React.FC = () => {
  return (
    <Container>
      <div>
        <section>
          <h1>And</h1>
          <p>
            A função <b>E</b> ou <b>(AND)</b> executa a multiplicação booleana
            de duas ou mais variáveis.
          </p>
          <p>
            Para representar a expressão da função utilizamos:
            <br />
            <span>
              S = A <b>e</b> B ou S = A<b>.</b>B
            </span>
          </p>
          <h2>Representação em imagem:</h2>

          <ImageContainer>
            <div>
              <Image
                src="/imagemand3.png"
                width={449}
                height={213}
                objectFit="cover"
              />
            </div>
          </ImageContainer>

          <h2>Tabela verdade do circuito:</h2>

          <ImageContainer>
            <div>
              <Image
                src="/imagemand4.png"
                width={650}
                height={446}
                objectFit="cover"
              />
            </div>
          </ImageContainer>

          <h2>
            Situações possíveis para melhor entendimento do <b>AND</b>:
          </h2>

          <ImageContainer>
            <div>
              <Image
                src="/imagemand2.png"
                width={913}
                height={465}
                objectFit="cover"
              />
            </div>
          </ImageContainer>

          <p>
            Quando a chave A e a chave B estão abertas, ou seja, (A=0) e (B=0),
            não irá passar energia no circuito e, portanto, a lâmpada fica
            apagada (S=0)
          </p>

          <p>
            Quando a chave A está aberta (A=0) e a chave B estiver fechada
            (B=1), não irá passar energia no circuito e, portanto, a lâmpada
            fica apagada (S=0)
          </p>

          <p>
            Quando a chave A está fechada (A=1) e a chave B estiver aberta
            (B=0), não irá passar energia no circuito e, portanto, a lâmpada
            fica apagada (S=0)
          </p>

          <p>
            Quando a chave A e a chave B estão fechadas, ou seja, (A=1) e (B=1),
            irá passar energia no circuito e, portanto, a lâmpada fica acessa
            (S=1)
          </p>
        </section>
      </div>
    </Container>
  );
};

export default And;
