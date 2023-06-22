import Imagen from "../assets/hero-inferior.svg";

export default function Hero() {
  return (
    <section className="d-flex justify-content-around align-items-center  px-5 flex-column flex-md-row mt-5 mb-5">
        <div>
            <h1>Hola,</h1>
            <div className="d-flex">
            <h1>Soy</h1>
            <h1 className="ms-2 text-primary ">Bryan</h1>
            </div>
            <h1>Frontend Developer</h1>
            <button type="button" className="btn btn-primary mt-5" style={{ width: "260px", height: "50px"}} >Ver CV</button>
        </div>
        <div>
            <img src={Imagen}  className="img-fluid" alt="Pc" style={{ width: "375px", height: "300px" }}/>
        </div>
    </section>
  )
}
