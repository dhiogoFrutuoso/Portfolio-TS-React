import styled from "styled-components";

export const container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 500px;
  width: 85%;
  margin: 0 auto;
  margin-bottom: 10rem;
  gap: 3rem;

  @media (max-width: 900px) {
    margin-top: 8rem;
    margin-bottom: 3rem;
    flex-direction: column-reverse;
    align-items: center;
    height: 800px;
  }

  @media (max-width: 500px) {
    height: auto;
    padding: 2rem 0 4rem;
    margin-top: 6rem;
    margin-bottom: 2rem;
    gap: 2rem;
  }
`;

export const content = styled.div`
  @media (max-width: 900px) {
    text-align: center;
    width: 100%;
  }

  @media (max-width: 500px) {
    padding: 0 1rem;
  }
`;

export const title = styled.div`
  height: 180px;
  width: 500px;
  color: white;
  font-size: 40px;
  font-weight: 400;
  line-height: 60px;
  margin-top: 5rem;
  white-space: normal;
  word-wrap: break-word;

  @media (max-width: 900px) {
    width: auto;
    height: 310px;
  }

  @media (max-width: 500px) {
    font-size: 28px;
    line-height: 42px;
    height: auto;
    min-height: 200px;
    margin-top: 2rem;
  }

  @keyframes blink {
    from, to { color: transparent; }
    50% { color: #ffffff; }
  }
`;

export const description = styled.p`
  color: white;
  margin-bottom: 40px;
  margin-top: 2rem;
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  width: 500px;

  @media (max-width: 900px) {
    width: auto;
  }

  @media (max-width: 500px) {
    font-size: 14px;
    margin-top: 1rem;
    margin-bottom: 0;
    line-height: 22px;
  }
`;

export const photo = styled.img`
  width: 22rem;
  height: 22rem;
  border-radius: 50%;
  object-fit: cover;
  filter: drop-shadow(0 0 40px rgb(255, 0, 0));
  border: rgb(33, 33, 33) solid 2px;
  animation: float 4s ease-in-out infinite;
  transition: all 1.2s ease-in-out;

  &:hover {
    filter: drop-shadow(0 0 70px rgb(255, 0, 0));
  }

  @media (max-width: 900px) {
    width: 18rem;
    height: 18rem;
  }

  @media (max-width: 500px) {
    width: 12rem;
    height: 12rem;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }
`;

export const socialMedia = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 5rem;

  @media (max-width: 900px) {
    justify-content: center;
    margin-top: 2rem;
  }

  @media (max-width: 500px) {
    margin-top: 1.5rem;
    gap: 0.8rem;
  }

  a {
    text-decoration: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgb(172, 0, 0);
    filter: drop-shadow(0 0 5px rgb(255, 0, 0));
    transition: all 0.3s ease;

    @media (max-width: 500px) {
      width: 34px;
      height: 34px;
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