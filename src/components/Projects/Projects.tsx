import React, { useState, useEffect, useRef } from "react";
import * as S from "./styles";

import portalvozativa from "../../assets/img/portalvozativa.png";
import kokasouls from "../../assets/img/kokasouls.png";
import ecommerce from "../../assets/img/e-commerce.png";
import cracha from "../../assets/img/cracha.png";
import portfolio from "../../assets/img/portfolio.png";
import blogapp from "../../assets/img/blogapp.png";
import ecoscan from "../../assets/img/ecoscan.png";
import flagsgames from "../../assets/img/flagsgames.png";

interface Project {
  title: string;
  image: string;
  description: string;
  techs: string[];
  link: string;
}

const projectsData: Project[] = [
  {
    title: "Portal Voz Ativa",
    image: portalvozativa,
    description:
      "O Voz Ativa é uma plataforma de Tecnologia Social inspirada no projeto Ceará de Valores. Mais do que um software, é um pacto de transparência e eficiência, projetado para que cada cidadão de Cariús seja um colaborador ativo na construção de uma cidade melhor.",
    techs: ["HTML", "CSS", "JAVASCRIPT", "NODEJS", "MONGODB", "EXPRESS"],
    link: "https://github.com/dhiogoFrutuoso/Portal-Voz-Ativa",
  },
  {
    title: "Koka Souls",
    image: kokasouls,
    description:
      "Loja virtual de itens e serviços in-game para jogos Souls-like. Desenvolvido com HTML5, CSS3 e JavaScript vanilla, sem frameworks. Deploy contínuo via Vercel.",
    techs: ["HTML", "CSS", "JAVASCRIPT"],
    link: "https://www.kokasouls.com.br/",
  },
  {
    title: "MyShop",
    image: ecommerce,
    description:
      "Aplicação de e-commerce desenvolvida com React e TypeScript, focada em oferecer uma experiência de loja virtual moderna e responsiva. O projeto utiliza tipagem estática para garantir maior confiabilidade no código com Deploy feito na Vercel.",
    techs: ["HTML", "SCSS", "STYLED-C", "TYPESCRIPT", "REACT", "REDUX"],
    link: "https://e-commerce-blue-chi-32.vercel.app/",
  },
  {
    title: "FliSol Crachá",
    image: cracha,
    description:
      "Web app para criação de crachás personalizados com temas geek, desenvolvida para o FliSol 2026. Feita com HTML, CSS e JavaScript, usa html2canvas para exportar o card como imagem. Personalize nome, fonte, cores e fundos de animes, jogos e séries.",
    techs: ["HTML", "CSS", "JAVASCRIPT"],
    link: "https://dhiogofrutuoso.github.io/FliSol-Cracha/",
  },
  {
    title: "Portfólio Online",
    image: portfolio,
    description:
      "Portfólio pessoal desenvolvido com HTML, CSS e JavaScript, apresentando minha trajetória, habilidades técnicas, conquistas e projetos como desenvolvedor.",
    techs: ["HTML", "CSS", "JAVASCRIPT"],
    link: "https://dhiogofrutuoso.github.io/Portfolio/",
  },
  {
    title: "Blog App",
    image: blogapp,
    description:
      "O BlogApp é uma aplicação web desenvolvida em Node.js para o gerenciamento de postagens e categorias. O projeto foi estruturado seguindo o padrão MVC e foca no aprendizado de autenticação, banco de dados NoSQL e renderização dinâmica no servidor.",
    techs: ["NODEJS", "HTML", "MONGODB", "EXPRESS", "BOOTSTRAP"],
    link: "https://github.com/dhiogoFrutuoso/BlogApp",
  },
  {
    title: "Eco Scan App",
    image: ecoscan,
    description:
      "O EcoScanApp une tecnologia e consciência ambiental. Usando inteligência artificial, ele identifica objetos em tempo real para fornecer métricas ecológicas, orientando decisões sustentáveis sobre resíduos e consumo.",
    techs: ["PYTHON", "STREAMLIT", "GPT4o"],
    link: "https://github.com/dhiogoFrutuoso/EcoScanApp",
  },
  {
    title: "Flags Game",
    image: flagsgames,
    description:
      "Um jogo educativo em que os jogadores adivinham o país com base na sua bandeira. Desenvolvido com Python e Kivy, suporta vários níveis de dificuldade, dicas e uma interface de usuário simples e multiplataforma.",
    techs: ["PYTHON", "KIVY"],
    link: "https://github.com/dhiogoFrutuoso/FlagsGame",
  },
];

export const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(window.innerWidth < 500 ? 1 : 3);
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const maxIndex = projectsData.length - itemsPerPage;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!trackRef.current || !cardRef.current) return;
    const cardWidth = cardRef.current.offsetWidth;
    const gap = 24;
    trackRef.current.style.transform = `translateX(-${currentIndex * (cardWidth + gap)}px)`;
  }, [currentIndex, itemsPerPage]);

  return (
    <S.container id="projetos">
      <S.title>
        Meus <span style={{ color: "rgb(155, 0, 0)" }}>Projetos</span>
      </S.title>

      <S.sliderContainer>
        <S.sliderControls>
          <S.prevButton onClick={handlePrev}>❮</S.prevButton>
          <S.nextButton onClick={handleNext}>❯</S.nextButton>
        </S.sliderControls>

        <S.sliderViewport>
          <S.cards ref={trackRef}>
            {projectsData.map((project, index) => (
              <S.card
                key={index}
                ref={index === 0 ? cardRef : null}
                style={{
                  flex: `0 0 calc((100% - ${(itemsPerPage - 1) * 24}px) / ${itemsPerPage})`,
                }}
              >
                <S.cardImage>
                  <img src={project.image} alt={project.title} />
                </S.cardImage>

                <S.cardTitle>{project.title}</S.cardTitle>

                <S.cardInfoContainer>
                  <S.cardDescription>
                    <h4>Descrição:</h4>
                    <p>{project.description}</p>
                  </S.cardDescription>

                  <S.cardTechs>
                    {project.techs.map((tech, techIndex) => (
                      <S.cartTech key={techIndex}>
                        <S.cardTechText>{tech}</S.cardTechText>
                      </S.cartTech>
                    ))}
                  </S.cardTechs>

                  <S.cardInfoButton>
                    <a href={project.link} target="_blank" rel="noreferrer">
                      Veja Mais
                    </a>
                  </S.cardInfoButton>
                </S.cardInfoContainer>
              </S.card>
            ))}
          </S.cards>
        </S.sliderViewport>
      </S.sliderContainer>
    </S.container>
  );
};
