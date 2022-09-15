import React from 'react'
import './style.scss'
import img1 from '../images/dicas1.jpeg'
import img2 from '../images/dicas2.jpeg'
import img3 from '../images/dicas3.png'
import img4 from '../images/dicas4.jpg'

import { Link } from 'gatsby'


const Card = () => {
  return (
    <>
      <div className='conteiner-dicas d-block'>
        <div>
          <h1 className='text-card'>DICAS</h1>
        </div>
        <div className="card-conteiner d-flex justify-content-around">
          <div className="card m-2">
            <img src={img1} className="img-dicas rounded img-thumbnail" alt=""></img>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to="/#" className="btn btn-primary">Saiba mais</Link>
            </div>
          </div>

          <div className="card m-2">
            <img className="img-dicas rounded img-thumbnail" src={img2} alt="" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to="/#" className="btn btn-primary">Saiba mais</Link>
            </div>
          </div>
          <div className="card m-2">
            <img className="img-dicas rounded img-thumbnail" src={img3} alt="" />
             <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to='/#' className="btn btn-primary">Saiba mais</Link>
            </div>
          </div>
          <div className="card m-2">
            <img className="img-dicas rounded img-thumbnail" src={img4} alt="" />
             <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to='/#' className="btn btn-primary">Saiba mais</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card