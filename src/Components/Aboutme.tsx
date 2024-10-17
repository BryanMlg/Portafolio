import Imagen from "../assets/Desarrollador.svg";
import Subtitle from "./Subtitle";
import Aos from "aos";
import { useContext } from "react";
import { AppContext } from "../Context/ContextApp";
import { useEffect } from "react";
export default function Aboutme() {
  const { isOn } = useContext(AppContext);
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section
      data-aos="fade-down"
      data-aos-easing="ease-in-out"
      data-aos-duration="1000"
      id="aboutme"
    >
      {isOn ? (
        <Subtitle subtitle="Sobre Mi" />
      ) : (
        <Subtitle subtitle="About Me" />
      )}

      <div
        data-aos="fade-left"
        className="d-flex justify-content-evenly align-items-center  px-5 flex-column flex-sm-row mt-5"
      >
        <div className="mb-5">
          <img
            src={Imagen}
            className="img-fluid mt-4"
            alt="Pc"
            style={{ width: "250px", height: "auto" }}
          />
        </div>
        <div className="card px-5 text-center col-md-7 shadow-sm">
          {isOn ? <h1>Soy Bryan Guerra</h1> : <h1>I'm Bryan Guerra</h1>}
          {isOn ? (
            <p>
              Desarrollador frontend autodidacta con más de 2 años de
              experiencia en la creación de interfaces web para diversos
              sectores administrativos. He trabajado en proyectos relacionados
              con transporte, inventarios, contabilidad, viáticos y recursos
              humanos. Con una sólida experiencia en tecnologías frontend, me
              especializo en comprender las necesidades específicas de los
              usuarios y en diseñar soluciones personalizadas que mejoran su
              experiencia e interacción con el producto. La disciplina,
              dedicación y compromiso son tres factores que me definen, y
              siempre doy lo mejor de mí en cada tarea, sin importar su
              complejidad. Estoy comprometido con la mejora continua,
              colaborando con equipos multidisciplinarios para lograr proyectos
              de alta calidad y aportar valor a cada iniciativa en la que
              participo.
            </p>
          ) : (
            <p>
              Self-taught frontend developer with over 2 years of experience in
              creating web interfaces for various administrative sectors. I have
              worked on projects related to transportation, inventory
              management, accounting, travel expenses, and human resources. With
              solid experience in frontend technologies, I specialize in
              understanding the specific needs of users and designing
              personalized solutions that enhance their experience and
              interaction with the product. Discipline, dedication, and
              commitment are three factors that define me, and I always give my
              best in every task, no matter how complex it may be. I am
              committed to continuous improvement, collaborating with
              multidisciplinary teams to deliver high-quality projects and add
              value to every initiative I’m involved in.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
