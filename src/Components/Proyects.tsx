import Imagen from "../assets/hero-inferior.svg";
import Aos from "aos";
import { useEffect } from "react";
export default function Proyects() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      className="card shadow p-3 mb-5 bg-body-tertiary rounded"
      data-aos="fade-up"
      data-aos-duration="500"
    >
      <img
        src={Imagen}
        className="card-img-top w-50 align-self-center"
        alt="Proyect"
      />
      <div className="card-body">
        <h5 className="card-title">E-commerce</h5>
        <p className="card-text">
          Tienda con modulos de compra, administrador, inicio de sesion y mas
        </p>
        <div className="d-flex justify-content-center align-items-center">
          <a href="#" className="btn btn-outline-secondary">
            <i className="bi bi-globe"></i>
          </a>
          <a href="#" className="btn btn-outline-secondary ms-3">
            <i className="bi bi-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
