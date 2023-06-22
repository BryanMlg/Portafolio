import Imagen from "../assets/Javascript.svg";
import Typescript from "../assets/Typescript.svg";
import Css from "../assets/Css.svg";
import Skill from "../Components/Skill";
import Sass from "../assets/Sass.svg";
import Html from "../assets/Html.svg";
import Nextjs from "../assets/NextJs.svg";
import Bootstrap from "../assets/Bootstrap.svg";
import React from "../assets/react.svg";
import Tailwind from "../assets/Tailwind.svg";
import Webpack from "../assets/Webpack.svg";
import Git from "../assets/Git.svg";
import Vite from "../assets/vite.svg"
export default function SkillsList() {
  return (
    <section className="container" id="Skills">
      <h3 className="text-center text-info mb-3 mt-5">Lenguajes</h3>
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-2">
          <Skill image={Imagen} />
        </div>
        <div className="col-2">
          <Skill image={Typescript} />
        </div>
      </div>
      <h3 className="text-center text-info mb-3 mt-3">Maquetado</h3>
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-2 ">
          <Skill image={Css} />
        </div>
        <div className="col-2">
          <Skill image={Sass} />
        </div>
        <div className="col-2">
          <Skill image={Html} />
        </div>
      </div>
      <h3 className="text-center text-info mb-3 mt-3">
        Frameworks y Librerias
      </h3>
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-2">
          <Skill image={Nextjs} />
        </div>
        <div className="col-2">
          <Skill image={Bootstrap} />
        </div>
        <div className="col-2">
          <Skill image={Tailwind} />
        </div>
        <div className="col-2">
          <Skill image={React} />
        </div>
      </div>
      <h3 className="text-center text-info mb-3 mt-3">
       Herramientas
      </h3>
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-2">
          <Skill image={Git} />
        </div>
        <div className="col-2">
          <Skill image={Webpack} />
        </div>
        <div className="col-2 ">
          <Skill image={Vite} />
        </div>
      </div>
    </section>
  );
}
