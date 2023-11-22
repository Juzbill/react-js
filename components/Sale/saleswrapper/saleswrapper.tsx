"use client";
import SalePartyDetail from "../salepartydetail/SalePartyDetail";
import InvoiceNumber from "../InvoiceNumber/InvoiceNumber";
import "./saleswrapper.css";

const SalesWrapper: React.FC = () => {
  return (
    <div className="sale-wrapper-splitter">
      <div className="sale-wrp-party-detail">
        <SalePartyDetail />
      </div>
      <div className="sale-wrp-inv-detail">
        <InvoiceNumber />
      </div>
    </div>
  );
};

export default SalesWrapper;
