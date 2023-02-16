import React, { useState } from "react";
import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import WelcomeBanner from "../../partials/dashboard/WelcomeBanner";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const CoBorrower = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [coBorrowermobilePhone, setCoBorrowerMobilePhone] = useState("");
  const [coBorrowerEmail, setCoBorrowerEmail] = useState("");
  const [coBorrowerMartialStatus, setCoBorrowerMartialStatus] = useState("");
  const [coBorrowerSuffix, setCoBorrowerSuffix] = useState();
  const [isTrue, setIsTrue] = useState(false);
  let Navigate = useNavigate();

  const GoBack = () => {
    Navigate("/Mforms/address");
  };

  const AddData = (e) => {
    e.preventDefault();
    if (isTrue) {
      if (
        coBorrowermobilePhone === "" ||
        coBorrowerEmail === "" ||
        coBorrowerMartialStatus === "" ||
        coBorrowerSuffix === ""
      ) {
        toast("Please Fill All The Fields", {
          position: "top-center",
        });
      } else {
        let DataToSend = {
          coBorrowermobilePhone,
          coBorrowerEmail,
          coBorrowerMartialStatus,
          coBorrowerSuffix,
        };
        Navigate("/Mforms/military");
      }
    } else {
      Navigate("/Mforms/military");
    }

    // axios
    //   .post("https://infini8y.com/crm/public/api/", DataToSend)
    //   .then(function (response) {
    //     console.log(response);
    // setCoBorrowerMobilePhone("");
    // setCoBorrowerEmail("");
    // setCoBorrowerMartialStatus("");
    // setCoBorrowerSuffix("");
    // setAnotherFormerAddress("");
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
              <h1 className="ml-6 text-3xl">Co-Borrower Details</h1>
              <h1 className="ml-6 mt-2 text-md">
                Are you applying with another borrower?
              </h1>
              <Button
                variant="contained"
                className="m-4"
                onClick={() => setIsTrue(true)}
              >
                Yes
              </Button>
              <Button
                variant="contained"
                className="m-4"
                onClick={() => setIsTrue(false)}
              >
                No
              </Button>
              <Box
                className="px-2 ml-2"
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                {isTrue ? (
                  <>
                    <TextField
                      id="outlined-select-currency"
                      select
                      label="Suffix"
                      defaultValue="E"
                      onChange={(e) => setCoBorrowerSuffix(e.target.value)}
                    >
                      <MenuItem value="jr">jr.</MenuItem>
                      <MenuItem value="Sr">Sr.</MenuItem>
                      <MenuItem value="I">I</MenuItem>
                      <MenuItem value="II">II</MenuItem>
                      <MenuItem value="II">III</MenuItem>
                    </TextField>
                    <TextField
                      id="outlined-password-input"
                      label="Email"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      value={coBorrowerEmail}
                      onChange={(e) => setCoBorrowerEmail(e.target.value)}
                    />
                    <TextField
                      id="outlined-password-input"
                      label="MobilePhone"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      value={coBorrowermobilePhone}
                      onChange={(e) => setCoBorrowerMobilePhone(e.target.value)}
                    />
                    <TextField
                      id="outlined-select-currency"
                      select
                      label="MartialStatus"
                      defaultValue="E"
                      onChange={(e) =>
                        setCoBorrowerMartialStatus(e.target.value)
                      }
                    >
                      <MenuItem value="jr">Single</MenuItem>
                      <MenuItem value="Sr">Married</MenuItem>
                      <MenuItem value="I">Widowed</MenuItem>
                      <MenuItem value="II">Divorced</MenuItem>
                      <MenuItem value="II">Separated</MenuItem>
                      <MenuItem value="II">Registered Partnership</MenuItem>
                    </TextField>
                  </>
                ) : null}
                <br></br>
                <Button variant="contained" className="m-2" onClick={GoBack}>
                  Go Back
                </Button>
                <Button variant="contained" className="m-2" onClick={AddData}>
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

export default CoBorrower;
