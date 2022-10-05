import React from "react"
import imgdr from "../images/perfil.jpg"
import"./style.scss"
const SobreOdr = () => {
  return (
    <>
      <div className="conteiner-dr">
        <div className="d-flex justify-content-center">
        <img src={imgdr} alt="..."  className="img-dr rounded-circle"></img>
            <div className="d-block text-justify col-4 p-2" >
              <h1>SOBRE MIM</h1>
              <h4>Dr. Lucas Carazza</h4>
              <p className="text-dr">Médico Oftalmologista pela Universidade
                Federal de Minas Gerais (UFMG)
                <br />
                Residência Médica em Oftamologia pelo Hospital das Clínicas da  Universidade Federal de Minas Gerais
                <br />
                <br />
                Especialista em Córnea, catarata e Cirurgia Refrativa 
                pelo Hospital das Clínicas da Univesidade Federal de Minas Gerais (UFMG)
                <br />
                <br />
                 Especialista em Glaucoma pelo
                 Hospital das Clínicas da Univesidade Federal de Minas Gerais (UFMG)
              </p>

            </div>
        
          </div>
        </div>
    </>
  );

}
export default SobreOdr