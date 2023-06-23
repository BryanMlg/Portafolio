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
import Vite from "../assets/vite.svg";
import { useContext } from "react";
import { AppContext } from "../Context/ContextApp";
export default function SkillsList() {
  const { isOn } = useContext(AppContext);
  return (
    <section className="container" id="Skills">
      {isOn ? (
        <h3 className="text-center text-info mb-3 mt-5">Lenguajes</h3>
      ) : (
        <h3 className="text-center text-info mb-3 mt-5">Languages</h3>
      )}
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-2">
          <Skill image={Imagen} />
        </div>
        <div className="col-2">
          <Skill image={Typescript} />
        </div>
      </div>

      {isOn ? (
        <h3 className="text-center text-info mb-3 mt-3">Maquetado</h3>
      ) : (
        <h3 className="text-center text-info mb-3 mt-3">Layout Design</h3>
      )}
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
      {isOn ? (
        <h3 className="text-center text-info mb-3 mt-3">
          Frameworks y Librerias
        </h3>
      ) : (
        <h3 className="text-center text-info mb-3 mt-3">
          Frameworks and Libraries
        </h3>
      )}
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

      {isOn ? (
        <h3 className="text-center text-info mb-3 mt-3">Herramientas</h3>
      ) : (
        <h3 className="text-center text-info mb-3 mt-3">Tools</h3>
      )}
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
