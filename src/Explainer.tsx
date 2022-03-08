import React from 'react'

const Explainer = () => {
  return (
    <React.Fragment>
      <div>
        <img src='ed.png' style={{ animationDuration: '1.2s', animationDirection: 'reverse' }} className='App-logo'></img>
        <img src='nico.png' style={{ animationDuration: '0.7s' }} className='App-logo'></img>
      </div>
      <h1>React fundamentals review</h1>
      <h2>Hey! let's test all the fundamentals of react and see what you're missing</h2>
      <h3>Complete the exercises inside of the <code>src/exercises</code> folder.</h3>
      <p>You are welcome to use any tools you need to get the job done.</p>
      <p>No need to worry about styling. The page has a <code>max-width:600px</code>, FYI. Once you're done push your code to a new repo called <code>hoxton-react-fundamentals-review</code></p>
      <i>Don't cheat, I want to see what you're missing so we can have sessions later. You can use google and documentation, but avoid lecture material and reviews.</i>
    </React.Fragment>
  )
}

export default Explainer