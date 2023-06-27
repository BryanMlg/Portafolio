import { useContext } from "react";
import { AppContext } from "../Context/ContextApp";
import Logo from "../Assets/5.png";
import DarkLogo from "../Assets/b.png";

export default function Header() {
  const { isOn, toggleSwitch, isDark, toggleDark } = useContext(AppContext);
  
  const htmlElement = document.querySelector("html");

  if (htmlElement) {
    if (isDark) {
      htmlElement.setAttribute("data-bs-theme", "dark");
    } else {
      htmlElement.removeAttribute("data-bs-theme");
    }
  }

 
  return (
    <nav
      className="navbar navbar-expand-md border-bottom shadow-sm sticky-top"
      style={{
        backgroundColor: isDark
          ? "rgba(33,37,41, 0.8)"
          : "rgba(255, 255, 255, 0.8)",
        backdropFilter: isDark ? "blur(5px)" : "blur(5px)",
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
      {isDark ? (
        <img
          src={DarkLogo}
          alt="Logo"
          style={{ width: "75px", height: "75px" }}
          className="d-flex justify-content-center align-items-center mt-2 ms-4 rounded-circle"
        />
      ) : (
        <img
          src={Logo}
          alt="Logo"
          style={{ width: "75px", height: "75px" }}
          className="d-flex justify-content-center align-items-center mt-2 ms-4 rounded-circle"
        />
      )}
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
          <li>
            <a
              className="nav-link"
              onClick={toggleSwitch}
              style={{ cursor: "pointer" }}
            >
              {isOn ? "ES" : "EN"}
            </a>
          </li>
          <li className="nav-link">
            {isDark ? (
              <h5
                className="d-flex justify-content-center align-items-center mt-1"
                onClick={toggleDark}
                style={{ cursor: "pointer" }}
              >
                <i className="bi bi-sun-fill" />
              </h5>
            ) : (
              <h6
                className="d-flex justify-content-center align-items-center mt-1"
                onClick={toggleDark}
                style={{ cursor: "pointer" }}
              >
                <i className="bi bi-moon-stars-fill" />
              </h6>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
