// import React from 'react'

// import {useState,useContext} from "react"

// import { myBox } from "./index"

// // import { FontAwesomeIcon } from '@fontawesome/react-fontawesome';
// // import { faQuestionCircle } from '@fontawesome/free-solid-svg-icons';

// import './index.css'



// // import Result from './result'

// function Question() {

//     const [questionIndex, setQuestionIndex] = useState(0)
// const [islast , setIslast] = useState(false)
// const [ answerChoosen, setAnswerChoosen ] = useState("")
// const { ss, ms, sms } = useContext(myBox)


// const myQuestions = [
//     {
//         title : "What is 2 + 3 ?",
//         A : 5,
//         B : 10,
//         C : 100,
//         D : -23,
//         Answer : "A"
//     },
//     {
//         title : "What is 0 Factorial ?",
//         A : 5,
//         B : 1,
//         C : 10,
//         D : -23,
//         Answer : "B"

//     },
    
//     {
//         title : "What is 2 * 3 ?",
//         A : 5,
//         B : 10,
//         C : 100,
//         D : 6,
//         Answer : "D"
//     },

//     {
//         title : "What is 2 ** 2 ?",
//         A : 5,
//         B : 10,
//         C : 4,
//         D : 6,
//         Answer : "C"
//     }
// ]

// function nextQuestion()
//   {
//     // Logic to verify the answer.If the answer is correct increase the score by + 1, otherwise leave as it it
//     if(answerChoosen == myQuestions[questionIndex].Answer)
//     {
//       sms(ms + 1)
//     }

//     // Logic to increase questionIndex by + 1
//     setQuestionIndex(questionIndex + 1)
//   }

//   function goToResults()
//   {
//     // Logic to check the answer for that last question
//     if(answerChoosen == myQuestions[questionIndex].Answer)
//     {
//       sms(ms + 1)
//     }

//     // Logic to go to results page ===> Result Component
//     ss("result")
//   }

// return (
//     <div id='main' style={{marginTop: "100px", marginLeft: "100px"}}>
  
//       <h3 style={{fontWeight: "800"}}>Q{questionIndex + 1} { myQuestions[questionIndex].title }</h3><br/>
//       A. <button  onClick={function()
//       {
//         setAnswerChoosen("A")
//       }} className='btn btn-outline-primary'>{ myQuestions[questionIndex].A }</button><br/><br/>

//       B. <button onClick={function()
//       {
//         setAnswerChoosen("B")
//       }} className='btn btn-outline-primary'>{ myQuestions[questionIndex].B }</button><br/><br/>

//       C. <button onClick={function()
//       {
//         setAnswerChoosen("C")
//       }} className='btn btn-outline-primary'>{ myQuestions[questionIndex].C }</button><br/><br/>

//       D. <button onClick={function()
//       {
//         setAnswerChoosen("D")
//       }} className='btn btn-outline-primary'>{ myQuestions[questionIndex].D }</button><br/><br/>

//       { questionIndex == myQuestions.length - 1 ? <button style={{marginLeft: "20px"}} className='btn btn-danger' onClick={goToResults}>Finish</button> :   <button style={{marginLeft: "20px"}} className='btn btn-success' onClick={nextQuestion}>Continue</button> }
     
//     </div>
//   )


  
// }

// export default Question

// import React, { useState, useContext } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faQuestionCircle, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
// import { myBox } from './index';
// import './index.css';

// function Question() {
//   const [questionIndex, setQuestionIndex] = useState(0);
//   const [answerChoosen, setAnswerChoosen] = useState('');
//   const [isAnswerCorrect, setIsAnswerCorrect] = useState(null); // Track correctness
//   const { ss, ms, sms } = useContext(myBox);

//   const myQuestions = [
//     {
//       title: "What is 2 + 3 ?",
//       A: 5,
//       B: 10,
//       C: 100,
//       D: -23,
//       Answer: "A"
//     },
//     {
//       title: "What is 0 Factorial ?",
//       A: 5,
//       B: 1,
//       C: 10,
//       D: -23,
//       Answer: "B"
//     },
//     {
//       title: "What is 2 * 3 ?",
//       A: 5,
//       B: 10,
//       C: 100,
//       D: 6,
//       Answer: "D"
//     },
//     {
//       title: "What is 2 ** 2 ?",
//       A: 5,
//       B: 10,
//       C: 4,
//       D: 6,
//       Answer: "C"
//     }
//   ];

