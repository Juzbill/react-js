import Expenses from "../expenses/expenses";
import Payable from "../payable/payable";
import Purchase from "../purchase/purchase";
import Receive from "../receive/receive";
import Sale from "../sale/sale";
import "./dashboardwrapper.css";

const DashboardWrapper: React.FC = () => {
  return (
    <div className="dash-wrapper">
      <div className="dash-leftwrapper">
        <div className="home-topinfo-wrapper">
          <Sale />
          <Expenses />
        </div>
        <div className="home-bottominfo-wrapper">
          <div className="payable-card">
            <Payable />
          </div>
          <div className="receivable-card">
            <Receive />
          </div>
          <div className="purchase-card">
            <Purchase />
          </div>
        </div>
      </div>
      <div className="dash-rightwrapper"></div>
    </div>
  );
};
export default DashboardWrapper;
