import * as React from "react";
import CustomerHome from "../../../../components/Parties/Customers/CustomerHome/CustomerHome";
import CustomerNav from "./layout";

export interface IpageProps {}

export default function page(props: IpageProps) {
  return (
    <div className="flex w-full h-full pt-[102px] p-3">
      <CustomerNav>
        <CustomerHome />
      </CustomerNav>
    </div>
  );
}
