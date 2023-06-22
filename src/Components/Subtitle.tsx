import Aos from "aos";
import { useEffect } from "react";
interface SubtitleProps {
  subtitle: string;
}

const Subtitle: React.FC<SubtitleProps> = ({ subtitle }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="d-flex justify-content-center align-items-center">
      <h1 className="text-center mt-5 border-bottom border-3 border-primary text-primary">
      {subtitle}
    </h1>
    </div>
  );
};

export default Subtitle;
