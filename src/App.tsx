import Header from "./Components/Header.jsx";
import Hero from "./Components/Hero.js";
import Aboutme from "./Components/Aboutme.js";
import Subtitle from "./Components/Subtitle.js";
import ProyectsList from "./Containers/ProyectsList.js";
import SkillsList from "./Containers/SkillsList.js";
import Footer from "./Components/Footer.js";
import Contact from "./Components/Contact.js";
import { useContext } from "react";
import { AppContext } from "../src/Context/ContextApp.js";
function App() {
  const { isOn } = useContext(AppContext);
  return (
    <>
      <Header />
      <Hero />
      <Aboutme />

      {isOn ? (
        <Subtitle subtitle="Proyectos" />
      ) : (
        <Subtitle subtitle="Proyects" />
      )}
      <ProyectsList />
      <ProyectsList />

      {isOn ? (
        <Subtitle subtitle="Habilidades" />
      ) : (
        <Subtitle subtitle="Skills" />
      )}
      <SkillsList />

      {isOn ? (
        <Subtitle subtitle="Contacto" />
      ) : (
        <Subtitle subtitle="Contact" />
      )}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
