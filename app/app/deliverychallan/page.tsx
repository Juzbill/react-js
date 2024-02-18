import * as React from "react";
import DeliveryHome from "@/components/Sale/delivery/deliveryhome"

export interface IpageProps {}

export default function page(props: IpageProps) {
  return (
    <div className="flex w-full h-full pt-[102px] p-3">
     <DeliveryHome/>
    </div>
  );
}
