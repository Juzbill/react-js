import * as React from "react";
import SaleOrderHome from "@/components/Sale/saleorderhome/saleorderhome"
export interface IpageProps {}

export default function page(props: IpageProps) {
  return (
    <div className="flex w-full h-full pt-[102px] p-3">
      <SaleOrderHome/>
    </div>
  );
}
