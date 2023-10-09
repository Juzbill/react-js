import * as React from "react";
import "./page.css";
import DashboardWrapper from "./dashboardwrapper/dashboardwrapper";

export interface IpageProps {}

export default function page(props: IpageProps) {
  return (
    <div className="flex w-full h-full pt-[102px] p-3 bg: #F2F7FF">
      <DashboardWrapper />
    </div>
  );
}
