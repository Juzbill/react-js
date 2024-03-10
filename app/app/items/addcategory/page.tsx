import AddCategory from "@/components/items/addcategory";

export interface IpageProps {}

export default function page(props: IpageProps) {
  return (
    <div className="flex w-full h-full pt-[102px] p-3">
      <AddCategory />
    </div>
  );
}
