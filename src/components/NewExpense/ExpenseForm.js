import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const handlerTitle = (e) => {
    setEnteredTitle(e.target.value);
  };
  const handlerDate = (e) => {
    setEnteredDate(e.target.value);
  };
  const handlerAmount = (e) => {
    setEnteredAmount(e.target.value);
  };

  const Submithandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      date: new Date(enteredDate),
      amount: enteredAmount,
    };
    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredDate("");
    setEnteredAmount("");
  };
  console.log();
  return (
    <form onSubmit={Submithandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={handlerTitle} value={enteredTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount </label>
          <input
            value={enteredAmount}
            type="number"
            min="0.01"
            step="0.01"
            onChange={handlerAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={enteredDate}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={handlerDate}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit"> Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
