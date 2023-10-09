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
      <div className="pay-amount">
        <span>Rs.800.00</span>
      </div>
      <div className="pay-graph">
        <div className="graph">
          <Image
            src="/HomeIcons/paayable graph.svg"
            alt="graph"
            width={98}
            height={98}
          />
        </div>
        <div className="pay-overdue">
          <span>OverDue</span>
        </div>
      </div>
      <div className="transaction">
        <span>RECENT TRANSACTIONS</span>
        <span className="trans">See All</span>
      </div>
      <div className="line">
        <Image
          src="/HomeIcons/payableline.svg"
          alt="line"
          width={236}
          height={2}
        />
      </div>
      <div className="customers">
        <ul>
          <li className="customer-list">
            <span className="customer-name">Karthick</span>
            <span className="customer-amount">210</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Payable;
