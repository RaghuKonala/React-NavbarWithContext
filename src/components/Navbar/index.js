import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const websiteLogoUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const themeImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const navbarBg = isDarkTheme ? 'navbar-bg-dark' : 'navbar-bg-light'
      const navMenuItem = isDarkTheme
        ? 'menu-item-text-light'
        : 'menu-item-text-dark'

      return (
        <nav className={`navbar-container ${navbarBg}`}>
          <div className="navbar-content-container">
            <Link to="/">
              <img
                className="website-logo"
                src={websiteLogoUrl}
                alt="website logo"
              />
            </Link>
            <ul className="nav-menu">
              <li className="nav-menu-item ">
                <Link to="/" className={`nav-link ${navMenuItem}`}>
                  Home
                </Link>
              </li>
              <li className="nav-menu-item ">
                <Link to="/about" className={`nav-link ${navMenuItem}`}>
                  About
                </Link>
              </li>
            </ul>
            <button
              onClick={toggleTheme}
              className="theme-button"
              data-testid="theme"
              type="button"
            >
              <img className="theme-image" src={themeImageUrl} alt="theme" />
            </button>
          </div>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
