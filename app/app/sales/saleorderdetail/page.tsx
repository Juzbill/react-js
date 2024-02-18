import * as React from "react";
import SaleOrder from "@/components/Sale/saleorderhome/saleorder"
export interface IpageProps {}

export default function page(props: IpageProps) {
  return (
    <div className="flex w-full h-full pt-[102px] p-3">
      <SaleOrder/>
    </div>
  );
}