//   function checkAnswer(selectedAnswer) {
//     const correctAnswer = myQuestions[questionIndex].Answer;

//     if (selectedAnswer === correctAnswer) {
//       setIsAnswerCorrect(true);
//       sms(ms + 1);
//     } else {
//       setIsAnswerCorrect(false);
//     }
//   }

//   function nextQuestion() {
//     setAnswerChoosen('');
//     setIsAnswerCorrect(null); // Reset correctness for the next question
//     setQuestionIndex(questionIndex + 1);
//   }

//   function goToResults() {
//     // Logic to check the answer for the last question
//     if (answerChoosen === myQuestions[questionIndex].Answer) {
//       sms(ms + 1);
//     }

//     // Logic to go to results page ===> Result Component
//     ss('result');
//   }

//   return (
//     <div id='main' className='question-container'>
//       <div className='question-header'>
//         <FontAwesomeIcon icon={faQuestionCircle} className='question-icon' />
//         <span className='question-number'>Q{questionIndex + 1}</span>
//       </div>
//       <h3 className='question-title'>{myQuestions[questionIndex].title}</h3><br />
//       <div className='answer-options'>
//         {['A', 'B', 'C', 'D'].map((option) => (
//           <button
//             key={option}
//             onClick={() => {
//               setAnswerChoosen(option);
//               checkAnswer(option);
//             }}
//             className={`btn btn-outline-primary ${isAnswerCorrect !== null && myQuestions[questionIndex].Answer === option ? 'correct' : ''} ${isAnswerCorrect !== null && answerChoosen === option && myQuestions[questionIndex].Answer !== option ? 'incorrect' : ''}`}
//           >
//             {myQuestions[questionIndex][option]}
//             {isAnswerCorrect !== null && myQuestions[questionIndex].Answer === option && (
//               <FontAwesomeIcon icon={faCheck} className='answer-icon correct' />
//             )}
//             {isAnswerCorrect !== null && answerChoosen === option && myQuestions[questionIndex].Answer !== option && (
//               <FontAwesomeIcon icon={faTimes} className='answer-icon incorrect' />
//             )}
//           </button>
//         ))}
//       </div>
//       {questionIndex === myQuestions.length - 1 ? (
//         <button className='btn btn-danger' onClick={goToResults}>
//           Finish
//         </button>
//       ) : (
//         <button className='btn btn-success' onClick={nextQuestion}>
//           Continue
//         </button>
//       )}
//     </div>
//   );
// }

// export default Question;


