import "./ExpensesData.scss";
const ExpensesData = (props) => {
  return (
    <div className="expenseitemwrapper">
      <span>{props.name}</span>
      <span>{props.balance}</span>
    </div>
  );
};
export default ExpensesData;
