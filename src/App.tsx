import { BackToTopButton } from "./components/BackToTopButton/BackToTopButton";
import { Banner } from "./components/Banner/Banner";
import { Cover } from "./components/Cover/Cover";
import { Honors } from "./components/Honors/Honors";
import { NavBar } from "./components/NavBar/NavBar";
import { Technologies } from "./components/Technologies/Technologies";

import { GlobalStyles } from "./styles/GlobalStyles";

import { useLenis } from "./hooks/Lenis";
import { Projects } from "./components/Projects/Projects";
import { Contacts } from "./components/Contacts/Contacts";

function App() {
  useLenis();

  return (
    <>
      <GlobalStyles />
      <NavBar />
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