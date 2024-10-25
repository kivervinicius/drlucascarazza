import React, { useEffect } from "react";
import img1 from "../images/oftalmologia.jpeg";
import img2 from "../images/cirurgia1.jpg";
import img3 from "../images/exame1.jpg";
import img5 from "../images/armacoes.jpg";
import img6 from "../images/folder-lente13.jpg";
import logo from "../images/LOGO2.png";
import "./style.scss";

const bannerImages = {
  "/": img1,
  "/tratamentos/": img2,
  "/exames/": img3,
  "/dica-oculos/": img5,
  "/dica-lentes/": img6,
};

const Banner = () => {
  useEffect(() => {
    const pageName = window.location.pathname;
    const bannerImage = document.getElementById("banner");
    
    const imageUrl = bannerImages[pageName] || img2; // Default to img2 if pageName not found
    bannerImage.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.92), rgba(0, 0, 0, 0.92)), url(${imageUrl})`;
    
    console.log(pageName);
  }, []);

  return (
    <div id="banner" className="banner">
      <div className="logo">
        <img
          src={logo}
          width="369"
          height="200"
          alt="Dr. Lucas Carazza"
          className="img-fluid"
        />
      </div>
      <div className="button pt-3">
        <a
          href="https://wa.me/556596276197?text=ol%C3%A1%21+gostaria+de+agendar+uma+consulta"
          className="btn btn-primary btn-lg rounded-5"
        >
          Agende sua consulta
        </a>
      </div>
    </div>
  );
};

export default Banner;
