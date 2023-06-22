import Imagen from "../assets/hero-inferior.svg";
export default function Proyects() {
  return (
    <div className="card shadow p-3 mb-5 bg-body-tertiary rounded">
      <img src={Imagen} className="card-img-top" alt="Proyect" />
      <div className="card-body">
        <h5 className="card-title">Proyecto</h5>
        <p className="card-text">Descripcion</p>
        <a href="#" className="btn btn-primary">
          Repositorio
        </a>
      </div>
    </div>
  );
}
