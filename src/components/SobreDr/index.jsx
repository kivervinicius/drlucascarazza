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
            <h1 className="">Dr. Lucas Carazza</h1>
            <h4 className="">Médico Oftalmologista </h4>

            <ul className="text-dr "> 
              <li>Graduado em Medicina pela Universidade
              Federal de Minas Gerais(UFMG).</li>
              
              <li>Residência Médica em Oftalmologia pelo Hospital das Clínicas da UFMG.</li>
              
              <li>Título de Especialista em Oftamologia pelo MEC e Conselho Brasileiro de Oftmologia (CBO)</li>
              
              <li>Título de Especialista em Oftamologia peel Conselho Internacional de Oftmologia (ICO)</li>

              <li>Fellowship  em Glaucoma pelo
              Hospital das Clínicas da UFMG</li>
              <li>Fellowship  em Retina pelo
              Hospital das Clínicas da  UFMG</li>
              <li>Fellowship em Córnea, Catarata e Cirurgia Refrativa
              pelo Hospital das Clínicas da  UFMG</li>
            </ul>

          </div>

        </div>
      </div>
    </>
  );

}
export default SobreOdr