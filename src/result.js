// import {useContext} from 'react'
// import { myBox } from './index'

// function Result() {

// const {ms} = useContext(myBox)
//   return (
//     <div>

// <h1>The score is {ms}</h1>

//     </div>
//   )
// }

// export default Result

import React, { useContext } from 'react';
import { myBox } from './index';
import './index'; // Create a new CSS file for Result component styles

function Result() {
  const { ms } = useContext(myBox);

  return (
    <div className="result-container">
      <h1 className="result-heading">Your Score</h1>
      <div className="score-card">
        <div className="score-circle">
          <span className="score">{ms}</span>
        </div>
      </div>
      <p className="result-message">Congratulations on completing the quiz!</p>
    </div>
  );
}

export default Result;
