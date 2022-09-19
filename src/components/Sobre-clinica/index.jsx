import React from "react"
import img1 from "../images/clinica.jpg"
import img2 from "../images/clinica2.jpg"
import img3 from "../images/clinica3.jpeg"
import img4 from "../images/clinica4.jpeg"

import "./style.scss"
const SobreAcl = () => {
  return (
    <>
      <div className="conteiner d-flex justify-content-around">
        <div className="d-flex justfy-content-between">
          <div className="flex p-3">
            <div className="conteiner-img">
              <img src={img1} alt="..." className="img-clinica img-thumbnail"></img>
              <img src={img2} alt="..." className="img-clinica img-thumbnail"></img>
            </div>
            <div>
              <img src={img3} alt="..." className="img-clinica img-thumbnail"></img>
              <img src={img4} alt="..." className="img-clinica img-thumbnail"></img>
            </div>
          </div>
        </div>
        <div className="d-block col-4 pl-2 text-center" >
          <h1 className="text-clinica text-center">SOBRE A CLINÍCA</h1>
          <h4 className="text-clinica text-align-center">Missão</h4>
          <p class="text-justify-center text-dr">Oferecer tratamento Oftamológico com que existe de mais moderno e actualizada na oftamoogia mundial</p>
          <h4 className="text-clinica text-align-center">Visão</h4>
          <p class="text-justify-center text-dr">Ser o seu oftamologista de confiança assim como da sua familia,oferecendo o que existe de mais moderno para sua saúde visual. </p>
          <h4 className="text-clinica text-align-center">Valores</h4>
          <p class="text-justify-center text-dr">Cuidar do nosso paciente como gostaríamos que cuidasse dos nossos pais e filho;
            estarm sempre atualizado;
            <br />
            Transparência com o paciente;
            <br />
            etica
          </p>
        </div>
      </div>

    </>
  );

}
export default SobreAcl