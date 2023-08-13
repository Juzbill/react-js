import PartyBalance from "./PartyBalance";
import "./Receivable.scss";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const DUMMY_DATA = [
  { id: 1, name: "iniyan", balance: 200 },
  { id: 2, name: "vasanth", balance: 200 },
  { id: 3, name: "praveen", balance: 200 },
];

const Receivable = (props) => {
  return (
    <div className="container">
      <div className="receivable">
        <ArrowDownwardIcon className="receivableIcon" />
        <span> Receivable </span>
      </div>
      <div className="amount">
        <span>Rs.400.00</span>
      </div>
      <div className="partiesdata">
        {DUMMY_DATA.map((party) => (
          <PartyBalance name={party.name} balance={party.balance} />
        ))}
      </div>
    </div>
  );
};

export default Receivable;
