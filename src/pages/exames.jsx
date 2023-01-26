import React from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Exame from "../components/Exames";
import BannerExame from "../components/Banner-exame";
import BotaoFlutuante from "../components/Btn-flutuante";


const ConsultaPage = () => {
    return (
        <>
            <Menu />
            <BotaoFlutuante />
            <BannerExame />
            <Exame />
            <Footer />


        </>


    );
}
export default ConsultaPage;