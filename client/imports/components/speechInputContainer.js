import React from 'react'
import SpeechInput from './speechInput'

const SpeechInputContainer = React.createClass({
  getInput(event) {
    console.log(event.target.value);
  },
  render() {
    return (
      <SpeechInput getInput={this.getInput} />
    )
  }
});

export default SpeechInputContainer

