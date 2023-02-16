import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import { BsTelephone } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineCloudUpload, AiOutlineMail } from "react-icons/ai";
import { BiMessageDots } from "react-icons/bi";
import { VscTasklist } from "react-icons/vsc";
import { GrDocument } from "react-icons/gr";
import { Transition } from "@windmill/react-ui";
import { GrAddCircle } from "react-icons/gr";
import { preDefinedForm } from "./portalComponents/PredefinedForm";

const Portal = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sendInviteToggle, setSendInviteToggle] = useState(false);
  const [docTempToggle, setdocTempToggle] = useState(false);

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {/*  Site header */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          {/* calls email  */}
          <div className=" w- h-[60px]     my-6 ml-2 mr-2 ">
            <div className="w-full  flex  lg:flex-row md:flex-col    justify-between   h-full">
              <div className="flex  w-3/4 justify-evenly items-center ">
                {/* <div className='h-full flex items-center ' >Lorenza Valencia</div> */}
                <div className="h-[40px] w-[40px] rounded-md bg-[#2E66F6] items-center flex justify-center cursor-pointer">
                  <BsTelephone className="h-6 w-6 text-white hover:scale-95 " />
                </div>
                <div className="h-[40px] w-[40px] rounded-md bg-[#2E66F6] items-center flex justify-center cursor-pointer">
                  <AiOutlineMail className="h-6 w-6 text-white hover:scale-95" />
                </div>
                <div className="h-[40px] w-[40px] rounded-md bg-[#2E66F6] items-center flex justify-center cursor-pointer">
                  <BiMessageDots className="h-6 w-6 text-white hover:scale-95" />
                </div>
                <div className="h-[40px] w-[40px] rounded-md bg-[#2E66F6] items-center flex justify-center cursor-pointer">
                  <VscTasklist className="h-6 w-6 text-white hover:scale-95" />
                </div>
              </div>
              <div className="flex   justify-evenly items-center ">
                <div className="h-full flex items-center text-black text-lg font-bold mr-4">
                  Lorenza Valencia
                </div>
                <div className="h-full w-[50px] rounded-full bg-[#2E66F6] items-center flex justify-center text-lg font-bold text-white">
                  LV
                </div>
              </div>
            </div>
          </div>

          {/* portal invite sec */}
          <div className="   h-auto   bg-[#ffffffec] border   border-b border-gray-900  ml-2 mr-2 ">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4  justify-evenly py-4">
              <div className="h-full w-full flex-col flex  items-center ">
                <p className="text-[#788AB8]">Portal Invite Date</p>
                <p className="text-2xl font-bold">-/--/----</p>
              </div>
              <div className="h-full w-full flex-col flex  items-center">
                <p className="text-[#788AB8]">Application Completion Date</p>
                <p className="text-2xl font-bold">-/--/----</p>
              </div>
              <div className="h-full w-full flex-col flex  items-center">
                <p className="text-[#788AB8]">Status</p>
              </div>
              <div className="">
                <div className=" flex  justify-center rounded-md p-2 bg-[#2E66F6]  hover:bg-[#1b4ac0]">
                  <button
                    className="text-lg text-white font-semibold "
                    onClick={() => setSendInviteToggle(!sendInviteToggle)}
                  >
                    Send Portal Invite
                  </button>
                </div>
              </div>
              {/* invite toggle  */}
              <div
                className={`bg-[#FFFFFF] right-72 top-56 w-[150px] h-auto ${
                  sendInviteToggle ? "absolute  " : "hidden"
                }`}
              >
                <Transition
                  show={sendInviteToggle}
                  enter="transition ease-out duration-300 transform"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="transition ease-in duration-100 transform"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <ul className="flex-col ">
                    <li className="cursor-pointer text-[#788AB8] pt-2 hover:text-[#1b4ac0]">
                      Send via Email
                    </li>
                    <li className="cursor-pointer text-[#788AB8] pt-2 hover:text-[#1b4ac0]">
                      Send via SMS
                    </li>
                    <li className="cursor-pointer text-[#788AB8] pt-2 hover:text-[#1b4ac0]">
                      Copy Portal Link
                    </li>
                  </ul>
                </Transition>
              </div>
            </div>
          </div>

          {/* Analysis section */}
          <div className="  h-auto   bg-[#ffffffec] border   border-b border-gray-900  ml-2 mr-2 ">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3  justify-evenly py-4">
              <div className="h-full w-full flex-col flex  items-center ">
                <p className="text-[#ACBEC8] text-lg hover:scale-95 cursor-pointer ">
                  <GrDocument className="w-8 h-8 text-yellow-700 inline-flex mx-1" />
                  Docs Owed
                </p>
                <p className="text-3xl font-bold">0</p>
              </div>
              <div className="h-full w-full flex-col flex  items-center">
                <p className="text-[#ACBEC8] text-lg hover:scale-95 cursor-pointer ">
                  <GrDocument className="w-8 h-8 text-yellow-700 inline-flex mx-1" />
                  Docs Pending Review
                </p>
                <p className="text-3xl font-bold">0</p>
              </div>
              <div className="h-full w-full flex-col flex  items-center">
                <p className="text-[#ACBEC8] text-lg hover:scale-95 cursor-pointer ">
                  <GrDocument className="w-8 h-8 text-yellow-700 inline-flex mx-1" />
                  Docs Accepted
                </p>
                <p className="text-3xl font-bold">0</p>
              </div>
            </div>
          </div>
          {/*  */}
          <div className=" bg-[#ffffffec]   ml-2 mr-2 ">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3  justify-evenly py-4">
              <div className="h-full w-full flex-col flex  items-center">
                <p className="text-[#ACBEC8] text-lg cursor-pointer ">
                  <select name="PreTempDocs" className="w-full">
                    <option
                      value="volvo"
                      className="cursor-pointer text-[#788AB8] pt-2  hover:hover:text-[#c07229]"
                      selected
                    >
                      Default Needs List
                    </option>
                    <option
                      value="saab"
                      className="cursor-pointer text-[#788AB8] pt-2 hover:hover:text-[#c07229] uppercase"
                    >
                      purchase documents for w-2 and 1099 Employees
                    </option>
                    <option
                      value="mercedes"
                      className="cursor-pointer text-[#788AB8] pt-2 hover:hover:text-[#c07229] uppercase"
                    >
                      purchase documents for w-2 and 1099 Employees va loans
                    </option>
                    <option
                      value="audi"
                      className="cursor-pointer text-[#788AB8] pt-2 hover:hover:text-[#c07229] uppercase"
                    >
                      purchase documents for self-employed borrowers
                    </option>
                    <option
                      value="mercedes"
                      className="cursor-pointer text-[#788AB8] pt-2 hover:hover:text-[#c07229] uppercase"
                    >
                      refinance documents for w-2 and 1099 Employees
                    </option>
                    <option
                      value="audi"
                      className="cursor-pointer text-[#788AB8] pt-2 hover:hover:text-[#c07229] uppercase"
                    >
                      refinance documents for self-employed borrowers
                    </option>
                    <option
                      value="audi"
                      className="cursor-pointer text-[#788AB8] pt-2 hover:hover:text-[#c07229] uppercase"
                    >
                      {" "}
                      documents for real invester
                    </option>
                  </select>
                </p>
              </div>
              {/* invite toggle  */}
              {/* <div className={`bg-[#ffffff0a] top-[430px] left-24  w-[250px] h-auto ${setdocTempToggle?'absolute  ':'hidden' }`}>
                <Transition
                  show={docTempToggle}
                  enter="transition ease-out duration-300 transform"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="transition ease-in duration-100 transform"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
  
                 

                </Transition>
            </div> */}
              <div className="h-full w-full flex-col flex  items-center">
                <p className="text-[#ACBEC8] text-lg cursor-pointer">
                  Help With Google Remote
                </p>
              </div>
              <div className="h-full w-full flex-col flex  items-center">
                <p className="text-[#ACBEC8] text-lg cursor-pointer ">
                  Email Docs{" "}
                </p>
              </div>
            </div>
          </div>
          {/* document table*/}
          <div className="flex flex-col pb-6">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200 ml-2">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left  font-medium text-gray-500  tracking-wider"
                        >
                          <ul className="flex justify-around">
                            <li className="inline-flex items-center">
                              Docs Type
                              <IoIosArrowDown
                                className={`inline-flex hover:rotate-180 h-3 w-3`}
                              />
                            </li>

                            <li className="inline-flex items-center">
                              Docs Type
                              <IoIosArrowDown
                                className={`inline-flex hover:rotate-180 h-3 w-3`}
                              />
                            </li>
                            <li className="inline-flex items-center">
                              Docs Type
                              <IoIosArrowDown
                                className={`inline-flex hover:rotate-180 h-3 w-3`}
                              />
                            </li>
                            <li className="inline-flex items-center">
                              Docs Type
                              <IoIosArrowDown
                                className={`inline-flex hover:rotate-180 h-3 w-3`}
                              />
                            </li>
                          </ul>
                        </th>
                        <th
                          scope="col"
                          className=" py-3   font-medium text-gray-500  tracking-wider"
                        >
                          Action
                          <IoIosArrowDown
                            className={`inline-flex hover:rotate-180 h-3 w-3`}
                          />
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {preDefinedForm.map((item) => (
                        <tr className="pt-2">
                          <td className="px-6  whitespace-nowrap">
                            <input
                              type="checkbox"
                              name=""
                              value=""
                              className={` mx-2 ${
                                item.status ? "checked:bg-blue-500" : ""
                              } `}
                            />
                            <label for="vehicle1">{item.data}</label>
                          </td>
                          <td className="px-6  whitespace-nowrap">
                            {item.status ? (
                              <div className="text-sm text-gray-900">
                                <AiOutlineCloudUpload className="h-6 w-6 cursor-pointer" />
                              </div>
                            ) : (
                              ""
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/*Add PreApprovel letter button */}
          <div className="w-[300px] mx-2 pb-4  ">
            <div className=" flex items-center cursor-pointer  justify-center rounded-md p-2 border-dashed border-2 border-gray-500 hover:scale-95 ">
              <GrAddCircle className="inline-flex  w-5 h-5 text-gray-600" />
              <button
                className="text-lg text-slate-500 font-semibold  "
                //  onClick={() => setSendInviteToggle(!sendInviteToggle)}
              >
                Add Custom Doc
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pb-4 px-2">
            <div className="flex items-center cursor-pointer">
              <input type="checkbox" className="inline-flex mr-2" />
              <p className="text-xs">
                {" "}
                Allow referral partner to generate pre-approval letters
              </p>
            </div>
            <div className="cursor-pointer">Download zip</div>
            <div className="cursor-pointer">Convert to PDF</div>
          </div>
          {/* Send pre Approvel Letter */}
          <div className="w-[300px] mx-2 pb-2  ">
            <div className=" flex  justify-center rounded-md p-2 bg-[#78889B]  hover:bg-[#637386] hover:scale-95">
              <button
                className="text-lg font-medium text-white  "
                //  onClick={() => setSendInviteToggle(!sendInviteToggle)}
              >
                Send Pre_Approvel Letter
              </button>
            </div>
          </div>
          <div className="lg:flex-row md:flex-row xl:flex sm:flex flex-col  justify-center mx-2 pb-4 ">
            <div className="flex-col">
              <p>Document type</p>
              <input type="text" />
            </div>
            <div className="flex-col md:mx-4 ">
              <p> Description for Customer</p>
              <input type="text" />
            </div>
          </div>
          <div className="lg:flex-row md:flex-row xl:flex sm:flex flex-col  justify-between mx-2 pb-4 ">
            <div className="flex-col">
              <p className="hover:scale-95 cursor-pointer">
                Upload PDF Document
              </p>
            </div>
            <div className="mx-0 md:mx-4  ">
              <p className="hover:scale-95 cursor-pointer">Map for Signature</p>
            </div>
            <div className=" flex  justify-center rounded-md p-2 bg-[#2E66F6]  hover:bg-[#1c4cc4] hover:scale-95">
              <button
                className="text-lg font-medium text-white  "
                //  onClick={() => setSendInviteToggle(!sendInviteToggle)}
              >
                Save Custom Doc
              </button>
            </div>
          </div>
          {/* Trash document table*/}
          <div className="flex flex-col pb-6">
          <p className=" flex text-lg font-semibold px-2">Trash Documents</p>

            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200 ml-2">
                    <thead className="bg-gray-50 ">
                      <tr className="py-3 ">
                      <th
                          scope="col"
                          className="  font-medium text-gray-500  tracking-wider"
                        >
                          Doc Type
                        </th>
                        <th
                          scope="col"
                          className="  font-medium text-gray-500  tracking-wider"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="  font-medium text-gray-500  tracking-wider"
                        >
                          Date
                        </th>
                        <th
                          scope="col"
                          className="  font-medium text-gray-500  tracking-wider"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr className="">
                        <td className=" pt-3 whitespace-nowrap">abc</td>
                        <td className=" pt-3 whitespace-nowrap">abc</td>
                        <td className=" pt-3 whitespace-nowrap">02/12/2022</td>
                        <td className=" pt-3 whitespace-nowrap">abc</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

            {/* Portal Milestones*/}
            <div className="flex flex-col pb-6">
          <p className=" flex text-lg font-semibold px-2">Portal Milestones</p>

            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200 ml-2">
                    <thead className="bg-gray-50 ">
                      <tr className="py-3 ">
                      <th
                          scope="col"
                          className="  font-medium text-gray-500  tracking-wider"
                        >
                         Portal Status
                        </th>
                        <th
                          scope="col"
                          className="  font-medium text-gray-500  tracking-wider"
                        >
                          Date
                        </th>
                        <th
                          scope="col"
                          className="  font-medium text-gray-500  tracking-wider"
                        >
                          Checked By(User)
                        </th>
                     
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr className="">
                        <td className=" pt-3 whitespace-nowrap">
                          <p></p>
                        </td>
                        <td className=" pt-3 whitespace-nowrap">02/12/2022</td>
                        <td className=" pt-3 whitespace-nowrap">abc</td>
                        
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ToastContainer />
      </div>
    </>
  );
};

export default Portal;
