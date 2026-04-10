import { BackToTopButton } from "./components/BackToTopButton/BackToTopButton";
import { Banner } from "./components/Banner/Banner";
import { Cover } from "./components/Cover/Cover";
import { Honors } from "./components/Honors/Honors";
// import { NavBar } from "./components/NavBar/NavBar";
import { Technologies } from "./components/Technologies/Technologies";

import { GlobalStyles } from "./styles/GlobalStyles";

import { useLenis } from "./hooks/Lenis";
import { Projects } from "./components/Projects/Projects";
import { Contacts } from "./components/Contacts/Contacts";
import ClickSpark from "./components/ClickSpark/ClickSpark";
import PillNav from "./components/PillNav/PillNav";

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

      {/* <NavBar /> */}
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
