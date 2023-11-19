import * as React from "react";
// import Addparties from"../addparties/addparties";
import CustomTabPanel from"./addparties"

export interface IpageProps {}

export default function page(props: IpageProps) {
  return (
    <div className="flex w-full h-full pt-[102px] p-3">
      {/* <Addparties/> */}
      <CustomTabPanel/>
    </div>
  );
}
