import * as React from "react";
import SaleReturnHome from "@/components/Sale/salereturn/returnhome"

export interface IpageProps {}

export default function page(props: IpageProps) {
  return (
    <div className="flex w-full h-full pt-[102px] p-3">
     <SaleReturnHome/>
    </div>
  );
}
