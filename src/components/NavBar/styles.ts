import styled from "styled-components";

export const NavBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  padding: 0 3rem;
  z-index: 100;
  height: 3rem;
  width: 100%;
  font-size: 0.8rem;
  background: black;

  nav {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    width: 100%;
  }

  @media (max-width: 750px) {
    padding: 0 1.5rem;
  }
`;

export const NavBarContainerList = styled.ul<{ $open: boolean }>`
  display: flex;
  justify-content: center;
  list-style: none;
  font-weight: 200;
  gap: 2rem;

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.97);
    z-index: 99;
    opacity: ${({ $open }) => ($open ? "1" : "0")};
    pointer-events: ${({ $open }) => ($open ? "all" : "none")};
    transform: ${({ $open }) => ($open ? "translateY(0)" : "translateY(-10px)")};
    transition: all 0.3s ease;
  }
`;

export const NavBarItem = styled.li`
  a {
    text-decoration: none;
    color: #ffffff;
    transition: all 0.4s ease-in-out;
    font-size: 0.8rem;
  }

  a:hover {
    color: #a7a7a7;
  }

  @media (max-width: 750px) {
    a {
      font-size: 1.4rem;
    }
  }
`;

export const HamburgerButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 101;
  padding: 0.5rem;

  span {
    display: block;
    width: 22px;
    height: 2px;
    background: white;
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  @media (max-width: 750px) {
    display: flex;
  }
`;