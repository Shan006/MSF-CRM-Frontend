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

const MilitaryDetails = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loanType, setLoanType] = useState("");
  const [refinanceType, setRefinanceType] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [propertyUse, setPropertyUse] = useState("");
  const [appraisal, setAppraisal] = useState("");
  const [currentLoan, setCurrentLoan] = useState("");
  let Navigate = useNavigate();

  const GoBack = () => {
    Navigate("/Mforms/coborrower");
  };

  const AddData = (e) => {
    e.preventDefault();
    if (
      setAppraisal === "" ||
      setCurrentLoan === "" ||
      setLoanType === "" ||
      setPropertyType === "" ||
      setPropertyUse === "" ||
      setRefinanceType === ""
    ) {
      toast("Please Fill All The Fields", {
        position: "top-center",
      });
    } else {
      let DataToSend = {
        loanType,
        refinanceType,
        propertyType,
        propertyUse,
        appraisal,
        currentLoan,
      };
      Navigate("/Mforms/SecondMortgage");
    }

    // axios
    //   .post("https://infini8y.com/crm/public/api/", DataToSend)
    //   .then(function (response) {
    //     console.log(response);
    // setAppraisal("");
    // setCurrentLoan("");
    // setLoanType("");
    // setPropertyType("");
    // setPropertyUse("");
    // setRefinanceType("");
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
          {/* Military Data */}
          <div className="flex flex-wrap">
            <div className="w-full flex justify-center">
              <div className="w-5/6 mb-5 shadow-2xl p-4">
                <h1 className="ml-6 text-3xl">Military Details</h1>
                <h1 className="ml-6 mt-2 text-md">
                  Have you or your spouse served in the military?
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
                  <br></br>
                </Box>

                {/* Loan Type */}
                <h1 className="ml-6 text-3xl">Loan Type</h1>
                <h1 className="ml-6 mt-2 text-md">
                  Tell us more about what you're looking for.
                </h1>
                <Box
                  className="px-2 ml-2"
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "25ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <br></br>
                  <TextField
                    id="outlined-select-currency"
                    select
                    label="Loan Type"
                    defaultValue="E"
                    onChange={(e) => setLoanType(e.target.value)}
                  >
                    <MenuItem value="Refinance">Refinance</MenuItem>
                    <MenuItem value="Purchase">Purchase</MenuItem>
                  </TextField>
                </Box>

                {/* Refinance Info */}
                <h1 className="ml-6 text-3xl mt-4">Refinance info</h1>
                <h1 className="ml-6 mt-2 text-md">
                  What are your refinance goals?
                </h1>
                <Box
                  className="px-2 ml-2"
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "25ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <br></br>
                  <TextField
                    id="outlined-select-currency"
                    select
                    label="Refinance Info"
                    defaultValue="E"
                    onChange={(e) => setRefinanceType(e.target.value)}
                  >
                    <MenuItem value="LowerRate">Lower Rate</MenuItem>
                    <MenuItem value="LowerPayment">Lower Payment</MenuItem>
                    <MenuItem value="ReduceTerm">Reduce Term</MenuItem>
                    <MenuItem value="CashOut">Cash Out</MenuItem>
                  </TextField>
                </Box>

                {/* Property Type */}
                <h1 className="ml-6 text-3xl mt-4">Property Type</h1>
                <h1 className="ml-6 mt-2 text-md">
                  Tell us more about the property.
                </h1>
                <Box
                  className="px-2 ml-2"
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "25ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <br></br>
                  <TextField
                    id="outlined-select-currency"
                    select
                    label="Property Type"
                    defaultValue="E"
                    onChange={(e) => setPropertyType(e.target.value)}
                  >
                    <MenuItem value="SingleFamily">Single-Family</MenuItem>
                    <MenuItem value="Condo">Condo</MenuItem>
                    <MenuItem value="Commercial">Commercial</MenuItem>
                    <MenuItem value="Townhouse">Townhouse</MenuItem>
                    <MenuItem value="MultiFamily">Multi-Family</MenuItem>
                    <MenuItem value="Manufactured">Manufactured</MenuItem>
                  </TextField>
                </Box>

                {/* Property Use */}

                <h1 className="ml-6 text-3xl mt-4">Property Use</h1>
                <h1 className="ml-6 mt-2 text-md">
                  How do you Intend to use the Property?
                </h1>
                <Box
                  className="px-2 ml-2"
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "25ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <br></br>
                  <TextField
                    id="outlined-select-currency"
                    select
                    label="Property Use"
                    defaultValue="E"
                    onChange={(e) => setPropertyUse(e.target.value)}
                  >
                    <MenuItem value="SingleFamily">Primary Home</MenuItem>
                    <MenuItem value="Condo">Investment</MenuItem>
                    <MenuItem value="Commercial">Second Home</MenuItem>
                  </TextField>
                </Box>

                {/* Estimated Value */}

                <h1 className="ml-6 text-3xl mt-4">Estimated Value</h1>
                <h1 className="ml-6 mt-2 text-md">
                  Please estimate the value of the property
                </h1>
                <Box
                  className="px-2 ml-2"
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "25ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <br></br>
                  <TextField
                    id="outlined-password-input"
                    label="Estimated Appraisal Value"
                    placeholder="$"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={appraisal}
                    onChange={(e) => setAppraisal(e.target.value)}
                  />
                </Box>

                {/* Current Loan Balance */}

                <h1 className="ml-6 text-3xl mt-4">Current Loan Balance</h1>
                <h1 className="ml-6 mt-2 text-md">
                  How much is remaining on your mortgage?
                </h1>
                <Box
                  className="px-2 ml-2"
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "25ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <br></br>
                  <TextField
                    id="outlined-password-input"
                    label="Current Loan Balance"
                    placeholder="$"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={currentLoan}
                    onChange={(e) => setCurrentLoan(e.target.value)}
                  />
                </Box>
                <Button variant="contained" className="m-4" onClick={GoBack}>
                  Go Back
                </Button>
                <Button variant="contained" className="m-4" onClick={AddData}>
                  Next Step
                </Button>
              </div>
            </div>
          </div>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default MilitaryDetails;
