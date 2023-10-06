import React, { Fragment } from "react";
import "./TopTool.css";
const TopTool: React.FC = () => {
  return (
    <Fragment>
      <div className="toptoolwrapper">
        <div className="help">test1</div>
        <div className="contact">test2</div>
        <div className="close">test3</div>
      </div>
    </Fragment>
  );
};

export default TopTool;
