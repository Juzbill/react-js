import "./receive.css";
import Image from "next/image";
const Receive: React.FC = () => {
  return (
    <div className="receive-wrapper">
      <div className="receive-infowwrapper">
        <div className="receive-imgcontainer">
          <Image
            src="/HomeIcons/receive.svg"
            alt="graph"
            width={20}
            height={20}
          />
        </div>
        <div className="receive-txt-container">
          <span>You’ll Receive</span>
        </div>
      </div>
      <div className="receive-amount">
        <span>Rs.1500.00</span></div>
      <div className="receive-graph">
        <div className="graph">
        <Image src='/HomeIcons/receivegraph.svg' 
        alt="graph"
        width={98}
        height={98}/>
        </div>
        <div className="receive-overdue">
        <span>OverDue</span>
      </div>
      </div>
      <div className="receive-transaction">
      <span>RECENT TRANSACTIONS</span>
      <span  className="trans">See All</span>
      </div>
      <div className="line">
        <Image src='/HomeIcons/payableline.svg'
      alt="line"
      width={236}
      height={2}/>
      </div>
      <div className="receive-customers">
        <ul>
          <li className="customer-list">
      <span className="customer-name">Parthiban</span>
      <span  className="customer-amount">200</span>
      </li>
      </ul>
      </div>
      
        
     
    </div>
  );
};

export default Receive;
