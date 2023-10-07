import "./payable.css";
import Image from "next/image";
const Payable: React.FC = () => {
  return (
    <div className="pay-wrapper">
      <div className="pay-infowwrapper">
        <div className="pay-imgcontainer">
          <Image
            src="/HomeIcons/paayable.svg"
            alt="graph"
            width={20}
            height={20}
          />
        </div>
        <div className="pay-txt-container">
          <span>You’ll Pay</span>
        </div>
      </div>
      <div className="pay-amount"></div>
    </div>
  );
};

export default Payable;
