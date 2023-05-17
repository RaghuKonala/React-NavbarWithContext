import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const homeBgClassName = isDarkTheme ? 'home-bg-dark' : 'home-bg-light'
      const homeImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
      const homeTextClassName = isDarkTheme
        ? 'home-text-light'
        : 'home-text-dark'

      return (
        <>
          <Navbar />
          <div className={`home-container ${homeBgClassName}`}>
            <div className="home-responsive-container">
              <img className="home-image" src={homeImageUrl} alt="home" />
              <h1 className={`home-header ${homeTextClassName}`}>Home</h1>
            </div>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
