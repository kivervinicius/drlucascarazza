import React from "react";
import './style.scss'
import icon1 from '../images/instagram.png'
import icon2 from '../images/facebook.png'
import icon3 from '../images/whatsapp.png'
import icon4 from '../images/gmail.png'



const Footer = () => {
  return (

    <footer className="footer-container  text-white text-center text-lg-start ">
      <div className="container d-flex justify-content-between p-4">
        <div className="row">
          <div className="col-lg-4 col-md-12 mb-3 mb-md-0 ">
            <h5 className="text-uppercase border-bottom border-dark text-center">SOBRE</h5>

            <p className="text-center">
              Nosso consultório fica em um moderno espaço em uma das principais avenidas de Tangará da Serra, dentro da Clínica Instituto da Visão, em frente ao Fórum Municipal e possuímos os mais modernos equipamentos de diagnóstico e cirúrgicos. Além do consultório oftalmológico, contamos com salas de exames, sala de adaptação de lentes de contato e um centro cirúrgico moderno.


            </p>
          </div>

          <div className="col-lg-4 col-md-6 mb-4 mb-md-0 ">
            <h5 className="text-uppercase border-bottom border-dark text-center">CONTATOS</h5>

            <ul className="list-unstyled mb-0">
              <li className="m-1">
                <p className="text-center">Enderço : Av. Presidente Tancredo de Almeida Neves, 1187-W (em frente ao fórum), 78300-000 Tangará da Serra, MT</p>
              </li>
              <p className="text-center">Celular : +55 (65) 9627-6197</p>
              <li className="m-1">
              </li>
              <li className="m-1">
                <address className="text-center">
                  Email : <a href="mailto:drlucascarazza@gmail.com">drlucascarazza@gmail.com</a>
                </address>

              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 mb-4 mb-md-0  ">
            <h5 className="text-uppercase border-bottom border-dark mb-0 text-center">LOCALIZAÇÃO</h5>

            <ul className="list-unstyled">
              <li className="m-1">
                <iframe title="localização" src="https://maps.google.com/maps?q=Av.%20Tancredo%20de%20almeida%20Neves,1187-tangara%20%20da%20serra&t=&z=15&ie=UTF8&iwloc=&output=embed" className=" w-100 m-2" allowfullscreen="" loading="lazy"></iframe>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="icons-footer  p-3 d-flex justify-content-between" >
        <div>
          © 2022 Copyright
        </div>
        <div className="d-flex justify-content-around">
          <ul className="d-flex justify-content-around">
            <li className="m-1">
              <a target="_blank" href="mailto:drlucascarazza@gmail.com">
                <img src={icon4} alt="icone do do email" />
              </a>
            </li>
            <li className="m-1">
              <a target="_blank" href="https://instagram.com/drlucascarazza?igshid=YmMyMTA2M2Y=">
                <img src={icon1} alt="icone do istagram" />
              </a>
            </li>
            <li className="m-1" >
              <a target="_blank" href="https://www.facebook.com/drlucascarazza?igshid=YmMyMTA2M2Y=">
                <img src={icon2} alt="icone do facebook" />
              </a>
            </li>
            <li className="m-1" >
              <a target="_blank" href="https://web.whatsapp.com/send?phone=556596276197">
                <img src={icon3} alt="icone do whatssap" />
              </a>
            </li>
          </ul>
        </div>
      </div>


    </footer>
  );

}
export default Footer;