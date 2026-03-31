import React from "react";
import * as S from "./styles";
import { useTypeWriter } from "../../hooks/TypeWriter";

import githubIcon from "../../assets/img/github.png";
import linkedinIcon from "../../assets/img/linkedin.png";
import gmailIcon from "../../assets/img/gmail.png";
import instagramIcon from "../../assets/img/instagram.png";

export const Banner: React.FC = () => {
  const text = useTypeWriter();

  return (
    <S.container id="banner">
      <S.content>
        <S.title>
          Olá, eu sou
          <br />
          <span style={{ color: "rgb(172, 0, 0)" }}>{text}</span>
          <span>|</span>
        </S.title>

        <S.description>
          Estudante de Ciência da Computação pelo IFCE. Sou apaixonado por
          tecnologia desde a infância e hoje foco em construir soluções de alto
          desempenho utilizando boas práticas de desenvolvimento.
        </S.description>

        <S.socialMedia>
          <a href="https://github.com/dhiogoFrutuoso" target="_blank" rel="noreferrer">
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/dhiogofrutuoso/" target="_blank" rel="noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a href="mailto:dhiogofrutuoso294@gmail.com" target="_blank" rel="noreferrer">
            <img src={gmailIcon} alt="Gmail" />
          </a>
          <a href="https://www.instagram.com/whydhiogo_/" target="_blank" rel="noreferrer">
            <img src={instagramIcon} alt="Instagram" />
          </a>
        </S.socialMedia>
      </S.content>

      <S.photo
        src="https://avatars.githubusercontent.com/u/171385858?v=4"
        alt="Dhiogo Frutuoso"
      />
    </S.container>
  );
};