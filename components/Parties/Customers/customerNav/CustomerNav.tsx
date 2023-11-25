import Link from "next/link";

const CustomerNav: React.FC = () => {
  return (
    <div className="px-2 py-2 bg-slate-300 flex">
      <Link
        className="text-green-500 hover:underline"
        href={"/app/parties/customers"}
      >
        Cutomer
      </Link>
      <Link href={"/app/parties/customers/customerGroup"}> Group </Link>
    </div>
  );
};

export default CustomerNav;
