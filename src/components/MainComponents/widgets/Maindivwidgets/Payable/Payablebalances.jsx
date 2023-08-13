import "./PayableBalances.scss";
const Payablebalances = (props) => {
  return (
    <div className="pay-receivablewrapper">
      <span>{props.name}</span>
      <span className="pay-balance">{props.balance}</span>
    </div>
  );
};
export default Payablebalances;
