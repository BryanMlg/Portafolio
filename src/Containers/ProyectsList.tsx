import Proyects from "../Components/Proyects";
import FeelGoodImage from "../assets/FeelGoodAppImage.webp";
import FeelGoodImage2 from "../assets/FeelGood2.webp";
import FeelGoodImage3 from "../assets/FeelGood3.webp";
import ProjectModal from "../Components/ProjectModal";

export default function ProyectsList() {
  return (
    <section className="container px-5 mt-5">
      <div
        id="projectCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row justify-content-center">
              <div className="col-lg-8  mt-3">
                <Proyects
                  description="Aplicación médica centrada en la gestión de pacientes, diseñada
                para optimizar el seguimiento de enfermedades, síntomas y
                tratamientos. Este sistema está dirigido tanto a médicos como a
                pacientes, brindando una plataforma para la consulta, registro y
                monitoreo de la salud general."
                  title="Feel Good"
                  image={FeelGoodImage}
                  gitHub="https://github.com/BryanMlg/FeelGoodApp"
                  webUrl="https://feel-good-app.vercel.app/auth/login"
                />
              </div>
            </div>
          </div>

          {/* <div className="carousel-item">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-6 mt-3">
                <Proyects title="Otro Proyecto" image={FeelGoodImage} />
              </div>
            </div>
          </div> */}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#projectCarousel"
          data-bs-slide="prev"
        >
          <span aria-hidden="true">
            <i className="bi bi-caret-left-fill text-primary" />
          </span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#projectCarousel"
          data-bs-slide="next"
        >
          <span aria-hidden="true">
            <i className="bi bi-caret-right-fill text-primary" />
          </span>
        </button>
      </div>

      {/* Modal para los detalles del proyecto */}
      <ProjectModal
        title={"Principales Funciones:"}
        images={[FeelGoodImage, FeelGoodImage2, FeelGoodImage3]}
        description={`Registro de Pacientes: Los pacientes pueden ser registrados y sus datos personales, como edad, género, y antecedentes médicos, son almacenados de forma segura.<br /><br />
        Gestión de Citas: Los pacientes pueden reservar citas y consultar disponibilidad de fechas.<br /><br />Monitoreo de Enfermedades: Se realiza un seguimiento detallado de las enfermedades de cada paciente, permitiendo que el médico asocie diagnósticos específicos (enfermedades activas) a cada uno. Esto incluye condiciones específicas como la menopausia.<br /><br /> Seguimiento de Síntomas: Los pacientes pueden registrar sus síntomas diariamente, lo que permite un monitoreo constante de su evolución. Esto es de gran ayuda para los médicos al momento de ajustar tratamientos.<br /><br />Autenticación y Seguridad: Se utiliza un sistema de autenticación robusto, con funcionalidad de recuperación de contraseña a través de correos electrónicos y validación de sesiones.`}
      />
    </section>
  );
}
