import { useEffect } from "react";
import Imagen from "../assets/hero-inferior.svg";
import { useContext } from "react";
import { AppContext } from "../Context/ContextApp";
import Aos from "aos";
export default function Hero() {
  useEffect(() => {
    Aos.init();
  }, []);
  const {isOn} = useContext(AppContext);
  return (
    <section
      className="d-flex justify-content-around align-items-center  px-5 flex-column flex-md-row mt-5 mb-5"
      data-aos="fade-down"
      data-aos-easing="ease-in-out"
      data-aos-duration="1000"
      id="Hero"
    >
      <div>
        {isOn ? <h1>Hola,</h1> : <h1>Hi,</h1>}
        <div className="d-flex">
          {isOn ? <h1>Soy</h1> : <h1>I'm</h1>}
          <h1 className="ms-2 text-primary ">Bryan</h1>
        </div>
        <h1>Frontend Developer</h1>
        <button
          type="button"
          className="btn btn-primary mt-5"
          style={{ width: "260px", height: "50px" }}
        >
           {isOn ? "Ver CV" : "See Resume"}
        </button>
      </div>
      <div>
        <img
          src={Imagen}
          className="img-fluid"
          alt="Pc"
          style={{ width: "375px", height: "300px" }}
        />
      </div>
    </section>
  );
}
