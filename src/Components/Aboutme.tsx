import Imagen from "../assets/Desarrollador.svg";
import Subtitle from "./Subtitle";
import Aos from "aos";
import { useEffect } from "react";
export default function Aboutme() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section
      className="d-flex flex-column"
      data-aos="fade-down"
      data-aos-easing="ease-in-out"
      data-aos-duration="1000"
      id="aboutme"
    >
      <Subtitle subtitle="Sobre Mi"/>
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
        <div className="card px-5 text-center col-md-7 shadow-lg">
          <h1>Soy Bryan Guerra</h1>
          <p>
            Soy un apasionado por la programación y la música. La disciplina,
            dedicación y compromiso son tres factores que me definen. Me gusta
            dar siempre lo mejor de mí en todo, por más simple o compleja que
            pueda ser la tarea. A continución, verás los proyectos que he
            realizado hasta el momento.
          </p>
        </div>
      </div>
    </section>
  );
}
