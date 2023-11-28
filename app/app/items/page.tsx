import { ItemsHome } from "@/components/items/Items";
import * as React from "react";

export interface IpageProps {}

function page(props: IpageProps) {
  return (
    <div className="w-full  flex justify-start items-start p-4 mt-16">
      <ItemsHome />
    </div>
  );
}

export default page;
