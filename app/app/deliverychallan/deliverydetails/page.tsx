import * as React from "react";
import DeliveryChallan from "@/components/Sale/delivery/deliverychallan"

export interface IpageProps {}

export default function page(props: IpageProps) {
  return (
    <div className="flex w-full h-full pt-[102px] p-3">
     <DeliveryChallan/>
    </div>
  );
}
