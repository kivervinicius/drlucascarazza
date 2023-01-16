import React from "react";
import './style.scss'
import icon1 from '../images/instagram.png'
import icon2 from '../images/facebook.png'
import icon3 from '../images/whatsapp.png'
import icon4 from '../images/gmail.png'



const Footer = () => {
  return (

    <footer id="footer" className="footer-container text-center text-lg-start ">
      <div className="container d-flex justify-content-between p-4">
        <div className="row">
          <div className="col-lg-4 col-md-12 mb-3 mb-md-0 ">
            <h4 className="text-clinica text-align-center">Missão</h4>
              <p class="text-justify-center text-dr">Oferecer tratamento Oftalmológico com que existe de mais moderno e atualizado na oftalmologia mundial</p>
              <h4 className="text-clinica text-align-center">Visão</h4>
              <p class="text-justify-center text-dr">Ser o seu oftalmologista de confiança assim como da sua familia,oferecendo o que existe de mais moderno para sua saúde visual. </p>
              <h4 className="text-clinica text-align-center">Valores</h4>
              <p class="text-justify-center text-dr">Cuidar do nosso paciente como gostaríamos que cuidasse dos nossos pais e filho;
                estarm sempre atualizado;
                <br />
                Transparência com o paciente;
                <br />
                ética
              </p>
          
          </div>

          <div className="col-lg-4 col-md-6 mb-4 mb-md-0 ">
            <h4 className="text-center">Contato</h4>

            <ul className="list-unstyled mb-0">
              <li className="m-1">
                <p className="text-center">Endereço: Av. Presidente Tancredo de Almeida Neves, 1187-W (em frente ao fórum) <br/>Jardim do Lago - Tangará da Serra - MT - CEP  78302-028 </p>
              </li>;
              <p className="text-center">Celular: <a href="tel:+5565996276197">(65) 9.9627-6197</a></p>
              <li className="m-1">
              <p className="text-center">Telefone: <a href="tel:+556533265201">(65) 3326-5201</a></p>

              </li>
              <li className="m-1">
                <address className="text-center">
                  Email : <a href="mailto:drlucas@drlucascarazza.com.br">drlucas@drlucascarazza.com.br</a>
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

      <div className="icons-footer  p-3" >
        <div className="text-center">
          © Copyright {new Date().getFullYear()}. Dr Lucas Carazza - Todos Direitos Reservados
        </div>
        <div className="d-flex justify-content-around">
          <ul className="d-flex justify-content-around">
            <li className="m-1">
              <a target="_blank" href="mailto:drlucas@drlucascarazza.com.br">
                <img src={icon4} alt="icone do email" />
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
              <a target="_blank" href="https://wa.me/556596276197?text=ol%C3%A1%21+gostaria+de+agendar+uma+consulta">
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