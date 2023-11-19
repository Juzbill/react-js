"use client";
import "./saleswrapper.css";
import * as React from "react";
import CloseIcon from "@mui/icons-material/Close";
import Switch from "@mui/material/Switch";
import Box from "@mui/material";

const SalesWrapper: React.FC<{}> = () => {
  const [checked, setChecked] = React.useState(true);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <div className="sale-nav">
      <div className="sale-nav-left">
        <span className="sale-sale-text">Sale</span>
        <div className="sale-nav-left-salemode">
          <span>Credit</span>
          <span>
            <Switch
              sx={{
                transform: "scale(1.2)",
              }}
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
          </span>
          <span>Cash</span>
        </div>
      </div>
      <span>
        <CloseIcon />
      </span>
    </div>
  );
};

export default SalesWrapper;
