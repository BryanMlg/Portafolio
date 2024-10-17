import { useState } from "react";
import "../css/imageModal.css"
interface ProjectModalProps {
  title: string;
  images: string[]; // Recibe un array de imágenes
  description: string;
}

export default function ProjectModal({
  title,
  images,
  description,
}: ProjectModalProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // Estado para la imagen seleccionada
  const [isImageVisible, setIsImageVisible] = useState(false); // Controla la visibilidad para la animación

  const handleImageClick = (image: string) => {
    setSelectedImage(image); // Almacena la imagen seleccionada
    setTimeout(() => {
      setIsImageVisible(true); // Muestra la imagen con retraso para aplicar la animación
    }, 100);
  };

  const closeModal = () => {
    setIsImageVisible(false); // Oculta la imagen antes de cerrarla
    setTimeout(() => {
      setSelectedImage(null); // Cierra el modal después de que la animación termine
    }, 300); // Duración de la animación
  };

  return (
    <>
      <div
        className="modal fade"
        id="projectModal"
        tabIndex={-1}
        aria-labelledby="projectModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="projectModalLabel">
                {title}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/* Carrusel para mostrar múltiples imágenes */}
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to={index}
                      className={index === 0 ? "active" : ""}
                      aria-current={index === 0 ? "true" : undefined}
                      aria-label={`Slide ${index + 1}`}
                    ></button>
                  ))}
                </div>
                <div className="carousel-inner">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                    >
                      <img
                        src={image}
                        className="d-block w-100 img-fluid project-image"
                        alt={`Slide ${index + 1}`}
                        style={{ cursor: "pointer" }}
                        onClick={() => handleImageClick(image)} // Abre la imagen seleccionada
                      />
                    </div>
                  ))}
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              {/* Fin del carrusel */}
              <p dangerouslySetInnerHTML={{ __html: description }}></p>
            </div>
            <div className="modal-footer">
              <div className="d-flex justify-content-center align-items-center">
                <a
                  href="https://feel-good-app.vercel.app/auth/login"
                  className="btn btn-outline-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-globe"></i>
                </a>
                <a
                  href="#"
                  className="btn btn-outline-white ms-3"
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

      {/* Modal para la imagen ampliada */}
      {selectedImage && (
        <div
          className={`image-modal-overlay ${isImageVisible ? "visible" : ""}`}
          onClick={closeModal}
        >
          <div className="image-modal-content">
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <img src={selectedImage} alt="Selected" className="image-full" />
          </div>
        </div>
      )}
    </>
  );
}
