import styled from "styled-components";

export const container = styled.section`
  min-height: 400px;
  background-color: rgb(0, 0, 0);
  padding: 2rem 0;

  @media (max-width: 600px) {
    padding: 2rem 1rem;
  }
`;

export const title = styled.div`
  div {
    font-size: 40px;
    font-weight: 500;
    margin-bottom: 2rem;
    color: white;
    text-align: center;
    margin-bottom: 8rem;

    @media (max-width: 500px) {
      font-size: 28px;
      margin-bottom: 4rem;
    }
  }
`;

export const cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.2rem;

  @media (max-width: 600px) {
    gap: 1rem;
  }
`;

export const card = styled.div`
  background: black;
  padding: 1rem;
  width: 550px;
  height: 350px;
  border-radius: 20px;
  border: rgb(64, 64, 64) solid 3px;
  background: linear-gradient(135deg, rgb(32, 32, 32) 0%, rgb(11, 11, 11) 100%);
  filter: drop-shadow(0 0 8px rgb(42, 42, 42));
  transition: all 0.5s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -300%;
    width: 300%;
    height: 300%;
    background: linear-gradient(
      120deg,
      transparent 40%,
      rgba(255, 255, 255, 0.048) 50%,
      transparent 60%
    );
    transition: all 4s cubic-bezier(0.19, 1, 0.22, 1);
    pointer-events: none;
  }

  &:hover {
    transform: scale(1.02);
    filter: drop-shadow(0 0 15px rgb(42, 42, 42));
  }

  &:hover::before {
    left: 150%;
  }

  @media (max-width: 600px) {
    width: 100%;
    height: auto;
    min-height: 300px;
  }
`;

export const cardTitle = styled.h3`
  font-size: 25px;
  animation: float-title 4s ease-in-out infinite;
  margin-top: 0.3rem;
  margin-bottom: 1.3rem;
  color: white;
  text-align: center;

  @media (max-width: 500px) {
    font-size: 20px;
  }

  @keyframes float-title {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-5px); }
  }
`;

export const figures = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 0.5rem;
`;

export const figure = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  background: linear-gradient(135deg, rgb(39, 39, 39) 0%, rgb(27, 27, 27) 100%);
  width: 32.2%;
  height: 7.4rem;
  padding: 1rem;
  gap: 0.5rem;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.01);
    filter: drop-shadow(0 0 4px rgb(112, 112, 112));
  }

  img {
    margin: 0 auto;
  }

  h4 {
    color: white;
    font-weight: 200;
    font-size: 12px;
    margin: 0 auto;

    @media (max-width: 500px) {
      font-size: 10px;
    }
  }

  @media (max-width: 600px) {
    width: 31%;
    height: 6.5rem;
    padding: 0.8rem;
  }

  @media (max-width: 400px) {
    width: 30%;
    height: 6rem;
    padding: 0.6rem;
  }
`;