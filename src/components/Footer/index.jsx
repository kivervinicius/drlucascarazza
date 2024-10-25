import React from "react";
import "./style.scss";
import iconInsta from "../images/insta-footer.png";
import iconFace from "../images/face-footer.png";
import iconWhats from "../images/whats-footer.png";
import iconGmail from "../images/gmail-footer.png";

const currentYear = new Date().getFullYear();

const contactInfo = [
  {
    text: "Celular:",
    href: "tel:+5565996276197",
    display: "(65) 9.9627-6197",
  },
  {
    text: "Telefone:",
    href: "tel:+556533265201",
    display: "(65) 3326-5201",
  },
  {
    text: "E-mail:",
    href: "mailto:drlucas@drlucascarazza.com.br",
    display: "drlucas@drlucascarazza.com.br",
  },
];

const socialLinks = [
  { href: "mailto:drlucas@drlucascarazza.com.br", icon: iconGmail, alt: "Email" },
  { href: "https://instagram.com/drlucascarazza", icon: iconInsta, alt: "Instagram" },
  { href: "https://www.facebook.com/drlucascarazza", icon: iconFace, alt: "Facebook" },
  { href: "https://wa.me/556596276197?text=ol%C3%A1%21+gostaria+de+agendar+uma+consulta", icon: iconWhats, alt: "WhatsApp" },
];

const Footer = () => (
  <footer id="footer" className="footer-container text-center text-lg-start">
    <div className="container d-flex justify-content-between p-4">
      <div className="row">
        <div className="col-lg-4 col-md-12 mb-3">
          <h4 className="text-clinica">Missão</h4>
          <p className="text-dr">
            Oferecer tratamento oftalmológico com o que existe de mais moderno e atualizado na oftalmologia mundial.
          </p>
          <h4 className="text-clinica">Visão</h4>
          <p className="text-dr">
            Ser o seu oftalmologista de confiança, assim como da sua família, oferecendo o que há de mais moderno para sua saúde visual.
          </p>
          <h4 className="text-clinica">Valores</h4>
          <p className="text-dr">
            Cuidar do nosso paciente como gostaríamos que cuidassem dos nossos pais e filhos; <br />
            Estar sempre atualizado; <br />
            Transparência com o paciente; <br />
            Ética.
          </p>
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
          <h4 className="text-center">Contato</h4>
          <p className="text-center">
            Endereço: Av. Presidente Tancredo de Almeida Neves, 1187-W (em frente ao fórum)
            <br />
            Parque das Mansões - Tangará da Serra - MT - CEP 78302-028
          </p>
          {contactInfo.map(({ text, href, display }) => (
            <p className="text-center" key={href}>
              {text} <a href={href}>{display}</a>
            </p>
          ))}
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
          <h4 className="text-center">Localização</h4>
          <iframe
            title="localização"
            src="https://maps.google.com/maps?q=Av.%20Tancredo%20de%20almeida%20Neves,1187-tangara%20%20da%20serra&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-100 m-2"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>

    <div className="icons-footer p-3">
      <div className="text-center">
        © Copyright {currentYear}. Dr Lucas Carazza - Todos Direitos Reservados
      </div>
      <div className="d-flex justify-content-around">
        <ul className="d-flex justify-content-around">
          {socialLinks.map(({ href, icon, alt }) => (
            <li className="m-1" key={href} style={{ listStyle: "none"}}>
              <a href={href}>
                <img className="img-icon-footer" src={icon} alt={`Ícone do ${alt}`} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
