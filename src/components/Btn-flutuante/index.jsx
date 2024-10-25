import React, { useEffect } from "react";
import icon3 from "../images/whatsapp-icon.png";
import './style.scss';

const BotaoFlutuante = () => {
  const scrollFunction = () => {
    const icon = document.getElementById("icon");
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (scrollTop > 20 && scrollTop < 2700) {
      icon.style.display = "block";
    } else {
      icon.style.display = "none";
    }
  };

  useEffect(() => {
    // Verifica se o objeto window está definido
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', scrollFunction);
    }
    
    // Cleanup function to remove the event listener
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', scrollFunction);
      }
    };
  }, []);

  return (
    <div>
      <a 
        id="icon" 
        href="https://wa.me/556596276197?text=ol%C3%A1%21+gostaria+de+agendar+uma+consulta" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ display: 'none' }} // Inicialmente oculto
      >
        <img src={icon3} alt="ícone do WhatsApp" />
      </a>
    </div>
  );
};

export default BotaoFlutuante;
