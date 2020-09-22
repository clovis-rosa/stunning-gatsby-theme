import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="container">
      {/* NAV */}
      <nav className="row space-between">
        <div className="logo">
          <Link to="/">{siteTitle}</Link>
        </div>
        <ul className="row space-between">
          <li>
            <Link to="/work" className="menu">
              Work
            </Link>
          </li>
          <li>
            <Link to="/about" className="menu">
              About us
            </Link>
          </li>
        </ul>
      </nav>
      {/* NAV */}
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
