import Adjustitems from "@/components/items/adjustitem";
export interface IpageProps {}

export default function page(props: IpageProps) {
  return (
    <div className="flex w-full h-full pt-[102px] p-3">
        <Adjustitems/>
    </div>
  );
}
