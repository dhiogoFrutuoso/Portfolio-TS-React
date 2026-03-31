import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { lenisInstance } from "../../hooks/Lenis";

export const BackToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const elementToObserve = document.querySelector("#honrarias");
    if (!elementToObserve) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
            setVisible(true);
          } else {
            setVisible(false);
          }
        });
      },
      { root: null, threshold: 0 }
    );

    observer.observe(elementToObserve);

    return () => observer.disconnect();
  }, []);

  const handleBackToTop = () => {
    if (lenisInstance.current) {
      lenisInstance.current.scrollTo(0, { duration: 1.5 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setVisible(false);
  };

  return (
    <S.Button
      onClick={handleBackToTop}
      style={{ visibility: visible ? "visible" : "hidden" }}
    >
      <div>
        <h1>↑</h1>
      </div>
    </S.Button>
  );
};