interface ProjectModalProps {
  title: string;
  image: string;
  description: string;
}

export default function ProjectModal({
  title,
  image,
  description,
}: ProjectModalProps) {
  return (
    <div
      className="modal fade"
      id="projectModal"
      tabIndex={-1}
      aria-labelledby="projectModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="projectModalLabel">
              {title}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <img src={image} className="img-fluid mb-3" alt={title} />
            <p dangerouslySetInnerHTML={{ __html: description }}></p>
          </div>
          <div className="modal-footer">
            <div className="d-flex justify-content-center align-items-center">
              <a
                href="https://feel-good-app.vercel.app/auth/login"
                className="btn btn-outline-dark"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-globe"></i>
              </a>
              <a
                href="#"
                className="btn btn-outline-dark ms-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
