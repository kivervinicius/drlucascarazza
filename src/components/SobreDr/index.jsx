import React from "react"
import imgdr from "../images/perfil.jpg"
import "./style.scss"
const SobreOdr = () => {
  return (
    <>
      <div id="sobre-mim" className="container-dr">
        <div className="d-flex justify-content-center">
          <img src={imgdr} alt="Dr Lucas Carazza" className="img-dr rounded-circle"></img>
          <div className="d-block text-justify p-2 col-12 col-md-6">
            <h1 className="">SOBRE MIM</h1>
            <h4 className="">DR. LUCAS CARAZZA <br /> MÉDICO OFTAMOLOGISTA </h4>

            <p className="text-dr "> Graduado em Medicina na Universidade
              Federal de Minas Gerais UFMG
              <br />
              Residência Médica em Oftalmologia pelo Hospital das Clínicas da  UFMG
              <br />
              Título de Especialista em Oftamologia pelo MEC e Conselho Brasileiro de oftmologia (CBO)
              <br />
              Título de Especialista em Oftamologia peel Conselho Internacional de oftmologia (ICO)

              <br />
              Fellowship  em Glaucoma pelo
              Hospital das Clínicas da  UFMG
              <br />
              Fellow
              ship  em Retina pelo
              Hospital das Clínicas da  UFMG
              <br />
              Fellowship em Córnea, catarata e Cirurgia Refrativa
              pelo Hospital das Clínicas da  UFMG
            </p>

          </div>

        </div>
      </div>
    </>
  );

}
export default SobreOdr