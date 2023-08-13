import { Fragment } from "react";
import SideBar from "../../MainComponents/SideBar/SideBar";
import NavaBar from "../../MainComponents/Navbar/NavaBar";
import "./Home.scss";
import Widgets from "../../MainComponents/widgets/Homewidgets/Widgets";
import Sidewidget from "../../MainComponents/widgets/Sidewidgets/Sidewidget";
import Receivable from "../../MainComponents/widgets/Maindivwidgets/Receivable/Receivable";
import Payable from "../../MainComponents/widgets/Maindivwidgets/Payable/Payable";
import Expenses from "../../MainComponents/widgets/Maindivwidgets/Expenses/Expenses";

const Home = () => {
  return (
    <div className="home">
      <SideBar />
      <div className="homeContainer">
        <NavaBar />
        {/* RENDERING WIDGETS */}
        <div className="widgetcontainerwrapper">
          <div className="container1">
            <div className="topwidget">
              <div className="widgets">
                <div className="salewidget">
                  <Widgets />
                </div>
                <div className="purchasewidget">
                  <Widgets />
                </div>
              </div>
            </div>
            <div className="bottomwidget">
              <div className="bottomwidgets">
                <div className="youwillreceive">
                  <Receivable />
                </div>
                <div className="youwillpay">
                  <Payable />
                </div>
                <div className="expenses">
                  <Expenses />
                </div>
              </div>
            </div>
          </div>
          <div className="container2">
            <Sidewidget />
            <Sidewidget />
            <Sidewidget />
            <Sidewidget />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
