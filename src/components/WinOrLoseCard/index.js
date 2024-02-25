import './index.css'

const WinOrLoseCard = props => {
  const {score, onResetGame} = props

  const winOrLoseImg =
    score === 12 ? (
      <img
        className="win-lose-img"
        src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
        alt="win or lose"
      />
    ) : (
      <img
        className="win-lose-img"
        src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
        alt="win or lose"
      />
    )

  const resetGame = () => {
    onResetGame()
  }

  return (
    <div className="winLose-bg-cont">
      {winOrLoseImg}
      <div className="w-cont">
        <h1 className="w-h1">{score === 12 ? 'You Won' : 'You Lose'}</h1>
        <p className="w-p">{score === 12 ? 'Best Score' : 'Score'}</p>
        <p className="w-h2">{`${score}/12`}</p>
        <button className="w-btn" type="button" onClick={resetGame}>
          Play Again
        </button>
      </div>
    </div>
  )
}

export default WinOrLoseCard
