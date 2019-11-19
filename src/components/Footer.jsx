import React from "react"
import "../css/footer.css"
import links from "../constant/links"
import socialIcon from "../constant/social-icons"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <div className="footer">
      <div className="links">
        {links.map((item, index) => {
          return (
            <Link to={item.path} key={index}>
              {item.text}
            </Link>
          )
        })}
      </div>
      <div className="icons">
        {socialIcon.map((item, index) => {
          return (
            <a
              href={item.url}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          )
        })}
      </div>
      <div className="copyright">
        copyright &copy; Paradise Tour Agency {new Date().getFullYear} all
        rights reserved
      </div>
    </div>
  )
}

export default Footer
