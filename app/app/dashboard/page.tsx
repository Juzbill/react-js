import * as React from "react";
import Sale from "../dashboard/sale/sale";
import Expenses from "./expenses/expenses";
import Payable from "./payable/payable";
import Receive from "./receive/receive"
import "./page.css";

export interface IpageProps {}

export default function page(props: IpageProps) {
  return (
    <div className="flex w-full h-full pt-[102px] p-3 bg: #F2F7FF">
      <Sale />
      <Expenses />
      <div className="receive">
        <Receive/>
      </div>
      <div className="payable">
        <Payable />
      </div>
    
    </div>
  );
}
