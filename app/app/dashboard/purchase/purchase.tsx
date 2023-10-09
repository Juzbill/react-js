import "./purchase.css";
import Image from "next/image";
const Purchase: React.FC = () => {
  return (
    <div>
      <div className="purchase-wrapper">
        <div className="purchase-topbar">
          <div className="purchase-iconwrapper">
            <Image
              src="/HomeIcons/purchase.svg"
              alt="expn"
              width={15.556}
              height={15.556}
            />
          </div>
          <span className="purchase-topbar-text">Purchase</span>
          <div className="purchase-monthfilter">
            <select id="time-period" className="purchase-filterheader">
              <option value="this-month" className="purchase-filteroptions">
                This Month
              </option>
              <option value="last-month" className="purchase-filteroptions">
                Last Month
              </option>
              <option value="this-year" className="purchase-filteroptions">
                This Year
              </option>
              <option value="last-year" className="purchase-filteroptions">
                Last Year
              </option>
            </select>
          </div>
        </div>
        <div className="purchase-amount-wrapper">
          <div className="purchase-amount">
            <span>Rs. 250.00</span>
          </div>
          
        </div>
        <div className="purchase-image-container">
          <div className="purchase-image">
            <Image
              src="/HomeIcons/purchasegraph.svg"
              alt="graph"
              width={216}
              height={96.5}
            />
          </div>
        </div>
        <div className="purchase-month-report">
          <span>Report: from 01 Sep to 30 Sep</span>
        </div>
        <div className="purchase-transaction">
      <span>RECENT TRANSACTIONS</span>
      <span  className="trans">See All</span>
      </div>
      <div className="line">
        <Image src='/HomeIcons/payableline.svg'
      alt="line"
      width={236}
      height={2}/>
      </div>
      <div className="purchase-customers">
        <ul>
          <li className="purchase-customer-list">
      <span className="purchase-customer-name">Saravanan</span>
      <span  className="purchase-customer-amount">200</span>
      </li>
      </ul>
      </div>
      </div>
    </div>
  );
};
export default Purchase;
