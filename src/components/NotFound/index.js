import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const notFoundBg = isDarkTheme
        ? 'not-found-bg-dark'
        : 'not-found-bg-light'
      const notFoundHeader = isDarkTheme
        ? 'not-found-header-light'
        : 'not-found-header-dark'
      const notFoundContent = isDarkTheme
        ? 'not-found-content-light'
        : 'not-found-content-dark'

      return (
        <>
          <Navbar />
          <div className={`not-found-container ${notFoundBg}`}>
            <div className="not-found-responsive-container">
              <img
                className="not-found-image"
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                alt="not found"
              />
              <h1 className={`not-found-header ${notFoundHeader}`}>
                Lost Your Way?
              </h1>
              <p className={`not-found-content ${notFoundContent}`}>
                We cannot seem to find the page you are looking for.
              </p>
            </div>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
