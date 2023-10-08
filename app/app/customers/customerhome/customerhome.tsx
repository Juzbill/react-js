import "./customerhome.css";
import React from "react";
import Image from "next/image";

const customerbalance = [
  { id: 1, name: "John", balance: 1000.0 },
  { id: 2, name: "Alice", balance: 2500.0 },
  { id: 3, name: "Bob", balance: 1500.0 },
  { id: 4, name: "Eve", balance: 2000.0 },
  { id: 4, name: "Eve", balance: 2000.0 },
  { id: 4, name: "Eve", balance: 2000.0 },
  { id: 4, name: "Eve", balance: 2000.0 },
];

const CustomerHome: React.FC = () => {
  return (
    <div className="cx-homewrapper">
      <div className="cx-topwrapper">
        <div className="cx-customer">
          <span>Customers</span>
        </div>
        <div className="cx-groups">
          <span>Groups</span>
        </div>
      </div>
      <div className="cx-midwrapper">
        <div className="cx-leftwrapper">
          <div className="cx-addwrapper">
            <div className="cx-search">
              <div className="cx-searchbar">
                <Image
                  src="/Customers/search.svg"
                  alt="search"
                  width={20}
                  height={20}
                />
                <input type="text" placeholder="Search..." />
              </div>
            </div>
            <div className="cx-cxadd">
              <button>
                <span>+ Add Customers</span>
              </button>
            </div>
          </div>
          <div className="cx-detail-bal-wrapper">
            <div className="cx-detail-filter-wrapper">
              <div className="cx-detail-left">
                <span>Party</span>
                <Image
                  src="/Customers/partfilter.svg"
                  alt="party filter"
                  width={20}
                  height={20}
                />
              </div>
              <div className="cx-detail-right">
                <span>Amount</span>
              </div>
            </div>
            {/* CODE FOR RENDER THE PARTY NAME AND BALANCE DETAILS */}
            <div className="cx-bal-detail-wrapper">
              <ul>
                {customerbalance.map((customer, index) => (
                  <li key={index} className="cx-balance">
                    <span className="cx-balance-name">{customer.name} </span>
                    <span className="cx-balance-amount">
                      {customer.balance}
                    </span>
                    <span>
                      <Image
                        src="/Customers/dots.svg"
                        alt="dots"
                        width={15}
                        height={15}
                      />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="cx-rightwrapper">
          <div className="cx-detail-wrapper">
            <div className="cx-detail">
              <div className="cx-profile">
                <span className="cx-name">Alexandar</span>
                <span className="cx-creditLimit">Credit Limit:Rs.40000</span>
              </div>
              <div className="cx-address-wrapper">
                <div className="cx-phone">
                  <span className="cx-phonekey">Phone:</span>
                  <span className="cx-phonevalue">9876543210</span>
                </div>
                <div className="cx-email">
                  <span className="cx-emailkey">Email:</span>
                  <span className="cx-emailvalue">test@gmail.com</span>
                </div>
                <div className="cx-gst">
                  <span className="cx-gstkey">Gst:</span>
                  <span className="cx-gstvalue">Add GSTIN</span>
                </div>
              </div>
            </div>
            <div className="cx-reminders">
              <div className="cx-reminders-wrapper">
                <Image
                  src="/Customers/whattsapp.svg"
                  alt="whattsapp"
                  width={25}
                  height={25}
                />
                <span>Whattsapp</span>
                <Image
                  src="/Customers/arrow.svg"
                  alt="arrow"
                  width={15}
                  height={15}
                />
              </div>
              <div className="cx-reminders-wrapper">
                <Image
                  src="/Customers/clock.svg"
                  alt="whattsapp"
                  width={25}
                  height={25}
                />
                <span>Reminder</span>
                <Image
                  src="/Customers/arrow.svg"
                  alt="arrow"
                  width={15}
                  height={15}
                />
              </div>
              <div className="cx-reminders-wrapper">
                <Image
                  src="/Customers/sms.svg"
                  alt="whattsapp"
                  width={25}
                  height={25}
                />
                <span>Send Sms</span>
                <Image
                  src="/Customers/arrow.svg"
                  alt="arrow"
                  width={15}
                  height={15}
                />
              </div>
            </div>
          </div>
          <div className="cx-transaction-header">
            <div className="cx-trans-name">
              <p>All Transactions</p>
              <span className="cx-selection-dec"></span>
            </div>
            {/* <span>
              All Transactions
              <span className="cx-selection-dec"></span>
            </span> */}

            <div className="cx-trans-search">
              <Image
                src="/Customers/search.svg"
                alt="search"
                width={22}
                height={22}
              />
              <input
                type="text"
                placeholder="Search..."
                className="cx-trans-filter"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerHome;
