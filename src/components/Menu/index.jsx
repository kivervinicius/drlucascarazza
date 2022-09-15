import React from 'react'
import { Link } from 'gatsby'
// import { useStaticQuery, graphql } from 'gatsby'
import logo from "../images/logotipo03.jpeg"
import Banner from '../Banner'
// import { cardStyles } from './Menu.module.scss'
const Menu = () => {
  // const { logo } = useStaticQuery(graphql`
  //   query {
  //     logo: file(relativePath: { eq: "gatsby-icon.png" }) {
  //       childImageSharp {
  //         fixed(width: 35, height: 35) {
  //           ...GatsbyImageSharpFixed
  //         }
  //       }
  //     }
  //   }
  // `)

  
  return(
    <> 
    <nav className="navbar navbar-light bg-light d-flex justify-content-around fixed-top">
        <a className="navbar-brand" href="#">
          <img src={logo}  width="100" height="50" class="d-inline-block align-top" alt=""></img>
        </a>
        <ul className="nav navbar-brand navbar-right " style={{fontSize:"14px" , color:"#9963B9"}}>
          <li className="nav-item" >
          </li>
          <li className="nav-item">
            <Link to="/about/" activeStyle={{ color: "#9963B9" }} className="nav-link" activeClassName="active">ESPECIALIDADES</Link>
          </li>
          <li className="nav-item">
            <Link to="/gallery/" activeStyle={{ color: "#9963BA" }} className="nav-link" activeClassName="active">SOBRE A CLÍNICA</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact/" activeStyle={{ color: "#9963BA" }} className="nav-link" activeClassName="active">SOBRE 0 DR.LUCAS</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact/" activeStyle={{ color: "#9963BA" }} className="nav-link" activeClassName="active">CONTATOS</Link>
          </li>
        </ul>
    </nav>
    {/* <nav className="navbar navbar-expand-sm navbar-light bg-light ">
      <div class="p-2 bd-highlight">
      <Link className="navbar-brand" to="/">
       <img src={logo}  width="30" height="30" class="d-inline-block align-top" alt=""></img>
      </Link>
      </div>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="nav navbar-nav navbar-right">
          <li className="nav-item">
            <Link to="/" activeStyle={{ color: "#9963BA" }} className="nav-link" activeClassName="active">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about/" activeStyle={{ color: "#9963BA" }} className="nav-link" activeClassName="active">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/gallery/" activeStyle={{ color: "#9963BA" }} className="nav-link" activeClassName="active">Gallery</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact/" activeStyle={{ color: "#9963BA" }} className="nav-link" activeClassName="active">Contact</Link>
          </li>
        </ul>
      </div>
    </nav> */}
      <Banner />
     
      </>
  )
}

export default Menu