import { DarkMode, Search, Notifications } from "@mui/icons-material";
import "../Navbar/NavBar.scss";
import pic from "../../../assets/pic.jpg";

const NavBar = (props) => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <Search />
          <input type="text" placeholder="Search transactions.." />
        </div>
        <div className="buttons">
          <div className="sale">
            <span>+ Add sale</span>
          </div>
          <div className="purchase">
            <span>+ Add Purchase</span>
          </div>
        </div>
        <hr />
        <div className="items">
          <div className="item">
            <img src={pic} />
          </div>
          <div className="item">
            <DarkMode className="icon" />
          </div>
          <div className="item">
            <Notifications className="icon" />
            <div className="counter">1</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
