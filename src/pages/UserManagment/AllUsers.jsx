import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import WelcomeBanner from "../../partials/dashboard/WelcomeBanner";
import Button from "@mui/material/Button";
import { GrDocumentUpdate } from "react-icons/gr";
import { Navigate } from "react-router-dom";

const AllUsers = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const Navigate = useNavigate();
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {/*  Site header */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main>
            <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
              <WelcomeBanner />
            </div>
            {/* Table */}
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                {/* Table header */}
                <thead className="text-xs font-semibold uppercase text-slate-500 bg-slate-50 border-t border-b border-slate-200">
                  <tr>
                    <th className="px-6 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <span className="font-semibold text-left ml-1">
                        FirstName
                      </span>
                    </th>
                    <th className="px-6 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">LastName</div>
                    </th>
                    <th className="px-6 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">Email</div>
                    </th>
                    <th className="px-6 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">MobilePhone</div>
                    </th>
                    <th className="px-6 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">Status</div>
                    </th>
                    {/* <th className="px-6 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <h1>Update Role</h1>
                    </th> */}
                  </tr>
                </thead>
                {/* Table body */}
                <tbody className="text-sm divide-y divide-slate-200 overflow-x-auto">
                  <tr>
                    <th className="px-6 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <span className="font-semibold text-left ml-1">
                        Usman
                      </span>
                    </th>
                    <th className="px-6 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">Ghani</div>
                    </th>
                    <th className="px-6 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">usman@ghani</div>
                    </th>
                    <th className="px-6 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">123456</div>
                    </th>
                    <th className="px-6 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">User</div>
                    </th>
                    <th className="px-6 first:pl-5 last:pr-5 py-3 whitespace-nowrap flex">
                      <span className="cursor-pointer">
                        {/* <GrDocumentUpdate
                          className="mt-1.5 ml-1"
                          //   onClick={Next}
                        /> */}
                        <Button
                          variant="contained"
                          className="m-3 mt-0"
                          onClick={() => {
                            Navigate("/user/updateUser");
                          }}
                        >
                          Update
                        </Button>
                      </span>
                      <span className="cursor-pointer">
                        <Button
                          variant="contained"
                          className="m-3 mt-0"
                          //   onClick={AddData}
                        >
                          Delete
                        </Button>
                      </span>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default AllUsers;
