import CustomerNav from "@/components/Parties/Customers/customerNav/CustomerNav";

const CustomerLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <CustomerNav />
      {children}
    </div>
  );
};

export default CustomerLayout;
