import Proyects from "../Components/Proyects";
export default function ProyectsList() {
  return (
    <section className="container px-5 mt-5">
      <div className="row">
        <div className="col-lg-6 col-md-6  mt-3">
          <Proyects />
        </div>
        <div className="col-lg-6 col-md-6  mt-3">
          <Proyects />
        </div>
      </div>
    </section>
  );
}
