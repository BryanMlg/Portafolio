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
      data-aos-duration="800"
    >
      <img
        src={Imagen}
        className="card-img-top w-50 align-self-center"
        alt="Proyect"
      />
      <div className="card-body">
        <h5 className="card-title">Proyect</h5>
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          deleniti? Eius error obcaecati suscipit dicta, dolore quos molestiae
          placeat deserunt tenetur reprehenderit vitae ex, quo rerum culpa
          praesentium iusto? Dolore?
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
