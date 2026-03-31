import styled from "styled-components";

export const container = styled.footer`
  background-color: rgb(24, 24, 24);
  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;

  @media (max-width: 500px) {
    padding: 2rem 1.5rem;
    min-height: auto;
  }
`;

export const content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
  width: 100%;
  max-width: 600px;

  h1 {
    font-size: 2rem;
    font-weight: 400;
    background-image: linear-gradient(to right, #cc0000, #880000);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;

    @media (max-width: 500px) {
      font-size: 1.5rem;
    }
  }

  h2 {
    color: gray;
    font-weight: 200;
    font-size: 14px;
    line-height: 1.6;

    @media (max-width: 500px) {
      font-size: 12px;
    }
  }
`;

export const contacts = styled.div`
  display: flex;
  gap: 1.3rem;
  margin: 1rem;

  @media (max-width: 500px) {
    gap: 1rem;
    margin: 0.5rem;
  }

  a {
    text-decoration: none;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: rgb(172, 0, 0);
    filter: drop-shadow(0 0 10px rgba(255, 0, 0, 0.698));
    transition: all 0.3s ease;

    @media (max-width: 500px) {
      width: 30px;
      height: 30px;
    }
  }

  a:hover {
    transform: translateY(-5px);
    filter: drop-shadow(0 0 8px rgb(255, 0, 0));
  }

  a img {
    width: 100%;
    height: 100%;
    border: rgb(172, 0, 0) 1px solid;
    border-radius: 50%;
  }
`;