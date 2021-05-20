import React from 'react'

const Preview = props => {
  const text = props.text.split('')

  return (
    <div className="preview border rounded p-3 mb-4">
      <div className="overlay">
        {text.map((char, i) => {
          let color
          if (i < props.submission.length) {
            color = char === props.submission[i] ? '#dfffa0' : '#fcbea4'
          }
          return (
            <span key={i} style={{color: color}}>
              {char}
            </span>
          )
        })}
      </div>
    </div>
  )
}

export default Preview
