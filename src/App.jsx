import Header from "./Components/Header";
import Result from "./Components/Result";
import UserInput from "./Components/UserInput";
import React from "react";
import { useState } from "react";

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 12000,
    expectedReturn: 6,
    duration: 10
})

const inputIsValid = userInput.duration >=1;

function handleChange(inputIdentifier, newValue){
    setUserInput((previousValue) =>{
        return {
            ...previousValue,
            [inputIdentifier]: newValue
        }
    })
}


  return (
    <>
    <Header />
    <UserInput userInput={userInput} onChange={handleChange}/>
    {!inputIsValid && (
      <p className="center">Please enter a duration greater than zero.</p>
    )}
    {inputIsValid && <Result input={userInput}/>}
    </>
  )
}

export default App