import React, { useState, useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { myBox } from './index';
import './index.css';

function Question() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answerChoosen, setAnswerChoosen] = useState('');
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null); // Track correctness
  const [timer, setTimer] = useState(120); // Initial time in seconds (2 minutes)
  const { ss, ms, sms } = useContext(myBox);

  const myQuestions = [
    {
      title: "What is 2 + 3 ?",
      A: 5,
      B: 10,
      C: 100,
      D: -23,
      Answer: "A"
    },
    {
      title: "What is 0 Factorial ?",
      A: 5,
      B: 1,
      C: 10,
      D: -23,
      Answer: "B"
    },
    {
      title: "What is 2 * 3 ?",
      A: 5,
      B: 10,
      C: 100,
      D: 6,
      Answer: "D"
    },
    {
      title: "What is 2 ** 2 ?",
      A: 5,
      B: 10,
      C: 4,
      D: 6,
      Answer: "C"
    },

    {
         title : "What is the tool we use for styling in Websites?",

         A : 'CSS',

         B : 'HTML',

         C : 'Python',

         D : 'Node.Js',

         Answer : 'A'
    },
    {
      title: "What does MERN stack stand for?",

A: "MongoDB, Express.js, React, Node.js",

B: "MySQL, Express.js, React, Node.js",

C: "MongoDB, Ember.js, React, Node.js",

D: "MongoDB, Express.js, Ruby on Rails, Node.js",

Answer: 'A'
    },

    {
      title: "Which database is typically used in the MERN stack for storing data?",

A: "MySQL",

B: "MongoDB",

C: "SQLite",

D: "PostgreSQL",

Answer: 'B'
    },

    {
      title: "Which part of the MERN stack is responsible for handling server-side logic and API requests?",

A: "MongoDB",

B: "Express.js",

C: "React",

D: "Node.js",

Answer: 'D'
    }
  ];

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  useEffect(() => {
    if (timer === 0) {
      // Logic to handle when the timer reaches 0 (time's up)
      // For example, navigate to the results page
      ss('result');
    }
  }, [timer, ss]);

  

  function checkAnswer(selectedAnswer) {
    const correctAnswer = myQuestions[questionIndex].Answer;


     

    if(localStorage.getItem(questionIndex))
    {
       return 
    }
    if (selectedAnswer === correctAnswer) {
     
      setIsAnswerCorrect(true);
      sms(ms + 1);
    } else {
     
      setIsAnswerCorrect(false);
    }
  }

  function Previous()

  {  
    
    setQuestionIndex(questionIndex - 1)
    // setAnswerChoosen(localStorage.getItem(`store${questionIndex}`))
    
    // setAnswerChoosen(localStorage.getItem(`store${questionIndex}`))

    // if(!localStorage.getItem(questionIndex))
    // {
    //   console.log('yes value is not there for index key')
    // }
    
    // else if(localStorage.getItem(`store${questionIndex}` == 1))
    // { 
    //     localStorage.setItem(questionIndex , `store${questionIndex}`)
    //     setIsAnswerCorrect(true)
    // }

    // else if(localStorage.getItem(!`store${questionIndex}`))
    // {
    //      return
    // }

    // else{
          
    //      return 
    // }

  
         
  }

  function nextQuestion() {
  
    setAnswerChoosen('');
    setIsAnswerCorrect(null); // Reset correctness for the next question
    setQuestionIndex(questionIndex + 1);
  }

 

  

  function goToResults() {
    // Logic to check the answer for the last question
    // if (answerChoosen === myQuestions[questionIndex].Answer) {
    //   sms(ms + 1);
    // }

    // Logic to go to results page ===> Result Component
    ss('result');
  }

  return (
    <div id='main' className='question-container'>
      {/* {sessionStorage.setItem('answer', answerChoosen)} */}
      {localStorage.setItem(questionIndex , answerChoosen)}
      <div className='question-header'>
        <FontAwesomeIcon icon={faQuestionCircle} className='question-icon' />
        <span className='question-number'>Q{questionIndex + 1}</span>
        <span className='timer'>Time: {Math.floor(timer / 60)}:{timer % 60 < 10 ? `0${timer % 60}` : timer % 60}</span>
      </div>
      <h3 className='question-title'>{myQuestions[questionIndex].title}</h3><br />
      <div className='answer-options'>
        {['A', 'B', 'C', 'D'].map((option) => (
          <button
            key={option}
            onClick={() => {
              setAnswerChoosen(option);
              
              checkAnswer(option);
            }}
            className={`btn btn-outline-primary ${isAnswerCorrect !== null && myQuestions[questionIndex].Answer === option ? 'correct' : ''} ${isAnswerCorrect !== null && answerChoosen === option && myQuestions[questionIndex].Answer !== option ? 'incorrect' : ''}`}
          >
            {myQuestions[questionIndex][option]}
            {isAnswerCorrect !== null && myQuestions[questionIndex].Answer === option && (
              <FontAwesomeIcon icon={faCheck} className='answer-icon correct' />
            )}
            {isAnswerCorrect !== null && answerChoosen === option && myQuestions[questionIndex].Answer !== option && (
              <FontAwesomeIcon icon={faTimes} className='answer-icon incorrect' />
            )}
          </button>
        ))}
      </div>
      {questionIndex === myQuestions.length - 1 ? (
        <div>
          <button className='btn btn-success' onClick={Previous}>Previous</button>
        <button className='btn btn-danger' onClick={goToResults}>
          Finish
        </button>
        </div>
      ) : (
       <div>

{questionIndex == 0 ? null :
<button className='btn btn-success' onClick={Previous}>Previous</button>}
        <button className='btn btn-success' onClick={nextQuestion} >
          Continue
        </button>

        

       </div>
      )}
    </div>
  );
}

export default Question;

