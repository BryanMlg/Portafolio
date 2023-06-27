import { useState, useEffect } from "react";
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
import Logo from "./assets/5.png";
function App() {
  const [loading, setLoading] = useState(true);
  const { isOn } = useContext(AppContext);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
          <img
            src={Logo}
            alt="Logo"
            className="spinner-grow d-flex justify-content-center align-items-center"
            style={{ width: "150px", height: "150px" }}
          />
      
      </div>
    );
  }

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
