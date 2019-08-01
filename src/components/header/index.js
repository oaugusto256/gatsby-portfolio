import React from "react"
import PropTypes from "prop-types"
import './index.scss'

const Header = ({ siteTitle }) => (
  <header>
    {siteTitle}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
