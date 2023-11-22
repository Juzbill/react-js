import * as React from "react";
import SalesWrapper from "../../../components/Sale/saleswrapper/saleswrapper";

export interface IpageProps {}

export default function page(props: IpageProps) {
  return (
    <div className="flex w-full h-full pt-[102px] p-3">
      <SalesWrapper />
    </div>
  );
}
