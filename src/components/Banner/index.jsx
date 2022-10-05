import React from 'react'

// import { Link } from "react-router-dom";
import logo from "../images/LOGO2.png"
import "./style.scss"
import onDirection from '../../utils/redirectWatssap'



const Banner = () => {

  return (
    <div className="banner">
      <div className='logo'>
        <img src={logo} width="369" height="200" alt=""></img>
      </div>
      <div className="button pt-3">
        <button onClick={() => { onDirection() }} type="button" class="btn btn-primary btn-lg rounded-5">Agende sua consulta</button >
      </div>
    </div>

  )
}

export default Banner