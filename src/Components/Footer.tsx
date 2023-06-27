import Logo from "../assets/5.png";
import DarkLogo from "../assets/b.png";
import { useContext } from "react";
import { AppContext } from "../Context/ContextApp";
export default function Footer() {
  const { isOn, isDark } = useContext(AppContext);
  return (
    <footer className="conatiner-fluid border-top shadow-sm  rounded py-3 mt-5 d-flex justify-content-center align-items-center flex-column">
      {isDark ? (
        <img
          src={DarkLogo}
          alt="Logo"
          style={{ width: "40px", height: "40px" }}
          className="rounded-circle"
        />
      ) : (
        <img
          src={Logo}
          alt="Logo"
          style={{ width: "40px", height: "40px" }}
          className="rounded-circle"
        />
      )}
      <div className="d-flex mt-2">
        {isOn ? (
          <h6 className="text-center">Creado por</h6>
        ) : (
          <h6 className="text-center">Created by</h6>
        )}
        <h6 className="ms-1 text-primary">Bryan Guerra</h6>
        <h6 className="ms-1">💻</h6>
      </div>
    </footer>
  );
}
