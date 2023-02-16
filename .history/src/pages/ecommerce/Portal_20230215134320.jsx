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
import {GrDocumentVerified} from 'react-icons/gr'

const Portal = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {/*  Site header */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {/* calls email  */}
          <div className=' w- h-[60px]   bg-[#343D46] border   border-b border-gray-900 my-6 ml-2 mr-2 ' >
            <div className='w-full  flex  lg:flex-row md:flex-col    justify-between   h-full'>
            <div className="flex  w-3/4 justify-evenly items-center ">
           {/* <div className='h-full flex items-center ' >Lorenza Valencia</div> */}
           <div className='h-full w-[50px] rounded-full bg-white items-center flex justify-center' >Calls</div>
           <div className='h-full w-[50px] rounded-full bg-white items-center flex justify-center' >Email</div>
           <div className='h-full w-[50px] rounded-full bg-white items-center flex justify-center' >Text</div>
           <div className='h-full w-[50px] rounded-full bg-white items-center flex justify-center' >Task</div>
          
           </div>
           <div className="flex   justify-evenly items-center ">
           <div className='h-full flex items-center text-white mr-4' >Lorenza Valencia</div>
           <div className='h-full w-[60px] rounded-full bg-white items-center flex justify-center' >image</div>
           </div>
           </div>
           </div>

           {/* portal invite sec */}
           <div className='  lg:h-[120px] h-[150px]   bg-[#ffffffec] border   border-b border-gray-900  ml-2 mr-2 ' >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4  justify-evenly py-4">
           <div className='h-full w-full flex-col flex  items-center' >
            <p className="text-[#788AB8]">Portal Invite Date</p>
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
                      // onClick={(event) => ListingNFT(event, item.token_id,i)}
                    >
                      Send Portal Invite
                    </button>
                  </div>
                </div>

           </div>
           </div>

{/* Analysis section */}
<div className='  lg:h-[120px] h-[150px]   bg-[#ffffffec] border   border-b border-gray-900  ml-2 mr-2 ' >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4  justify-evenly py-4">
           <div className='h-full w-full flex-col flex  items-center' >
            <p className="text-[#ACBEC8]"><GrDocumentVerified className="inline-flex h-8 w-8"/>Docs Owed</p>
            <p className="text-3xl font-bold">0</p>
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
