import Aos from "aos";
import { useEffect, useState } from "react";
import "../css/info.css";

interface SubtitleProps {
  subtitle: string;
}

const Subtitle: React.FC<SubtitleProps> = ({ subtitle }) => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      className="d-flex justify-content-center align-items-center position-relative"
      data-aos="fade-down"
    >
      <h1
        className="text-center mt-5 border-bottom border-3 border-primary text-primary position-relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {subtitle === "Proyectos" || subtitle === "Proyects" ? (
          <>
            {subtitle}
            <i className="bi bi-exclamation-circle icon-warning" id='Proyects'/>

            {isHovered && <span className="tooltip-text">Este portafolio incluye proyectos en los que he trabajado personalmente o freelance con permiso. Estoy disponible para discutir más sobre mi experiencia.</span>}
          </>
        ) : (
          subtitle
        )}
      </h1>
    </div>
  );
};

export default Subtitle;
