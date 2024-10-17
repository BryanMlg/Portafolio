import { useRef, useState, useEffect } from "react";
import Imagen from "../assets/Javascript.svg";
import Typescript from "../assets/Typescript.svg";
import Css from "../assets/Css.svg";
import Skill from "../Components/Skill";
import Html from "../assets/Html.svg";
import Nextjs from "../assets/NextJs.svg";
import Bootstrap from "../assets/Bootstrap.svg";
import ReactIcon from "../assets/react.svg";
import Webpack from "../assets/Webpack.svg";
import Git from "../assets/Git.svg";
import Vite from "../assets/vite.svg";
import Angular from "../assets/angular.svg"
import Figma from "../assets/Figma.svg"
import Vuexy from "../assets/Vuexy.svg"
import Metronic from "../assets/Metronic.svg"
import MaterialUI from "../assets/MaterialUI.svg"
import Supabase from "../assets/Supabase.svg"
import '../css/infiniteList.css';

export default function SkillsList() {
  const [offset, setOffset] = useState(0);
  const [isResetting, setIsResetting] = useState(false);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const skills = [
    Imagen,
    Typescript,
    Css,
    Html,
    Nextjs,
    Bootstrap,
    ReactIcon,
    Git,
    Webpack,
    Vite,
    Angular,
    Figma,
    Vuexy,
    Metronic,
    MaterialUI,
    Supabase
  ];

  // Desplazamiento automático
  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prevOffset) => {
        if (sliderRef.current) {
          const maxScrollLeft = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
          if (prevOffset >= maxScrollLeft) {
            setIsResetting(true);
            return 0; // Reinicia el desplazamiento
          }
          return prevOffset + 1; // Incrementa el desplazamiento
        }
        return prevOffset + 1;
      });
    }, 10); // Intervalo en milisegundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, []);

  // Efecto para aplicar el desplazamiento
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = offset;
    }
  }, [offset]);

  return (
    <section className="container" id="Skills">
      <div
        className="skills-slider mt-5"
        ref={sliderRef}
        style={{ overflow: "hidden", whiteSpace: "nowrap" }}
      >
        <div className="skills-list" style={{ display: "flex", transition: isResetting ? "none" : "transform 0.2s" }}>
          {skills.map((skill, index) => (
            <div className="skill-item" key={index} style={{ flex: "0 0 auto", margin: "0 10px" }}>
              <Skill image={skill} />
            </div>
          ))}
          {/* Repetimos la lista de habilidades para el efecto infinito */}
          {skills.map((skill, index) => (
            <div className="skill-item" key={`duplicate-${index}`} style={{ flex: "0 0 auto", margin: "0 10px" }}>
              <Skill image={skill} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
