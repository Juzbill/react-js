import CustomerGroup from "../../../../../components/Parties/Customers/customergroup/CustomerGroup";
import CustomerLayout from "../layout";
export interface IpageProps {}

export default function page(props: IpageProps) {
  return (
    <div className="flex w-full h-full pt-[102px] p-3">
      <CustomerLayout>
        <CustomerGroup />
      </CustomerLayout>
    </div>
  );
}
