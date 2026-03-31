import React from "react";
import * as S from "./styles";

import github from '../../assets/img/github.png';
import linkedin from '../../assets/img/linkedin.png';
import gmail from '../../assets/img/gmail.png';
import instagram from '../../assets/img/instagram.png';


export const Contacts: React.FC = () => {
  return (
    <S.container id="contatos">
      <S.content>
        <h1>Dhiogo Frutuoso</h1>

        <h2>
          Desenvolvedor Full-Stack | construindo soluções de alto desempenho
          utilizando boas práticas.
        </h2>

        <S.contacts>
          <a
            href="https://github.com/dhiogoFrutuoso"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} alt="GitHub" />
          </a>

          <a
            href="https://www.linkedin.com/in/dhiogofrutuoso/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="LinkedIn" />
          </a>

          <a
            href="mailto:dhiogofrutuoso294@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <img src={gmail} alt="Gmail" />
          </a>

          <a
            href="https://www.instagram.com/whydhiogo_/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagram} alt="Instagram" />
          </a>
        </S.contacts>

        <h2>© 2026 Dhiogo Frutuoso. Todos os direitos reservados.</h2>
      </S.content>
    </S.container>
  );
};
