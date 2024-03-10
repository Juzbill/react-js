import ExpenseCategory from "@/components/expenses/expensecate"
export interface IpageProps {}

export default function page(props: IpageProps) {
  return (
    <div className="flex w-full h-full pt-[102px] p-3">
      <ExpenseCategory/>
    </div>
  );
}
