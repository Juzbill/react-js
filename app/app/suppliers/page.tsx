import * as React from "react";
import SupplierHome from "../suppliers/supplierhome";
// import Addparties from"../addparties/addparties";

export interface IpageProps {}

export default function page(props: IpageProps) {
  return (
    <div className="flex w-full h-full pt-[102px] p-3">
      <SupplierHome/>
      {/* <Addparties/> */}
    </div>
  );
}
