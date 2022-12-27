import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [titleInput, setTitleInput] = useState("");
  const [amountInput, setAmountInput] = useState("");
  const [dateInput, setDateInput] = useState("");

  // const [userInput, setUserInput] = useState({
  //   titleInput: "",
  //   amountInput: "",
  //   dateInput: "",
  // });

  const titleChangeHandler = (event) => {
    setTitleInput(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   titleInput: event.target.value,
    // });
    // setUserInput((prevState) => ({
    //   ...prevState,
    //   titleInput: event.target.value,
    // }));
  };

  const amountChangeHandler = (event) => {
    setAmountInput(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   amountInput: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setDateInput(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   dateInput: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expensesdata = {
      title: titleInput,
      amount: amountInput,
      date: new Date(dateInput),
    };

    props.onSaveExpenseData(expensesdata);

    setTitleInput("");
    setAmountInput("");
    setDateInput("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={titleInput}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amountInput}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2026-12-31"
            value={dateInput}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div>
        <button>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
