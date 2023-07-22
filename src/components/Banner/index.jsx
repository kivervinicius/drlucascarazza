import React, { useEffect } from "react";
import img1 from "../images/oftalmologia.jpeg";
import img2 from "../images/cirurgia1.jpg";
import img3 from "../images/exame1.jpg";
import img5 from "../images/armacoes.jpg";
import img6 from "../images/folder-lente13.jpg";



import logo from "../images/LOGO2.png";
import "./style.scss";

const Banner = () => {
  useEffect(()=>{
const pageName = window.location.pathname;
const bannerImage = document.getElementById("banner");
if(pageName === "/"){
  bannerImage.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.92), rgba(0, 0, 0, 0.92)), url(${img1})`;  
  
}else if(pageName === "/tratamentos/"){
  bannerImage.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.92), rgba(0, 0, 0, 0.92)), url(${img2})`;;
  
}

else if(pageName === "/exames/"){
  bannerImage.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.92), rgba(0, 0, 0, 0.92)), url(${img3})`;;
  
}
else if(pageName === "/dica-oculos/"){
  bannerImage.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.92), rgba(0, 0, 0, 0.92)), url(${img5})`;;
  
}
else if(pageName === "/dica-lentes/"){
  bannerImage.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.92), rgba(0, 0, 0, 0.92)), url(${img6})`;;
  
}
else{
  bannerImage.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.92), rgba(0, 0, 0, 0.92)), url(${img2})`;;
  
}

  

console.log(pageName);

  },[])

  return (
    <div id="banner" className="banner">
      <div className="logo">
        <img
          src={logo}
          width="369"
          height="200"
          alt="Dr. Lucas Carazza"
          className="img-fluid"
        ></img>
      </div>
      <div className="button pt-3">
        <a
          href="https://wa.me/556596276197?text=ol%C3%A1%21+gostaria+de+agendar+uma+consulta"
          class="btn btn-primary btn-lg rounded-5"
          // target="_blank"
        >
          Agende sua consulta
        </a>
      </div>
    </div>
  );
};

export default Banner;
