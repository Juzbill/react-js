import * as React from "react";
import SaleReturn from "@/components/Sale/salereturn/salereturn"

export interface IpageProps {}

export default function page(props: IpageProps) {
  return (
    <div className="flex w-full h-full pt-[102px] p-3">
     <SaleReturn/>
    </div>
  );
}
