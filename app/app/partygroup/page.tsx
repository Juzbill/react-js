import * as React from "react";
import Partygroup from "../partygroup/partygroup";

export interface IpageProps {}

export default function page(props: IpageProps) {
  return (
    <div className="flex w-full h-full pt-[102px] p-3">
      <Partygroup />
    </div>
  );
}
