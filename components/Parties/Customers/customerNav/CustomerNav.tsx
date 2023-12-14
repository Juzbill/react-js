import Link from "next/link";

const CustomerNav: React.FC = () => {
  return (
    <div className="px-5 py-1 rounded-md bg-slate-250  flex text-base md:text-lg bg-white ml-4 w-[72%]">
      <Link
        className="text-green-500 hover:underline mr-4"
        href={"/app/parties/customers"}
      >
        Customer
      </Link>
      <Link className="mr-4"  href={"/app/parties/customers/customerGroup"}> Group </Link>
    </div>
  );
};

export default CustomerNav;
