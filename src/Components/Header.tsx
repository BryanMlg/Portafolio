import { useContext } from "react";
import { AppContext } from "../Context/ContextApp";
import Logo from "../assets/5.png";

export default function Header() {
  const { isOn, toggleSwitch } = useContext(AppContext);

  return (
    <nav
      className="navbar navbar-expand-md border-bottom shadow-sm sticky-top"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(5px)",
      }}
    >
      <button
        className="navbar-toggler ms-3"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#nav-toggler"
        aria-controls="nav-toggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <img
        src={Logo}
        alt="Logo"
        style={{ width: "75px", height: "75px" }}
        className="d-flex justify-content-center align-items-center mt-2 ms-4"
      />
      <div
        className="collapse navbar-collapse justify-content-end px-5"
        id="nav-toggler"
      >
        <ul className="navbar-nav nav-underline justify-content-center align-items-center fw-bold">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">
            {isOn ? "Inicio" : "Home"}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#aboutme">
            {isOn ? "Sobre Mi" : "About Me"}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Proyects">
            {isOn ? "Proyectos" : "Proyect"}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Skills">
            {isOn ? "Habilidades" : "Skills"}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Contact">
              {isOn ? "Contacto" : "Contact"}
            </a>
          </li>
          <li className="nav-item"></li>
          <li>
            <a className="nav-link" href="#" onClick={toggleSwitch}>
              {isOn ? "ES" : "EN"}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
