import styled from "styled-components";

export const Button = styled.aside`
  div {
    height: 50px;
    width: 50px;
    background: linear-gradient(135deg, rgb(179, 0, 0) 0%, rgb(68, 0, 0) 100%);
    border-radius: 50%;
    position: fixed;
    right: 50px;
    bottom: 50px;
    cursor: pointer;
    padding: 0.8rem;
    z-index: 1;
    transition: all 0.5s ease;
  }

  div:hover {
    transform: translateY(-1rem);
  }

  h1 {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
