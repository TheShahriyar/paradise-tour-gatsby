import React, { useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import "../css/navbar.css"
import { FaAlignRight } from "react-icons/fa"
import links from "../constant/links"
import socialIcons from "../constant/social-icons"
import Logo from "../images/logo.svg"

const Navbar = () => {
  const [isOpen, setNav] = useState(false)
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <AniLink cover to="/" bg="#3fd0d4">
            <img src={Logo} alt="Paradise tour logo" />
          </AniLink>
          <button type="button" className="logo-btn" onClick={toggleNav}>
            <FaAlignRight className="logo-icon" />
          </button>
        </div>
        <ul className={isOpen ? `navLinks showNav` : `navLinks`}>
          {links.map((item, index) => {
            return (
              <li key={index}>
                <AniLink cover to={item.path} duration={1} bg="#3fd0d4">
                  {item.text}
                </AniLink>
              </li>
            )
          })}
        </ul>
        <div className="nav-social-links">
          {socialIcons.map((item, index) => {
            return (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
