import React from "react";
import * as S from "./styles";

interface TechItem {
  icon: string;
  name: string;
}

interface TechCategory {
  title: string;
  items: TechItem[];
}

const technologiesData: TechCategory[] = [
  {
    title: "Front-End",
    items: [
      { icon: "html", name: "HTML" },
      { icon: "css", name: "CSS/SCSS" },
      { icon: "js", name: "JavaScript" },
      { icon: "react", name: "React" },
      { icon: "nextjs", name: "Next.js" },
    ],
  },
  {
    title: "Back-End",
    items: [
      { icon: "nodejs", name: "Node.js" },
      { icon: "ts", name: "TypeScript" },
      { icon: "php", name: "PHP" },
      { icon: "python", name: "Python" },
      { icon: "java", name: "Java" },
    ],
  },
  {
    title: "Banco de Dados",
    items: [
      { icon: "mongodb", name: "MongoDB" },
      { icon: "mysql", name: "MySQL" },
      { icon: "postgresql", name: "PostGreSQL" },
    ],
  },
  {
    title: "Ferramentas",
    items: [
      { icon: "vscode", name: "VsCode" },
      { icon: "figma", name: "Figma" },
      { icon: "github", name: "Git/GitHub" },
      { icon: "redux", name: "Redux" },
      { icon: "vercel", name: "Vercel" },
    ],
  },
];

export const Technologies: React.FC = () => {
  return (
    <S.container id="tecnologias">
      <S.title>
        <div>
          Stack <span style={{ color: "rgb(155, 0, 0)" }}>Tecnológica</span>
        </div>
      </S.title>

      <S.cards>
        {technologiesData.map((category, index) => (
          <S.card key={index}>
            <S.cardTitle>{category.title}</S.cardTitle>
            <S.figures>
              {category.items.map((item, itemIndex) => (
                <S.figure key={itemIndex}>
                  <img
                    src={`https://skillicons.dev/icons?i=${item.icon}`}
                    alt={item.name}
                  />
                  <h4>{item.name}</h4>
                </S.figure>
              ))}
            </S.figures>
          </S.card>
        ))}
      </S.cards>
    </S.container>
  );
};