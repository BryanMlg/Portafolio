import Logo from "../assets/5.png";
export default function Header() {
  return (
    <nav className="navbar navbar-expand-md border-bottom shadow-sm">
 
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
        <a className="d-flex justify-content-center align-items-center mt-2 ms-4" href="#">
            <img
              src={Logo}
              alt="Logo"
              style={{ width: "75px", height: "75px" }}
            />
          </a>
        <div className="collapse navbar-collapse justify-content-end px-5" id="nav-toggler">
          <ul className="navbar-nav nav-underline justify-content-center align-items-center fw-bold">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Sobre mi
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Proyectos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contacto
              </a>
            </li>
          </ul>
        </div>
  
    </nav>
  );
}
