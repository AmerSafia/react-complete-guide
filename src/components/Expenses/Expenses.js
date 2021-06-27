import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import FilterExpense from "./FilterExpense";
import { useState } from "react";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [filteredYear, setfilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <FilterExpense
        selected={filteredYear}
        onchangeFilter={filterChangeHandler}
      />

      {filteredExpenses.length === 0 && <p>No expenes founed.</p>}

      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            key={expense.id}
          />
        ))}
    </Card>
  );
};

export default Expenses;
