// import BankAccount from "@/components/Bankaccount/addbank";
import BankAdd from "@/components/Bankaccount/bankadd";
// import BankDetails from"@/components/Bankaccount/bankdetails";
// import TransferDetails from "@/components/Bankaccount/transferdetails"
export interface IpageProps {}

export default function page(props: IpageProps) {
  return (
    <div className="flex w-full h-full pt-[102px] p-3">
      {/* <BankAccount /> */}
      <BankAdd/>
      {/* <BankDetails/> */}
      {/* <TransferDetails/> */}
    </div>
  );
}
