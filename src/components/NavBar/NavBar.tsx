import React, { useState } from "react";
import * as S from "./styles";

export const NavBar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <S.NavBar>
      <nav>
        <S.NavBarContainerList $open={open}>
          <S.NavBarItem>
            <a href="#banner" style={{ color: "rgb(161, 0, 0)" }} onClick={handleClose}>Sobre mim</a>
          </S.NavBarItem>
          <S.NavBarItem>
            <a href="#tecnologias" onClick={handleClose}>Tecnologias</a>
          </S.NavBarItem>
          <S.NavBarItem>
            <a href="#honrarias" onClick={handleClose}>Honrarias</a>
          </S.NavBarItem>
          <S.NavBarItem>
            <a href="#projetos" onClick={handleClose}>Projetos</a>
          </S.NavBarItem>
          <S.NavBarItem>
            <a href="#contatos" onClick={handleClose}>Contatos</a>
          </S.NavBarItem>
        </S.NavBarContainerList>

        <div>
          <img
            src="https://img.icons8.com/?size=100&id=120374&format=png&color=000000"
            alt=""
          />
        </div>

        <S.HamburgerButton onClick={() => setOpen((prev) => !prev)}>
          <span style={{ transform: open ? "rotate(45deg) translateY(7px)" : "none" }} />
          <span style={{ opacity: open ? "0" : "1" }} />
          <span style={{ transform: open ? "rotate(-45deg) translateY(-7px)" : "none" }} />
        </S.HamburgerButton>
      </nav>
    </S.NavBar>
  );
};