import React from "react";
import './style.scss'
import icon1 from '../images/instagram.png'
import icon2 from '../images/facebook.png'
import icon3 from '../images/whatsapp.png'
import icon4 from '../images/gmail.png'
import onDirection from '../../utils/redirectWatssap'


const Footer = () => {
  return (

    <footer className="footer-conteiner  text-white text-center text-lg-start ">
      <div className="container d-flex justify-content-between p-4">
        <div className="row">
          <div className="col-lg-4 col-md-12 mb-3 mb-md-0 ">
            <h5 className="text-uppercase border-bottom border-dark text-center">SOBRE</h5>

            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
              molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam
              voluptatem veniam, est atque cumque eum delectus sint!
            </p>
          </div>

          <div className="col-lg-4 col-md-6 mb-4 mb-md-0 ">
            <h5 className="text-uppercase border-bottom border-dark text-center">CONTATOS</h5>

            <ul className="list-unstyled mb-0">
              <li className="m-1">
                <p className="text-center">Enderço : AV.Tancredo Nevez 380-A</p>
              </li>
              <p className="text-center">Celular : (65)99999-9999</p>
              <li className="m-1">
              </li>
              <li className="m-1">
                <address className="text-center">
                  Email : <a href="mailto:webmaster@example.com"> email@examplo.com</a>
                </address>

              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 mb-4 mb-md-0  ">
            <h5 className="text-uppercase border-bottom border-dark mb-0 text-center">LOCALIZAÇÃO</h5>

            <ul className="list-unstyled">
              <li className="m-1">
                <iframe title="localização" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.339445955877!2d-43.36392958577709!3d-22.937722684996036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd8530e594f37%3A0xcaf4bbd2f4c7aae4!2sClube%20dos%20Banc%C3%A1rios!5e0!3m2!1spt-PT!2sbr!4v1631323641151!5m2!1spt-PT!2sbr" className=" w-100 m-2" allowfullscreen="" loading="lazy"></iframe>
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
              <a href="mailto:webmaster@example.com">
                <img src={icon4} alt="" />
              </a>
            </li>
            <li className="m-1">
              <a href="#">
                <img src={icon1} alt="" />
              </a>
            </li>
            <li className="m-1">
              <a href="https://www.facebook.com/">
                <img src={icon2} alt="" />
              </a>
            </li>
            <li className="m-1">
              <a href="https://web.whatsapp.com/send?phone=5521980149046">
                <img src={icon3} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>


    </footer>
  );

}
export default Footer;