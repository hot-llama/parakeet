import React from 'react'

const SpeechInput = (props) => {
  return(
    <div>
      <input type="text" onChange={props.getInput} />
    </div>
  )
};

export default SpeechInput

