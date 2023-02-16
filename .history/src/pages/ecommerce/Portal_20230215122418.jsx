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
        
          <div className=' w-full h-[60px]   bg-[#343D46] border   border-b border-gray-900 my-6 ' >
            <div className='w-full  flex  lg:flex-row md:flex-col  mx-auto px-4 justify-between  items-center h-full'>
            <div className='h-full  rounded-full  items-center flex justify-cente justify-betweenr' >
              <div>usman</div>
              <div>usman</div>
              <div>usman</div>

            </div>
           
           <div className='h-full w-[60px] rounded-full bg-white items-center flex justify-center' >image</div>

           </div>
           </div>
         </div>
        
        <ToastContainer />
      </div>
    </>
  );
};

export default Portal;
