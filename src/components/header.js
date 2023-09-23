import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle, menuLinks }) => (
  <header
    style={{
      background: "#1C3879",
      marginBottom: "1.45rem",
    }}
  >
    <div
      style={{
        background: "#1C3879",
        marginBottom: "1.45rem",
      }}
    >
      <div
        style={{
          margin: "0 auto",
          maxWidth: 960,
          padding: "1rem",
          display: "flex",
          justifyItems: "space-between",
          alignItems: "center",
        }}
      >
        <h3 style={{flex: 1, margin: 0 }}>
          <Link
            to="/"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            {siteTitle}
          </Link>
        </h3>
        <div>
          <nav>
            <ul style={{ display: "flex", flex: 1, margin: 0 }}>
              {menuLinks.map(link => (
                <li
                  key={link.name}
                  style={{
                    listStyleType: `none`,
                    padding: `1rem`,
                    margin: 0,
                  }}
                >
                  <Link style={{ color: `white` }} to={link.link}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
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
