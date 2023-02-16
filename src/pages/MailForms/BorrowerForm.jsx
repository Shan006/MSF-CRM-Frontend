import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import WelcomeBanner from "../../partials/dashboard/WelcomeBanner";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { NavLink } from "react-router-dom";

const BorrowerForm = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobilePhone, setMobilePhone] = useState("");
  const [email, setEmail] = useState("");
  const [martialStatus, setMartialStatus] = useState("");
  const [suffix, setSuffix] = useState("");
  let Navigate = useNavigate();

  const AddData = (e) => {
    e.preventDefault();
    if (
      firstName === "" ||
      middleName === "" ||
      lastName === "" ||
      mobilePhone === "" ||
      email === "" ||
      martialStatus === "" ||
      suffix === ""
    ) {
      toast("Please Fill All The Fields", {
        position: "top-center",
      });
    } else {
      let DataToSend = {
        firstName,
        middleName,
        lastName,
        mobilePhone,
        email,
        martialStatus,
        suffix,
      };
      Navigate("/Mforms/address");
    }

    // axios
    //   .post("https://infini8y.com/crm/public/api/", DataToSend)
    //   .then(function (response) {
    //     console.log(response);
    //     setFirstName("");
    //     setMiddleName("");
    //     setLastName("");
    //     setMobilePhone("");
    //     setEmail("");
    //     setMartialStatus("");
    //     setSuffix("");
    //     toast.success("Lead Added Successfully", {
    //       position: "top-center",
    //     });
    //     console.log("Added");
    //     console.log(DataToSend);
    //   })
    //   .catch(function (error) {
    //     console.log(DataToSend);
    //     toast("Something Went Wrong", {
    //       position: "top-center",
    //     });
    //     console.log(error);
    //   });
  };

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {/*  Site header */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <WelcomeBanner />
          </div>
          <div className="w-full flex justify-center">
            <div className="w-5/6 mb-5 shadow-2xl p-4">
              <h1 className="ml-6 text-3xl">Let's Get Started!</h1>
              <h1 className="ml-6 mt-2 text-md">
                Please provide a few details about yourself.
              </h1>
              <Box
                className="px-2 py-4 ml-2"
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-password-input"
                  label="FirstName"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <TextField
                  id="outlined-password-input"
                  label="MiddleName"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={middleName}
                  onChange={(e) => setMiddleName(e.target.value)}
                />
                <TextField
                  id="outlined-password-input"
                  label="LastName"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <TextField
                  id="outlined-password-input"
                  label="Email"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  id="outlined-password-input"
                  label="MobilePhone"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={mobilePhone}
                  onChange={(e) => setMobilePhone(e.target.value)}
                />
                <TextField
                  id="outlined-password-input"
                  label="MartialStatus"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={martialStatus}
                  onChange={(e) => setMartialStatus(e.target.value)}
                />
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Suffix"
                  defaultValue="E"
                  onChange={(e) => setSuffix(e.target.value)}
                >
                  <MenuItem value="jr">jr.</MenuItem>
                  <MenuItem value="Sr">Sr.</MenuItem>
                  <MenuItem value="I">I</MenuItem>
                  <MenuItem value="II">II</MenuItem>
                  <MenuItem value="II">III</MenuItem>
                </TextField>
                <br></br>
                <Button variant="contained" className="m-3" onClick={AddData}>
                  Next Step
                </Button>
              </Box>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default BorrowerForm;
