import React from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Tratamento from "../components/Tratamentos";
import BotaoFlutuante from "../components/Btn-flutuante";
const ConsultaPage = () => {
    return (
        <>
            <Menu />
            <BotaoFlutuante />
            <Banner />
            <Tratamento />
            <Footer />


        </>


    );
}
export default ConsultaPage;