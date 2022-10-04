import React from 'react'
import { Link } from 'gatsby'
// import { useStaticQuery, graphql } from 'gatsby'
import logo from "../images/logotipo03.jpeg"
import Banner from '../Banner'
import Footer from '../Footer'
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


  return (
    <>
      <nav className="navbar navbar-light bg-light d-flex justify-content-around fixed-top">
        <a className="navbar-brand" href="#">
          <img src={logo} width="100" height="50" class="d-inline-block align-top" alt=""></img>
        </a>
        <ul className="nav navbar-brand navbar-right " style={{ fontSize: "14px", color: "#9963B9" }}>
          <li className="nav-item" >
          </li>
          <li className="nav-item">
            <a href={Footer} activeStyle={{ color: "#9963B9" }} className="nav-link" activeClassName="active">CONSULTAS</a>
          </li>
          <li className="nav-item">
            <Link to="/gallery/" activeStyle={{ color: "#9963BA" }} className="nav-link" activeClassName="active">EXAMES</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact/" activeStyle={{ color: "#9963BA" }} className="nav-link" activeClassName="active">CIRURGIAS</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact/" activeStyle={{ color: "#9963BA" }} className="nav-link" activeClassName="active">DICAS</Link>
          </li>
          <li className="nav-item">
            <Link to="./components/Footer/" activeStyle={{ color: "#9963BA" }} className="nav-link" activeClassName="active">CONTATOS</Link>
          </li>
        </ul>
      </nav>
      <Banner />

    </>
  )
}

export default Menu