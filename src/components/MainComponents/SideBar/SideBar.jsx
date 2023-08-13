import "./SideBar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
import RocketIcon from "@mui/icons-material/Rocket";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import SellIcon from "@mui/icons-material/Sell";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import AssessmentIcon from "@mui/icons-material/Assessment";
import CloudSyncIcon from "@mui/icons-material/CloudSync";
import BuildIcon from "@mui/icons-material/Build";
import SettingsIcon from "@mui/icons-material/Settings";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CategoryIcon from "@mui/icons-material/Category";

const SideBar = (props) => {
  return (
    <div className="sideBar">
      <div className="top">
        <div className="logo">My Company</div>
        <div className="Companyname"></div>
      </div>
      <hr />
      <div className="center">
        <ul>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <li>
            <SupervisorAccountIcon className="icon" />
            <span>Customers</span>
          </li>
          <li>
            <ContactEmergencyIcon className="icon" />
            <span>Suppliers</span>
          </li>
          <li>
            <CategoryIcon className="icon" />
            <span>Products</span>
          </li>
          <li>
            <SellIcon className="icon" />
            <span>Sale</span>
          </li>
          <li>
            <ShoppingCartIcon className="icon" />
            <span>Purchase</span>
          </li>
          <li>
            <AccountBalanceWalletIcon className="icon" />
            <span>Expenses</span>
          </li>
          <li>
            <AccountBalanceIcon className="icon" />
            <span>Cash & Bank</span>
          </li>
          <li>
            <LocalMallIcon className="icon" />
            <span>Online Shop</span>
          </li>
          <li>
            <AssessmentIcon className="icon" />
            <span>Reports</span>
          </li>
          <hr />
          <li>
            <CloudSyncIcon className="icon" />
            <span>Backup Settings</span>
          </li>
          <li>
            <BuildIcon className="icon" />
            <span>Utilities</span>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>
          <hr />
          <li>
            <ThumbDownOffAltIcon className="icon" />
            <span>Share Feedback</span>
          </li>
          <hr />
          <li>
            <AccessTimeIcon className="icon" />
            <span>Trail Info</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="coloroption"></div>
        <div className="coloroption"></div>
      </div>
    </div>
  );
};
export default SideBar;
