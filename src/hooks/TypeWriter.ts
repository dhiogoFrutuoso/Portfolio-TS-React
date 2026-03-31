// src/hooks/useTypeWriter.ts
import { useEffect, useRef, useState } from "react";

const NAMES = [
  "Dhiogo Frutuoso",
  "Programador",
  "Full-Stack Developer",
  "Penta Medalhista Olímpico de Matemática",
  "Estudante de Ciência da Computação",
  "Admirador da Tecnologia",
];

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const useTypeWriter = () => {
  const [text, setText] = useState("");
  const isRunning = useRef(false);

  useEffect(() => {
    if (isRunning.current) return;
    isRunning.current = true;

    const run = async () => {
      let indexName = 0;
      let characters = 0;
      let isDeleting = false;

      while (true) {
        const currentName = NAMES[indexName];

        if (isDeleting) {
          characters--;
          setText(currentName.substring(0, characters));
        } else {
          characters++;
          setText(currentName.substring(0, characters));
        }

        await wait(100);

        if (!isDeleting && characters === currentName.length) {
          await wait(1000);
          isDeleting = true;
        } else if (isDeleting && characters === 0) {
          await wait(300);
          isDeleting = false;
          indexName = (indexName + 1) % NAMES.length;
        }
      }
    };

    run();
  }, []);

  return text;
};