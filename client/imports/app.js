import React from 'react'
import SpeechInput from './components/speechInput'

const App = React.createClass({
  render() {
    return(
      <div>
        <img src="/images/duck.jpg" alt="I am a duck" />
        <SpeechInput />
      </div>
    )
  }
});

export default App

