import Aos from "aos";
import { useEffect } from "react";
import "../css/proyects.css";

interface ProyectsProps {
  title: string;
  image: string;
}

export default function Proyects({ title, image }: ProyectsProps) {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      {/* Tarjeta activadora */}
      <div
        className="card project-card shadow p-3 mb-5 bg-body-tertiary rounded"
        data-bs-toggle="modal"
        data-bs-target="#projectModal"
        data-aos="fade-up"
        data-aos-duration="800"
        style={{ cursor: "pointer" }}
      >
        <div className="card-img-container">
          <img src={image} className="card-img-top w-100" alt="Proyect" />

          <div className="overlay">
            <div className="overlay-content">
              <h5 className="card-title text-dark">{title}</h5>
              <p className="card-text text-dark">
                Aplicación médica centrada en la gestión de pacientes, diseñada
                para optimizar el seguimiento de enfermedades, síntomas y
                tratamientos. Este sistema está dirigido tanto a médicos como a
                pacientes, brindando una plataforma para la consulta, registro y
                monitoreo de la salud general.
              </p>
              <div className="d-flex justify-content-center align-items-center">
                <a
                  href="https://feel-good-app.vercel.app/auth/login"
                  className="btn btn-outline-dark"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-globe"></i>
                </a>
                <a
                  href="#"
                  className="btn btn-outline-dark ms-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
