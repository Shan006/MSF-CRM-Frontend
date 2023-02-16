import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import WelcomeBanner from "../../partials/dashboard/WelcomeBanner";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const AddressInfo = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentAddress, setCurrentAddress] = useState("");
  const [yearsAtAddress, setYearsAtAddress] = useState("");
  const [monthsAtAddress, setMonthsAtAddress] = useState("");
  const [language, setLanguage] = useState("");
  const [anotherFormerAddress, setAnotherFormerAddress] = useState("");
  let Navigate = useNavigate();

  const GoBack = () => {
    Navigate("/Mforms/borrower");
  };

  const AddData = (e) => {
    e.preventDefault();
    if (
      currentAddress === "" ||
      yearsAtAddress === "" ||
      monthsAtAddress === "" ||
      language === "" ||
      anotherFormerAddress === ""
    ) {
      toast("Please Fill All The Fields", {
        position: "top-center",
      });
    } else {
      let DataToSend = {
        currentAddress,
        yearsAtAddress,
        monthsAtAddress,
        language,
        anotherFormerAddress,
      };
      Navigate("/Mforms/coborrower");
    }

    // axios
    //   .post("https://infini8y.com/crm/public/api/", DataToSend)
    //   .then(function (response) {
    //     console.log(response);
    // setCurrentAddress("");
    // setYearsAtAddress("");
    // setMonthsAtAddress("");
    // setLanguage("");
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
              <h1 className="ml-6 text-3xl">Address Information</h1>
              <h1 className="ml-6 mt-2 text-md">
                Please include 2 years of address history.
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
                  label="CurrentAddress"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={currentAddress}
                  onChange={(e) => setCurrentAddress(e.target.value)}
                />
                <TextField
                  id="outlined-password-input"
                  label="YearAtAddress"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={yearsAtAddress}
                  onChange={(e) => setYearsAtAddress(e.target.value)}
                />
                <TextField
                  id="outlined-password-input"
                  label="MonthsAtAddress"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={monthsAtAddress}
                  onChange={(e) => setMonthsAtAddress(e.target.value)}
                />
                <FormGroup className="flex flex-row mt-2 ml-2">
                  <FormControlLabel
                    control={<Checkbox />}
                    onClick={() => {
                      language === "clicked"
                        ? setLanguage("unclicked")
                        : setLanguage("clicked");
                    }}
                    label="Add Another Address"
                  />
                </FormGroup>
                {language === "clicked" ? (
                  <>
                    <TextField
                      id="outlined-password-input"
                      label="AnotherFormerAddress"
                      className="mt-3"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      value={anotherFormerAddress}
                      onChange={(e) => setAnotherFormerAddress(e.target.value)}
                    />
                  </>
                ) : null}
                <br></br>
                <Button variant="contained" className="m-3" onClick={GoBack}>
                  Go Back
                </Button>
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

export default AddressInfo;
