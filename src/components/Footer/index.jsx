import React from "react";
import './style.scss'
import icon1 from '../images/insta-footer.png'
import icon2 from '../images/face-footer.png'
import icon3 from '../images/whats-footer.png'
import icon4 from '../images/gmail-footer.png'



const Footer = () => {
  return (

    <footer id="footer" className="footer-container text-center text-lg-start  ">
      <div className="container d-flex justify-content-between p-4">
        <div className="row">
          <div className="col-lg-4 col-md-12 mb-3 mb-md-0 ">
            <h4 className="text-clinica text-align-center mb-0">Missão</h4>
            <p class="text-justify-center text-dr">Oferecer tratamento Oftalmológico com o que existe de mais moderno e atualizado na oftalmologia mundial</p>
            <h4 className="text-clinica text-align-center">Visão</h4>
            <p class="text-justify-center text-dr">Ser o seu oftalmologista de confiança, assim como da sua familia, oferecendo o que existe de mais moderno para sua saúde visual. </p>
            <h4 className="text-clinica text-align-center">Valores</h4>
            <p class="text-justify-center text-dr">Cuidar do nosso paciente como gostaríamos que cuidassem dos nossos pais e filhos; <br />
              Estar sempre atualizado;
              <br />
              Transparência com o paciente;
              <br />
              Ética
            </p>

          </div>

          <div className="col-lg-4 col-md-6 mb-4 mb-md-0 ">
            <h4 className="mb-0 text-center">Contato</h4>

            <ul className="list-unstyled mb-0">
              <li className="m-1">
                <p className="text-center">Endereço: Av. Presidente Tancredo de Almeida Neves, 1187-W (em frente ao fórum) <br />Parque das Mansões - Tangará da Serra - MT - CEP  78302-028 </p>
              </li>
              <p className="text-center">Celular: <a href="tel:+5565996276197">(65) 9.9627-6197</a></p>
              <li className="m-1">
                <p className="text-center">Telefone: <a href="tel:+556533265201">(65) 3326-5201</a></p>

              </li>
              <li className="m-1">
                <address className="text-center">
                  E-mail: <a href="mailto:drlucas@drlucascarazza.com.br">drlucas@drlucascarazza.com.br</a>
                </address>

              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 mb-4 mb-md-0  ">
            <h4 className="text-center">Localização</h4>

            <ul className="list-unstyled">
              <li className="m-1">
                <iframe title="localização" src="https://maps.google.com/maps?q=Av.%20Tancredo%20de%20almeida%20Neves,1187-tangara%20%20da%20serra&t=&z=15&ie=UTF8&iwloc=&output=embed" className=" w-100 m-2" allowfullscreen="" loading="lazy"></iframe>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="icons-footer  p-3" >
        <div className="text-center">
          © Copyright {new Date().getFullYear()}. Dr Lucas Carazza - Todos Direitos Reservados
        </div>
        <div className="d-flex justify-content-around">
          <ul className="d-flex justify-content-around">
            <li className="m-1">
              <a  href="mailto:drlucas@drlucascarazza.com.br">
                <img className="img-icon-footer" src={icon4} alt="icone do email" />
              </a>
            </li>
            <li className="m-1">
              <a  href="https://instagram.com/drlucascarazza?igshid=YmMyMTA2M2Y=">
                <img className="img-icon-footer" src={icon1} alt="icone do istagram" />
              </a>
            </li>
            <li className="m-1" >
              <a  href="https://www.facebook.com/drlucascarazza?igshid=YmMyMTA2M2Y=">
                <img className="img-icon-footer" src={icon2} alt="icone do facebook" />
              </a>
            </li>
            <li className="m-1" >
              <a  href="https://wa.me/556596276197?text=ol%C3%A1%21+gostaria+de+agendar+uma+consulta">
                <img className="img-icon-footer" src={icon3} alt="icone do whatssap" />
              </a>
            </li>
          </ul>
        </div>
      </div>


    </footer>
  );

}
export default Footer;