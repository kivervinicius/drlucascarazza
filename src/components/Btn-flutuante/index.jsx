import React from "react";
import icon3 from '../images/iconw2.png' 

import './style.scss'


const BotaoFlutuante = () => {
    window.onscroll = () => { scrollFunction() };
    console.log(document.body.scrollTo)

    const scrollFunction = () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("icon").style.display = "block";
        } else {
            document.getElementById("icon").style.display = "none";
        }
    }
    return (
        <div>
            <a target="_blank" id="icon" href="https://wa.me/556596276197?text=ol%C3%A1%21+gostaria+de+agendar+uma+consulta">
                <img src={icon3} alt="icone do whatssap" />
            </a>

        </div>
    )
}
export default BotaoFlutuante;