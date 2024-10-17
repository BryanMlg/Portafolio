import { useContext } from "react";
import { AppContext } from "../Context/ContextApp";
export default function Contact() {
  const { isOn } = useContext(AppContext);
  return (
    <section className="container mt-4 text-center w-50" 
    id="Contact"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="1500">
    {isOn ? (
        <p>Llámame, o escríbeme un e-mail.</p>
      ) : (
        <p>Call me, or send me an e-mail</p>
      )}
    <div className="container py-5 px-3 d-flex shadow-lg rounded justify-content-center align-items-center flex-column">
    <i className="bi bi-envelope-at fw-medium"> bryanmlg2018@gmail.com</i>
    <i className="bi bi-telephone fw-medium mt-2"> +502 4708-5405</i>
    <i className="bi bi-geo-alt mt-2 fw-medium"> Guatemala</i>
    <div className="mt-4 d-flex">
       <h1 className=""><a href="https://github.com/BryanMlg" className="link-secondary"><i className="bi bi-github"/></a></h1>
       <h1 className="ms-5"><a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=bryanmlg2018@gmail.com" target="_blank" className="link-secondary"><i className="bi bi-envelope"/></a></h1>
    </div>
    </div>
    </section>
  )
}
