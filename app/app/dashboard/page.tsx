import * as React from "react";
import Sale from "../dashboard/sale/sale";

export interface IpageProps {}

export default function page(props: IpageProps) {
  return (
    <div className="flex w-full h-full pt-[102px] p-3 bg: #F2F7FF">
      <Sale />
    </div>
  );
}
