import Aos from "aos";
import { useEffect } from "react";
interface SkillsProps {
  image: string;
}

const Skills: React.FC<SkillsProps> = ({ image }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="d-flex justify-content-center align-items-center">
      <div data-aos="zoom-out-down" data-aos-duration="1200">
        <img
          src={image}
          alt="Tool"
          className="img-fluid"
          style={{
            width: "75px",
            height: "75px",
            minWidth: "50px",
            minHeight: "50px",
          }}
        />
      </div>
    </section>
  );
};

export default Skills;
