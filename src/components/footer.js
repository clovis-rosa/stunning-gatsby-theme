import React from "react"

const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        <a href="mailto:clovis.souzarosa@gmail.com">Contact</a>
        <a href="https://twitter.com/rosaclovis">Twitter</a>
        <a href="/terms/">Github</a>
        <a href="/privacy/">Privacy</a>
        <a href="https://www.gatsbyjs.org">© {new Date().getFullYear()}</a>
      </div>
    </footer>
  )
}

export default Footer
