import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deposit, withdraw, addInterest, charges, changeByAmountAdd, changeByAmountWithdraw} from "./store/balance";
import { useState } from "react";

import "./styles.css";

function App() {

  // keeping track of the balance in our app
  const balance = useSelector((state) => state.balance.value);

  // reference to Redux's 'useDispatch' method. Will be used later to grab a specific reducer 
  const dispatch = useDispatch();

  // tracking the amount the user enters
  const [userInput, setUserInput] = useState(0);

  function handleSubmit(event){

    // prevents the default of the button submitting
    event.preventDefault();

    // checks whether to apply 'changeByAmountAdd' reducer - the user wants to add to the balance, or, 'changeByAmountWithdraw' - the user wants to withdraw
    if(event.target.innerHTML === "Deposit"){
      dispatch(changeByAmountAdd(Number(userInput)));
    }else{
      dispatch(changeByAmountWithdraw(Number(userInput)));
    }
    setUserInput(0);
  }

  return (

    // section for styling the app overall
    <div className="layout">

      {/* balance output */}
      <p className="output">B: {balance}</p>

      <form className="actions" onClick={handleSubmit}>

        {/* user input from the user saved */}
        <input placeholder="please enter a value" type="text" onChange={(e) => setUserInput(e.target.value)} value={userInput} ></input>

        {/* adds the user's input to the balance */}
        <button onClick={() => dispatch(deposit(handleSubmit()))}>Deposit</button>

        {/* removes the value from the user's input from the balance */}
        <button onClick={() => dispatch(withdraw(handleSubmit()))}>Withdraw</button>

        {/* adds interest onto the balance */}
        <button onClick={() => dispatch(addInterest())}>Add Interest</button>

        {/* interest on the balance decreases */}
        <button onClick={() => dispatch(charges())}>Charges</button>
      </form>
        

    </div>
  );
}

export default App;
