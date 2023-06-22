import Imagen from "../assets/Javascript.svg";
import Skill from "../Components/Skill";
export default function ProyectsList() {
  return (
    <section className="container mt-5">
      <div className="row">
        <div className="col mt-3"><Skill image={Imagen}/></div>
        <div className="col mt-3"><Skill image={Imagen}/></div>
        <div className="col mt-3"><Skill image={Imagen}/></div>
        <div className="col mt-3"><Skill image={Imagen}/></div>
      </div>
    </section>
  );
}
