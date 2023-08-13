import "./Expenses.scss";
import PaidIcon from "@mui/icons-material/Paid";
import ExpensesData from "../Expenses/ExpensesData";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const DUMMY_DATA = [
  { id: 1, name: "iniyan", balance: 200 },
  { id: 2, name: "vasanth", balance: 200 },
  { id: 3, name: "praveen", balance: 200 },
];

const Expenses = (props) => {
  return (
    <div className="Expensecontainer">
      <div className="Expenseswrapper">
        <PaidIcon className="expensesicon" />
        <span>Expenses</span>
        <select>
          <option value="currentMonth">Current Month</option>
          <option value="lastMonth">Last Month</option>
          <option value="last3Months">Last 3 Months</option>
          <option value="lastYear">Last Year</option>
        </select>
      </div>
      <div className="expensesamount">
        <span>Rs.10785</span>
        <TrendingUpIcon className="expensesstatusicon" />
      </div>
      <span className="dateinfo">Showing from 01-MAR To 02-APR</span>
      <div className="expensesdata">
        {DUMMY_DATA.map((party) => (
          <ExpensesData name={party.name} balance={party.balance} />
        ))}
      </div>
    </div>
  );
};

export default Expenses;
