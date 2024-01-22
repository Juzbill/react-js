import * as React from "react";
// import EstimateHome from "@/components/estimate/estimatehome";
import AddEstimate from "@/components/estimate/addestimate"

export interface IpageProps {}

export default function page(props: IpageProps) {
  return (
    <div className="flex w-full h-full pt-[102px] p-3">
     {/* <EstimateHome/> */}
     <AddEstimate/>
    </div>
  );
}
