import styled from "styled-components";

export const container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 400px;
  width: 100%;
  margin-top: 10rem;
  padding-bottom: 6rem;
  background-color: rgb(0, 0, 0);

  @media (max-width: 750px) {
    margin-top: 6rem;
    padding-bottom: 4rem;
  }
`;

export const title = styled.h3`
  font-size: 40px;
  font-weight: 500;
  color: white;
  text-align: center;
  margin-bottom: 6rem;

  @media (max-width: 500px) {
    font-size: 28px;
    margin-bottom: 3rem;
  }
`;

export const timeline = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  padding: 4rem 3rem;
  border-radius: 2rem;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.8), inset 0 1px 0 0 rgba(255, 0, 0, 0.56);

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: repeating-linear-gradient(
      to bottom,
      transparent 0px,
      transparent 6px,
      rgb(155, 0, 0) 6px,
      rgb(155, 0, 0) 14px
    );
    transform: translateX(-50%);
    opacity: 0.6;
  }

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(
      to bottom,
      transparent,
      rgba(255, 80, 80, 0.15) 20%,
      rgba(255, 80, 80, 0.15) 80%,
      transparent
    );
    transform: translateX(calc(-50% + 3px));
    filter: blur(4px);
  }

  @media (max-width: 750px) {
    padding: 2rem 1rem;

    &::before, &::after {
      visibility: hidden;
    }
  }
`;

export const timelineItem = styled.div<{ $right?: boolean }>`
  display: flex;
  justify-content: ${({ $right }) => ($right ? "flex-end" : "flex-start")};
  padding-bottom: 3.5rem;
  padding-right: ${({ $right }) => ($right ? "0" : "calc(50% + 3rem)")};
  padding-left: ${({ $right }) => ($right ? "calc(50% + 3rem)" : "0")};
  position: relative;

  &:last-child {
    padding-bottom: 0;
  }

  @media (max-width: 750px) {
    justify-content: center;
    padding: 0 0 2rem 0;
  }
`;

export const dot = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: radial-gradient(circle, rgb(255, 60, 60) 0%, rgb(140, 0, 0) 100%);
  border: 2px solid rgb(80, 0, 0);
  box-shadow:
    0 0 0 4px rgba(155, 0, 0, 0.15),
    0 0 12px rgba(200, 0, 0, 0.8),
    0 0 30px rgba(155, 0, 0, 0.4);
  z-index: 2;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: white;
    opacity: 0.8;
  }

  @media (max-width: 750px) {
    display: none;
  }
`;

export const card = styled.div`
  width: 500px;
  height: 350px;
  padding: 1.6rem;
  border-radius: 2rem;
  background: linear-gradient(135deg, rgb(26, 26, 26) 0%, rgb(18, 18, 18) 100%);
  border: 1px solid rgb(64, 64, 64);
  box-shadow:
    0 4px 30px rgba(0, 0, 0, 0.7),
    inset 0 1px 0 rgba(255, 255, 255, 0.06);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;

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
    transform: translateY(-4px) scale(1.01);
    border-color: rgba(155, 0, 0, 0.5);
    box-shadow:
      0 8px 40px rgba(0, 0, 0, 0.8),
      0 0 20px rgba(155, 0, 0, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.08);
  }

  &:hover::before {
    left: 150%;
  }

  @media (max-width: 750px) {
    width: 90%;
    height: auto;
    min-height: 300px;
  }

  @media (max-width: 500px) {
    width: 95%;
    padding: 1.2rem;
  }
`;

export const cardHeader = styled.div`
  display: flex;
  gap: 1.2rem;
  height: 130px;

  @media (max-width: 500px) {
    height: auto;
    gap: 0.8rem;
  }
`;

export const cardImage = styled.div`
  width: 120px;
  height: 120px;
  flex-shrink: 0;
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid rgb(80, 80, 80);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.9);
    transition: filter 0.3s ease;
  }

  &:hover img {
    filter: brightness(1.05);
  }

  @media (max-width: 500px) {
    width: 80px;
    height: 80px;
  }
`;

export const cardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.2rem 0;
  flex: 1;
`;

export const cardDate = styled.p`
  color: rgb(200, 0, 0);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
`;

export const cardTitle = styled.h4`
  color: rgb(230, 230, 230);
  font-weight: 400;
  font-size: 13px;
  line-height: 1.6;

  @media (max-width: 510px) {
    font-size: 11px;
  }
`;

export const cardDescription = styled.div`
  margin-top: 1.2rem;
  height: 50%;
  font-size: 13px;
  border-radius: 1rem;
  color: rgb(180, 180, 180);
  padding: 1rem 1.2rem;
  line-height: 1.7;
  background: rgba(129, 129, 129, 0.178);
  border: 1px solid rgba(88, 88, 88, 0.3);

  @media (max-width: 750px) {
    height: auto;
  }

  @media (max-width: 510px) {
    font-size: 11px;
    padding: 0.8rem;
  }
`;