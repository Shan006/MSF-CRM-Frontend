import React, { useState, useEffect, useContext } from "react";
import Customer from "./CustomersTableItem";
import axios from "axios";
import { LeadContext } from "../../context/LeadContext";
import { AuthContext } from "../../context/AuthContext";
function CustomersTable({ selectedItems }) {
  const {backendUri}=useContext(AuthContext);
   const [leadData, setLeadData] = useState([]);
  useEffect(() => {
  axios
    .get(`${backendUri}/lead`)
    .then(function(response) {
      console.log("Data", response.data.lead);
      setLeadData(response.data.lead);
    })
    .catch(function (error) {
      toast("Something Went Wrong", {
        position: "top-center",
      });
      console.log(error);
    });
  }, []);
  const [selectAll, setSelectAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);
  const handleClick = (e) => {
    const { id, checked } = e.target;
    setSelectAll(false);
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
    }
};
  useEffect(() => {
    selectedItems(isCheck);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCheck]);

  return (
    <div className="bg-white shadow-lg rounded-sm border border-slate-200 relative">
      <header className="px-5 py-4">
        <h2 className="font-semibold text-slate-800">
          All Customers
          {/* <span className="text-slate-400 font-medium">248</span> */}
        </h2>
      </header>
      <div>
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs font-semibold uppercase text-slate-500 bg-slate-50 border-t border-b border-slate-200">
              <tr>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <span className="font-semibold text-left ml-1">
                    Quick Actions
                  </span>
                </th>
                <th className="px-6 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <span className="font-semibold text-left ml-1">LastName</span>
                </th>
                <th className="px-6 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">FirstName</div>
                </th>
                <th className="px-6 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Status</div>
                </th>
                <th className="px-6 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">MobilePhone</div>
                </th>
                <th className="px-6 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Email</div>
                </th>
                {/* <th className="px-6 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">
                    Subject Property Full Address
                  </div>
                </th> */}
                <th className="px-6 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Source</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-200 overflow-x-auto">
              {leadData.map((customer) => {
                return (
                  <Customer
                    id={customer.id}
                    lname={customer.lastname}
                    fname={customer.firstname}
                    mobile={customer.phone}
                    email={customer.email}
                    // id={location.state.id}
                    // lname={Location.state.lastName}
                    // fname={Location.state.firstName}
                    // mobile={Location.state.mobilePhone}
                    // email={Location.state.email}
                    // source={Location.state.source}
                  />
                );
              })}
              {/* ); */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CustomersTable;
