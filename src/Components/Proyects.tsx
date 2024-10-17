import Aos from "aos";
import { useEffect } from "react";
import "../css/proyects.css";

interface ProyectsProps {
  title: string;
  image: string;
  webUrl: string;
  gitHub: string;
  description: string;
}

export default function Proyects({ title, image, webUrl, gitHub, description}: ProyectsProps) {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      {/* Tarjeta activadora */}
      <div
        className="card project-card shadow mb-5 bg-body-tertiary rounded"
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
                {description}
              </p>
              <div className="d-flex justify-content-center align-items-center">
                <a
                  href={webUrl}
                  className="btn btn-outline-dark"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-globe"></i>
                </a>
                <a
                  href={gitHub}
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
