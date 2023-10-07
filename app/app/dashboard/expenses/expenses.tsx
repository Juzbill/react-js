import "./expenses.css";
import Image from "next/image";
const Expenses: React.FC = () => {
  return (
    <div>
      <div className="expe-wrapper">
        <div className="exp-topbar">
          <div className="exp-iconwrapper">
            <Image
              src="/HomeIcons/Expenses.svg"
              alt="expn"
              width={20}
              height={20}
            />
          </div>
          <span className="exp-topbar-text">Expenses</span>
          <div className="exp-monthfilter">
            <select id="time-period" className="exp-filterheader">
              <option value="this-month" className="exp-filteroptions">
                This Month
              </option>
              <option value="last-month" className="exp-filteroptions">
                Last Month
              </option>
              <option value="this-year" className="exp-filteroptions">
                This Year
              </option>
              <option value="last-year" className="exp-filteroptions">
                Last Year
              </option>
            </select>
          </div>
        </div>
        <div className="exp-amount-wrapper">
          <div className="exp-amount">
            <span>Rs. 500</span>
          </div>
          <div className="exp-status">
            <Image
              src="/HomeIcons/Expstatus.svg"
              alt="exp"
              width={20}
              height={20}
            />
            <span>20%</span>
          </div>
        </div>
        <div className="exp-image-container">
          <div className="exp-image">
            <Image
              src="/HomeIcons/Expensesgraph.svg"
              alt="graph"
              width={264}
              height={127}
            />
          </div>
        </div>
        <div className="exp-month-report">
          <span>Report: from 01 Sep to 30 Sep</span>
        </div>
      </div>
    </div>
  );
};
export default Expenses;
