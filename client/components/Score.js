import React from 'react'

const Score = props => {
  const correct = props.correct
  const wpm = Math.floor(correct / 5)

  return (
    <div>
      <h3>Your score:</h3>
      <h4>{wpm} wpm</h4>
      {/* <button>Share</button> */}
    </div>
  )
}

export default Score
