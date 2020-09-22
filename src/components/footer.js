import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        <a href="mailto:clovis.souzarosa@gmail.com">Contact</a>
        <a href="https://twitter.com/rosaclovis">Twitter</a>
        <a href="https://github.com/clovis-rosa">Github</a>
        <Link to="/about">Privacy</Link>
        <a href="https://www.gatsbyjs.org">
          © {new Date().getFullYear()}, by Clovis Rosa. Created with Gatsby
        </a>
      </div>
    </footer>
  )
}

export default Footer
