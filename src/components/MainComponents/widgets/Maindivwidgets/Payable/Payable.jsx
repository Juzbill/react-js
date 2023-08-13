import "./Payable.scss";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Payablebalances from "./Payablebalances";

const DUMMY_DATA = [
  { id: 1, name: "iniyan", balance: 200 },
  { id: 2, name: "vasanth", balance: 200 },
  { id: 3, name: "praveen", balance: 200 },
];

const Payable = (props) => {
  return (
    <div className="pay-container">
      <div className="pay-receivable">
        <ArrowUpwardIcon className="pay-receivableIcon" />
        <span> Payable </span>
      </div>
      <div className="pay-amount">
        <span>Rs.400.00</span>
      </div>
      <div className="pay-partiesdata">
        {DUMMY_DATA.map((party) => (
          <Payablebalances name={party.name} balance={party.balance} />
        ))}
      </div>
    </div>
  );
};

export default Payable;
