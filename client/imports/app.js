import React from 'react'
import SpeechInputContainer from './components/speechInputContainer'

const App = React.createClass({
  render() {
    return(
      <div>
        <img src="/images/duck.jpg" alt="I am a duck" />
        <SpeechInputContainer />
      </div>
    )
  }
});

export default App

