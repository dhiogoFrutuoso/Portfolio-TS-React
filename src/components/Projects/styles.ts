import styled from "styled-components";

export const container = styled.section`
  height: 900px;
  margin-top: 10rem;
  background-color: rgb(0, 0, 0);
  overflow: hidden;

  @media (max-width: 740px) {
    height: auto;
    min-height: 800px;
    padding-bottom: 4rem;
    margin-top: 6rem;
  }
`;

export const title = styled.h3`
  font-size: 40px;
  font-weight: 500;
  color: white;
  text-align: center;
  margin-bottom: 8rem;

  @media (max-width: 500px) {
    font-size: 28px;
    margin-bottom: 4rem;
  }
`;

export const cards = styled.div`
  display: flex;
  align-items: center;
  height: 650px;
  gap: 1.5rem;
  padding: 1rem;
  transition: transform 0.7s cubic-bezier(0.5, 0, 0.1, 1);

  @media (max-width: 740px) {
    height: auto;
    align-items: stretch;
  }
`;

export const card = styled.div`
  background: black;
  border-radius: 20px;
  overflow: hidden;
  height: 600px;
  border: rgb(64, 64, 64) solid 3px;
  background: linear-gradient(135deg, rgb(32, 32, 32) 0%, rgb(11, 11, 11) 100%);
  filter: drop-shadow(0 0 6px rgb(42, 42, 42));
  transition: all 0.5s ease;
  box-sizing: border-box;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 740px) {
    height: auto;
    min-height: 650px;
  }

  @media (max-width: 500px) {
    min-height: 700px;
  }
`;

export const cardImage = styled.div`
  margin-bottom: 1.3rem;
  width: 100%;
  height: 150px;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const cardTitle = styled.h3`
  text-align: center;
  font-size: 18px;
  font-weight: 200;
  line-height: 20px;
  color: white;
  margin: 8px;

  @media (max-width: 500px) {
    font-size: 15px;
  }
`;

export const cardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem 2rem;
  border-radius: 20px;
  margin-top: -2rem;
  gap: 0.5rem;
  font-weight: 200;

  @media (max-width: 500px) {
    padding: 1.2rem;
  }
`;

export const cardInfoButton = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
  background-color: rgb(170, 0, 0);
  border: gray solid 1px;
  border-radius: 1rem;
  align-items: center;
  justify-content: center;
  transition: all 1s ease-in;

  a {
    color: white;
    text-decoration: none;
    width: 100%;
    text-align: center;
    transition: all 0.3s ease;
  }

  a:hover {
    cursor: pointer;
  }
`;

export const cardDescription = styled.div`
  background: linear-gradient(135deg, rgb(32, 32, 32) 0%, rgb(11, 11, 11) 100%);
  padding: 0.5rem;
  height: 230px;
  border-radius: 1rem;

  @media (max-width: 740px) {
    height: auto;
    min-height: 180px;
  }

  h4 {
    color: white;
    font-size: 15px;
    text-align: center;
    font-weight: 300;
    filter: drop-shadow(0 0 2px white);

    @media (max-width: 740px) {
      font-size: 11px;
    }
  }

  p {
    color: white;
    font-size: 15px;

    @media (max-width: 740px) {
      font-size: 11px;
    }
  }
`;

export const cardTechs = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 95px;
  padding: 1rem 0;
  gap: 0.5rem 0.5rem;
  justify-content: center;

  @media (max-width: 740px) {
    height: auto;
    min-height: 80px;
  }
`;

export const cartTech = styled.div`
  display: flex;
  width: 70px;
  height: 30px;
  background-color: rgb(36, 31, 31);
  border: gray solid 1px;
  border-radius: 1rem;
  align-items: center;
  justify-content: center;
  transition: all 1s ease-in;

  &:hover {
    transform: scale(1.05);
  }
`;

export const cardTechText = styled.h4`
  color: white;
  font-size: 10px;

  @media (max-width: 740px) {
    font-size: 11px;
  }
`;

export const sliderContainer = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 80px;

  @media (max-width: 740px) {
    padding: 0 50px;
  }

  @media (max-width: 500px) {
    padding: 0 40px;
  }
`;

export const sliderControls = styled.div``;

export const prevButton = styled.button`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: 1px solid rgb(64, 64, 64);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 20px;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;

  &:hover {
    filter: drop-shadow(0 0 14px rgb(155, 0, 0));
    border-color: white;
  }

  @media (max-width: 500px) {
    width: 35px;
    height: 35px;
    font-size: 14px;
  }
`;

export const nextButton = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: 1px solid rgb(64, 64, 64);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 20px;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;

  &:hover {
    filter: drop-shadow(0 0 14px rgb(155, 0, 0));
    border-color: white;
  }

  @media (max-width: 500px) {
    width: 35px;
    height: 35px;
    font-size: 14px;
  }
`;

export const sliderViewport = styled.div`
  overflow: hidden;
  width: 100%;
`;