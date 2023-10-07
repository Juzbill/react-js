import "./sale.css";
import Image from "next/image";
const Sale: React.FC = () => {
  return (
    <div className="wrapper">
      <div className="topinfo">
        <div className="image">
          <div className="imgcontainer">
            <Image
              src="/HomeIcons/sale.svg"
              alt="sale"
              width={20}
              height={20}
            />
          </div>
          <span className="sale-text">Sale</span>
        </div>
        <div className="monthfilter">
          <select id="time-period" className="filterheader">
            <option value="this-month" className="filteroptions">
              This Month
            </option>
            <option value="last-month" className="filteroptions">
              Last Month
            </option>
            <option value="this-year" className="filteroptions">
              This Year
            </option>
            <option value="last-year" className="filteroptions">
              Last Year
            </option>
          </select>
        </div>
      </div>
      <div className="graphwrapper">
        <div className="left">
          <div className="totalsalewrapper">
            <span className="saleamount">Rs.1,0000.00</span>
            <span className="saletext">Total Sale (Sep)</span>
          </div>
          <div className="growthwrapper">
            <div className="growth">
              <Image
                src="/HomeIcons/GrowthIcon.svg"
                alt="gt"
                width={20}
                height={20}
              />
              <span className="g-value">15%</span>
            </div>
            <span className="g-text">This Month Growth</span>
          </div>
        </div>
        <div className="seperator"></div>
        <div className="right">
          <div className="grph-w">
            <div className="graph">
              <Image
                src="/HomeIcons/salegraph.svg"
                alt="graph"
                width={260}
                height={140}
              />
            </div>
            <div className="graph-text">
              <span>Report: From 01 Sep to 30 Sep</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sale;
