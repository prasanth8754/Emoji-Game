/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {clickedEmojisList: [], isGameOver: false, score: 0, topScore: 0}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onClickEmoji = id => {
    const {clickedEmojisList} = this.state
    const isEmojisAlreadyClicked = clickedEmojisList.includes(id)

    if (isEmojisAlreadyClicked) {
      this.setState(prevState => ({
        clickedEmojisList: [],
        isGameOver: true,
        topScore:
          prevState.topScore > prevState.score
            ? prevState.topScore
            : prevState.score,
      }))
    } else {
      const {score} = this.state
      const isGameOverTrue = score >= 11

      if (isGameOverTrue === false) {
        this.setState(prevState => ({
          score: prevState.score + 1,
          clickedEmojisList: [...prevState.clickedEmojisList, id],
        }))
      } else {
        this.setState({
          clickedEmojisList: [],
          isGameOver: true,
          score: 12,
          topScore: 12,
        })
      }
    }
  }

  onResetGame = () => {
    this.setState({clickedEmojisList: [], score: 0, isGameOver: false})
  }

  render() {
    const {isGameOver, score, topScore} = this.state

    const shuffledEmojisList = this.shuffledEmojisList()
    return (
      <div className="bg-container">
        <NavBar score={score} topScore={topScore} isGameOver={isGameOver} />
        <div className="home-cont">
          <ul className="emoji-ul-container">
            {isGameOver === false &&
              shuffledEmojisList.map(eachItem => (
                <EmojiCard
                  key={eachItem.id}
                  emojiDetails={eachItem}
                  onClickEmoji={this.onClickEmoji}
                />
              ))}
          </ul>
          {isGameOver && (
            <WinOrLoseCard score={score} onResetGame={this.onResetGame} />
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
