import React from 'react';
import {Link,Routes,Route,BrowserRouter} from "react-router-dom"
import {render} from "react-dom"
import Question from './question';
import Result from './result';
import {useState,createContext } from "react"
import HomePage from './Homepage';
import './index.css'

export const myBox = createContext()

function App()
{
    

  const [ stage, setStage ] = useState("home")
  // stage = "result"
  const [ myScore, setisScore ] = useState(0)

  return (
    <div>
      <myBox.Provider value={ {ss :setStage, ms :myScore, sms :setisScore} }>
          { stage == "home" && <HomePage/> }
          { stage == "question" && <Question/> }
          { stage == "result" && <Result/> }
      </myBox.Provider>
        
      
    </div>
  );


}

render(<App/>,document.querySelector("#root"))