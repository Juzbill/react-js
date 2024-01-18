import * as React from "react";
import SaleHome from"@/components/Sale/salehome/salehome"
// import SalesWrapper from "../../../components/Sale/saleswrapper/saleswrapper";
// import AddSale from "@/components/Sale/addsale/addsale";
export interface IpageProps {}

export default function page(props: IpageProps) {
  return (
    <div className="flex w-full h-full pt-[102px] p-3">
      {/* <SalesWrapper /> */}
      <SaleHome/>
      {/* <AddSale/> */}
    </div>
  );
}
