
import React from 'react';
import imgdr from "../images/icon.png"
import imgd from "../images/icon.png"
import logo from "../images/icon.png"

import "./style.scss"




const SlideShow = () => {

  return (
    <>
      <div className='conteiner-carousel'>
        <h3 className='text-center'>Tratamentos e cirurgias</h3>
        <div className="d-flex">
          <div className="col-xs-4">
            <a target="_blanc" href='https://www.leica-microsystems.com/products/surgical-microscopes/p/leica-m620-f20/' className='text-center'>
              <img className="imdc" src={imgd} alt="Third slide" />
              <p>
              Cirurgia de catarata
              </p>
            </a>
          </div>
          <div className="col-xs-2">
            <a target="_blanc" href='' className="text-center">
              <img className="imdc" src={logo} alt="Second slide" />
              <p >
              Yag Laser para capsulotomia (limpeza de lente pós cirurgia de catarata)
              </p>
            </a>
          </div>
          <div className="col-xs-4">
            <a target="_blanc" href=''>
              <img className="imdc" src={imgdr} alt="First slide" />
            </a>
          </div>
        </div>
      </div>

    </>
  );
}

export default SlideShow;


