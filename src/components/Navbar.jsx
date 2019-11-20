import React, { useState } from "react"
import { Link } from "gatsby"
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
          <img src={Logo} alt="Paradise tour logo" />
          <button type="button" className="logo-btn" onClick={toggleNav}>
            <FaAlignRight className="logo-icon" />
          </button>
        </div>
        <ul className={isOpen ? `navLinks showNav` : `navLinks`}>
          {links.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.path}>{item.text}</Link>
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
