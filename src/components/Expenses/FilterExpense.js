import "./FilterExpense.css";

const FilterExpense = (props) => {
  const dropdownChangeHandler = (e) => {
    props.onchangeFilter(e.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>filter by Year</label>
        <select value={props.filteredYear} onChange={dropdownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option selected value="2020">
            2020
          </option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default FilterExpense;
