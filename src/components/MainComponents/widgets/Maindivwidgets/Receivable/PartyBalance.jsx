import "./PartyBalance.scss";
const PartyBalance = (props) => {
  return (
    <div className="receivablewrapper">
      <span>{props.name}</span>
      <span className="balance">{props.balance}</span>
    </div>
  );
};
export default PartyBalance;
