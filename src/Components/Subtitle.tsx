interface SubtitleProps {
  subtitle: string;
}

const Subtitle: React.FC<SubtitleProps> = ({ subtitle }) => {
  return (
    <ul className="navbar-nav nav-underline justify-content-center align-items-center fw-bold text-primary mt-5">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">
          <h1>{subtitle}</h1>
        </a>
      </li>
    </ul>
  );
};

export default Subtitle;
