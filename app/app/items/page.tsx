import * as React from "react";
import CustomerLayout from "./Layout";

export interface IpageProps {}

export default function page(props: IpageProps) {
  return (
    <div className="flex w-full h-full pt-[102px] p-3">
      <CustomerLayout>from items</CustomerLayout>
    </div>
  );
}
