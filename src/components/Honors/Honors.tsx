import React from "react";
import * as S from "./styles";

interface HonorItem {
  year: string;
  image: string;
  title: string;
  description: string;
}

const honorsData: HonorItem[] = [
  {
    year: "2023",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsCdctpOdl2bPsiNMgp6axwlrAmTbTjLOSYw&s",
    title: "Medalha de bronze na Olímpiada Canguru de Matemática e primeira medalha recebida em olimpíadas de matemática",
    description: "Fui premiado na Olímpiada Canguru de Matemática com medalha de bronze.",
  },
  {
    year: "2024",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcxkL8fVNaEkdvw3Anolgo7T-O1mer7gg2yw&s",
    title: "Medalha de prata na Olímpiada Canguru de Matemática e medalha de prata na Olímpiada Mandacaru de Matemática",
    description: "Fui premiado na Olímpiada Canguru de Matemática e na Olímpiada Mandacaru de Matemática com medalha de prata.",
  },
  {
    year: "2025",
    image: "https://www.sema.ce.gov.br/wp-content/uploads/sites/36/2022/12/WhatsApp-Image-2022-12-08-at-09.41.29.jpeg",
    title: "Medalha de Ouro Mandacaru de Matemática, Medalha de Bronze Olímpiada de Educação Física do IFCE e 2° colocação no Ceará Científico",
    description: "Conquistei a medalha de Ouro na Olimpíada Mandacaru de Matemática e a medalha de Bronze na Olimpíada de Educação Física do IFCE. Além disso, alcancei a 2ª colocação na fase regional do Ceará Científico com o desenvolvimento do aplicativo Eco Scan.",
  },
  {
    year: "2026",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdmGzcerR2oINWqZ1Kn_Wg9CUG-tu8jqza0w&s",
    title: "1° Colocação em Ciência da Computação e Engenharia de Software pelo IFCE e 11° em Engenharia de Software pela UFC pela Ampla Concorrência",
    description: "Após a divulgação dos resultados do ENEM 2025, me inscrevi no SISU em três cursos, nos quais em 2 passei na 1° colocação, e no outro em 11° colocado, todos por universidades federais.",
  },
];

export const Honors: React.FC = () => {
  return (
    <S.container id="honrarias">
      <S.title>
        Premiações e <span style={{ color: "rgb(155, 0, 0)" }}>Honrarias</span>
      </S.title>

      <S.timeline>
        {honorsData.map((item, index) => (
          <S.timelineItem key={index} $right={index % 2 !== 0}>
            <S.dot />
            <S.card>
              <S.cardHeader>
                <S.cardImage>
                  <img src={item.image} alt="" />
                </S.cardImage>
                <S.cardInfo>
                  <S.cardDate>{item.year}</S.cardDate>
                  <S.cardTitle>{item.title}</S.cardTitle>
                </S.cardInfo>
              </S.cardHeader>
              <S.cardDescription>{item.description}</S.cardDescription>
            </S.card>
          </S.timelineItem>
        ))}
      </S.timeline>
    </S.container>
  );
};