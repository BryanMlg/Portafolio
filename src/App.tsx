import Header from "./Components/Header.jsx";
import Hero from "./Components/Hero.js";
import Aboutme from "./Components/Aboutme.js";
import Subtitle from "./Components/Subtitle.js";
import ProyectsList from "./Containers/ProyectsList.js";
import SkillsList from "./Containers/SkillsList.js";
function App() {

  return (
    <>
    <Header/>
    <Hero/> 
    <Aboutme/>
    <Subtitle subtitle="Proyectos"/>
    <ProyectsList/>
    <ProyectsList/>
    <Subtitle subtitle="Skills"/>
    <SkillsList/>
    </>
    
  )
}

export default App
