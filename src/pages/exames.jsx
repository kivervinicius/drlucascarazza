import React from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Exame from "../components/Exames";
import Banner from "../components/Banner";
import BotaoFlutuante from "../components/Btn-flutuante";


const ExamePage = () => {
    return (
        <>
            <Menu />
            <BotaoFlutuante />
            <Banner />
            <Exame />
            <Footer />


        </>


    );
}
export default ExamePage;