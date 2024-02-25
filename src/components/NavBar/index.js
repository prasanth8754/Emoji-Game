import './index.css'

const NavBar = props => {
  const {score, topScore, isGameOver} = props

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img
          className="nav-logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1>Emoji Game</h1>
      </div>
      {isGameOver !== true && (
        <div className="nav-para-cont">
          <p>Score: {score}</p>
          <p>Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
