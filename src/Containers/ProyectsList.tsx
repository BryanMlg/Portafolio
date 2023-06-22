import Proyects from "../Components/Proyects";
export default function ProyectsList() {
  return (
    <section className="container px-5 mt-5">
      <div className="row">
        <div className="col mt-3">
          <Proyects />
        </div>
        <div className="col mt-3">
          <Proyects />
        </div>
      </div>
    </section>
  );
}
