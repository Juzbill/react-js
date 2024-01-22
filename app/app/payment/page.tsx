import * as React from "react";
// import PaymentHome from "@/components/payment/payment";
import PayIn from "@/components/payment/payin"
export interface IpageProps {}

export default function page(props: IpageProps) {
  return (
    <div className="flex w-full h-full pt-[102px] p-3">
      {/* <PaymentHome/> */}
      <PayIn/>
    </div>
  );
}
