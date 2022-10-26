import React from "react";

import logo from "../images/LOGO2.png";
import "./style.scss";

const Banner = () => {
  return (
    <div className="banner">
      <div className="logo">
        <img
          src={logo}
          width="369"
          height="200"
          alt="Dr Lucas Carazza"
          className="img-fluid"
        ></img>
      </div>
      <div className="button pt-3">
        <a
          href="https://wa.me/556596276197?text=ol%C3%A1%21+gostaria+de+agendar+uma+consulta"
          class="btn btn-primary btn-lg rounded-5"
          target="_blank"
        >
          Agende sua consulta
        </a>
      </div>
    </div>
  );
};

export default Banner;
