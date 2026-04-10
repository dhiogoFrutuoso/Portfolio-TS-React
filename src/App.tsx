import { BackToTopButton } from "./components/BackToTopButton/BackToTopButton";
import { Banner } from "./components/Banner/Banner";
import { Cover } from "./components/Cover/Cover";
import { Honors } from "./components/Honors/Honors";
import { Technologies } from "./components/Technologies/Technologies";

import { GlobalStyles } from "./styles/GlobalStyles";

import { useLenis } from "./hooks/Lenis";
import { Projects } from "./components/Projects/Projects";
import { Contacts } from "./components/Contacts/Contacts";
import ClickSpark from "./components/ClickSpark/ClickSpark";
import PillNav from "./components/PillNav/PillNav";
import AnimatedCursor from "react-animated-cursor"

function App() {
  useLenis();

  return (
    <>
      <GlobalStyles />
      <ClickSpark
        sparkColor="#fff"
        sparkSize={2}
        sparkRadius={50}
        sparkCount={8}
        duration={400}
      />
      <AnimatedCursor
        innerSize={8}
        outerSize={50}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        innerStyle={{
          backgroundColor: "#ffffff",
        }}
        outerStyle={{
          border: "3px solid #ff0000",
          boxShadow: '0 0 10px 5px #ff000099'
        }}
        clickables={[
          "a",
          "button",
          ".pill", // Seus links da PillNav
          "input",
          "select",
          "textarea",
        ]}
      />
      <PillNav
        items={[
          { label: "Sobre", href: "#banner" },
          { label: "Tecnologias", href: "#tecnologias" },
          { label: "Honrarias", href: "#honrarias" },
          { label: "Projetos", href: "#projetos" },
          { label: "Contatos", href: "#contatos" },
        ]}
        activeHref="/"
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="#000000"
        pillColor="#d40000"
        hoveredPillTextColor="#ff0000"
        pillTextColor="#000000"
        initialLoadAnimation={false}
      />
      <BackToTopButton />
      <main>
        <Cover />
        <Banner />
        <Technologies />
        <Honors />
        <Projects />
      </main>

      <Contacts />
    </>
  );
}

export default App;
