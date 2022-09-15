
import React, { useState } from 'react';
import imgdr from "../images/icon.png"
import imgd from "../images/icon.png"
import logo from "../images/icon.png"
import Carousel from 'react-bootstrap/Carousel';
import "./style.scss"




const SlideShow = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <div className='conteiner-carousel'>
        <h3 className='text text-align-center'>CONSULTAS</h3>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="imdc d-block"
              src={imgdr}
              alt="First slide"
            />

          </Carousel.Item>
          <Carousel.Item>
            <img
              className="imdc d-block "
              src={logo}
              alt="Second slide"
            />

          </Carousel.Item>
          <Carousel.Item>
            <img
              className="imdc d-block "
              src={imgd}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default SlideShow;


//     return(
//         <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
//   <div class="carousel-inner">
//     <div class="carousel-item active">

//     </div>
//     <div class="carousel-item">

//     </div>
//     <div class="carousel-item">

//     </div>
//   </div>
//   <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="sr-only">Previous</span>
//   </a>
//   <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="sr-only">Next</span>
//   </a>
// </div>

//     );
// }
// export default carousel;