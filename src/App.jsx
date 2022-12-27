import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_DATA = [
  { id: "b1", title: "Meditations", amount: 149, date: new Date(2022, 8, 14) },
  {
    id: "b2",
    title: "The Everyday Hero Menifesto",
    amount: 349,
    date: new Date(2022, 9, 21),
  },
  {
    id: "b3",
    title: "The Monk Who Sold His Ferrari",
    amount: 160,
    date: new Date(2022, 6, 7),
  },
  {
    id: "b4",
    title: "The 7 Habits of Highly Effective People",
    amount: 235,
    date: new Date(2022, 11, 26),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_DATA);

  const addExpenseHandler = (expenseData) => {
    setExpenses((prevExpense) => {
      return [expenseData, ...prevExpense];
    });
  };

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h1", {}, "Hello World"),
  //   React.createElement(Expenses, { expenses: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpenseData={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
