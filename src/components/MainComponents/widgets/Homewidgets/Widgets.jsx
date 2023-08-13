import "./widgets.scss";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ReceiptIcon from "@mui/icons-material/Receipt";

const Widgets = (props) => {
  return (
    <div className="widget">
      <div className="left">
        <span className="title">Sale</span>
        <span className="title">Amount</span>
      </div>
      <div className="right">
        <div className="percentage">
          <ArrowUpwardIcon />
          20%
        </div>
        <ReceiptIcon className="icon" />
      </div>
    </div>
  );
};
export default Widgets;
