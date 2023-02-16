import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import WelcomeBanner from "../../partials/dashboard/WelcomeBanner";
import Button from "@mui/material/Button";
import {BsTelephone} from 'react-icons/bs';
import {IoIosArrowDown} from 'react-icons/io';
import {AiOutlineCloudUpload,AiOutlineMail} from 'react-icons/ai'
import {BiMessageDots} from 'react-icons/bi'
import {VscTasklist} from 'react-icons/vsc';
import {GrDocument} from 'react-icons/gr';
const Portal = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
const[sendInviteToggle,setSendInviteToggle]=useState(false);
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {/*  Site header */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {/* calls email  */}
          <div className=' w- h-[60px]     my-6 ml-2 mr-2 ' >
            <div className='w-full  flex  lg:flex-row md:flex-col    justify-between   h-full'>
            <div className="flex  w-3/4 justify-evenly items-center ">
           {/* <div className='h-full flex items-center ' >Lorenza Valencia</div> */}
           <div className='h-[40px] w-[40px] rounded-md bg-[#FF7043] items-center flex justify-center cursor-pointer' ><BsTelephone className="h-6 w-6 text-white hover:scale-95 "/></div>
           <div className='h-[40px] w-[40px] rounded-md bg-[#FF7043] items-center flex justify-center cursor-pointer' ><AiOutlineMail className="h-6 w-6 text-white hover:scale-95"/></div>
           <div className='h-[40px] w-[40px] rounded-md bg-[#FF7043] items-center flex justify-center cursor-pointer' ><BiMessageDots className="h-6 w-6 text-white hover:scale-95"/></div>
           <div className='h-[40px] w-[40px] rounded-md bg-[#FF7043] items-center flex justify-center cursor-pointer' ><VscTasklist className="h-6 w-6 text-white hover:scale-95"/></div>

          
           </div>
           <div className="flex   justify-evenly items-center ">
           <div className='h-full flex items-center text-black text-lg font-bold mr-4' >Lorenza Valencia</div>
           <div className='h-full w-[50px] rounded-full bg-[#2E66F6] items-center flex justify-center text-lg font-bold text-white' >LV</div>
           </div>
           </div>
           </div>

           {/* portal invite sec */}
           <div className='  lg:h-[120px] h-[150px]   bg-[#ffffffec] border   border-b border-gray-900  ml-2 mr-2 ' >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4  justify-evenly py-4">
           <div className='h-full w-full flex-col flex  items-center ' >
            <p className="text-[#788AB8]">
              Portal Invite Date</p>
            <p className="text-2xl font-bold">-/--/----</p>
           </div>
           <div className='h-full w-full flex-col flex  items-center' >
            <p className="text-[#788AB8]">Application Completion Date</p>
            <p className="text-2xl font-bold">-/--/----</p>
           </div>
           <div className='h-full w-full flex-col flex  items-center' >
            <p className="text-[#788AB8]">Status</p>
           
           </div>
           <div className="">
                  <div className=" flex  justify-center rounded-md p-2 bg-[#FF7043]  hover:bg-[#c07229]">
                    <button
                      className="text-lg text-white font-semibold "
                       onClick={() => setSendInviteToggle(!sendInviteToggle)}
                    >
                      Send Portal Invite
                    </button>
                  </div>
                </div>

           </div>
           <div className={`bg-black w-10 h-20 ${sendInviteToggle?'absolute  ':'hidden' }`}>usman {console.log(sendInviteToggle)}</div>    

           </div>

{/* Analysis section */}
<div className='  lg:h-[120px] h-[150px]   bg-[#ffffffec] border   border-b border-gray-900  ml-2 mr-2 ' >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3  justify-evenly py-4">
           <div className='h-full w-full flex-col flex  items-center ' >
            <p className="text-[#ACBEC8] text-lg hover:scale-95 cursor-pointer ">
            <GrDocument className="w-8 h-8 text-yellow-700 inline-flex mx-1"/>Docs Owed</p>
            <p className="text-3xl font-bold">0</p>
           </div>
           <div className='h-full w-full flex-col flex  items-center' >
            <p className="text-[#ACBEC8] text-lg hover:scale-95 cursor-pointer "><GrDocument className="w-8 h-8 text-yellow-700 inline-flex mx-1"/>Docs Pending Review</p>
            <p className="text-3xl font-bold">0</p>
           </div>
           <div className='h-full w-full flex-col flex  items-center' >
            <p className="text-[#ACBEC8] text-lg hover:scale-95 cursor-pointer "><GrDocument className="w-8 h-8 text-yellow-700 inline-flex mx-1"/>Docs Accepted</p>
            <p className="text-3xl font-bold">0</p>
           </div>
           </div>
           </div>
           {/*  */}
           <div className='     bg-[#ffffffec]   ml-2 mr-2 ' >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3  justify-evenly py-4">
           <div className='h-full w-full flex-col flex  items-center' >
            <p className="text-[#ACBEC8] text-lg cursor-pointer ">Default Needs List <IoIosArrowDown className={`inline-flex hover:rotate-180 h-6 w-6`}/></p>
           
           </div>
           <div className='h-full w-full flex-col flex  items-center' >
            <p className="text-[#ACBEC8] text-lg cursor-pointer">Help With Google Remote</p>
          
           </div>
           <div className='h-full w-full flex-col flex  items-center' >
            <p className="text-[#ACBEC8] text-lg cursor-pointer ">Email Docs </p>
           
           </div>
        

           </div>
           </div>
      
           {/* document table*/}
    <div className="flex flex-col">
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
                   <IoIosArrowDown className={`inline-flex hover:rotate-180 h-3 w-3`}/>
                   </li>

                     <li className="inline-flex items-center">
                   Docs Type
                   <IoIosArrowDown className={`inline-flex hover:rotate-180 h-3 w-3`}/>
                   </li>
                   <li className="inline-flex items-center">
                   Docs Type
                   <IoIosArrowDown className={`inline-flex hover:rotate-180 h-3 w-3`}/>
                   </li>
                   <li className="inline-flex items-center">
                   Docs Type
                   <IoIosArrowDown className={`inline-flex hover:rotate-180 h-3 w-3`}/>
                   </li>
                   </ul>
                  </th>
                  <th
                    scope="col"
                    className=" py-3   font-medium text-gray-500  tracking-wider"
                  >
                   Action
                   <IoIosArrowDown className={`inline-flex hover:rotate-180 h-3 w-3`}/>
                  </th>
                
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
              <tr className="pt-2" >
                    <td className="px-6  whitespace-nowrap">
                      <input type="checkbox"  name="" value="" className="mx-2 "/>
                      <label for="vehicle1">Copies of Government Issued Identification</label>
                    </td>
                    <td className="px-6  whitespace-nowrap">
                      <div className="text-sm text-gray-900"><AiOutlineCloudUpload className="h-8 w-8 cursor-pointer"/></div>
                    </td>                   
                  </tr>
                  <tr className="pt-2" >
                    <td className="px-6  whitespace-nowrap">
                      <input type="checkbox"  name="" value="" className="mx-2 "/>
                      <label for="vehicle1">Copies of Government Issued Identification</label>
                    </td>
                    <td className="px-6  whitespace-nowrap">
                      <div className="text-sm text-gray-900"><AiOutlineCloudUpload className="h-8 w-8 cursor-pointer"/></div>
                    </td>                   
                  </tr>
                  <tr className="pt-2" >
                    <td className="px-6  whitespace-nowrap">
                      <input type="checkbox"  name="" value="" className="mx-2 "/>
                      <label for="vehicle1">Copies of Government Issued Identification</label>
                    </td>
                    <td className="px-6  whitespace-nowrap">
                      <div className="text-sm text-gray-900"><AiOutlineCloudUpload className="h-8 w-8 cursor-pointer"/></div>
                    </td>                   
                  </tr>
                  <tr className="pt-2" >
                    <td className="px-6  whitespace-nowrap">
                      <input type="checkbox"  name="" value="" className="mx-2 "/>
                      <label for="vehicle1">Copies of Government Issued Identification</label>
                    </td>
                    <td className="px-6  whitespace-nowrap">
                      <div className="text-sm text-gray-900"><AiOutlineCloudUpload className="h-8 w-8 cursor-pointer"/></div>
                    </td>                   
                  </tr>
                  <tr className="pt-2" >
                    <td className="px-6  whitespace-nowrap">
                      <input type="checkbox"  name="" value="" className="mx-2 "/>
                      <label for="vehicle1">Copies of Government Issued Identification</label>
                    </td>
                    <td className="px-6  whitespace-nowrap">
                      <div className="text-sm text-gray-900"><AiOutlineCloudUpload className="h-8 w-8 cursor-pointer"/></div>
                    </td>                   
                  </tr>
                  <tr className="pt-2" >
                    <td className="px-6  whitespace-nowrap">
                      <input type="checkbox"  name="" value="" className="mx-2 "/>
                      <label for="vehicle1">Copies of Government Issued Identification</label>
                    </td>
                    <td className="px-6  whitespace-nowrap">
                      <div className="text-sm text-gray-900"><AiOutlineCloudUpload className="h-8 w-8 cursor-pointer"/></div>
                    </td>                   
                  </tr>
                  <tr className="pt-2" >
                    <td className="px-6  whitespace-nowrap">
                      <input type="checkbox"  name="" value="" className="mx-2 "/>
                      <label for="vehicle1">Copies of Government Issued Identification</label>
                    </td>
                    <td className="px-6  whitespace-nowrap">
                      <div className="text-sm text-gray-900"><AiOutlineCloudUpload className="h-8 w-8 cursor-pointer"/></div>
                    </td>                   
                  </tr>
                  <tr className="pt-2" >
                    <td className="px-6  whitespace-nowrap">
                      <input type="checkbox"  name="" value="" className="mx-2 "/>
                      <label for="vehicle1">Copies of Government Issued Identification</label>
                    </td>
                    <td className="px-6  whitespace-nowrap">
                      <div className="text-sm text-gray-900"><AiOutlineCloudUpload className="h-8 w-8 cursor-pointer"/></div>
                    </td>                   
                  </tr>
                  <tr className="pt-2" >
                    <td className="px-6  whitespace-nowrap">
                      <input type="checkbox"  name="" value="" className="mx-2 "/>
                      <label for="vehicle1">Copies of Government Issued Identification</label>
                    </td>
                    <td className="px-6  whitespace-nowrap">
                      <div className="text-sm text-gray-900"><AiOutlineCloudUpload className="h-8 w-8 cursor-pointer"/></div>
                    </td>                   
                  </tr>
                  
              </tbody>
              </table>
              </div>
              </div>
              </div></div>
         </div>
        
        <ToastContainer />
      </div>
    </>
  );
};

export default Portal;
