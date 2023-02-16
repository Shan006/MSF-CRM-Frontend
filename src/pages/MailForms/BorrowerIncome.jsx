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

const BorrowerIncome = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [secondMortgageBalance, setSecondMortgageBalance] = useState("");
  let Navigate = useNavigate();

  const GoBack = () => {
    Navigate("/Mforms/military");
  };

  const AddData = (e) => {
    e.preventDefault();
    if (
      setSecondMortgageBalance === "" ||
      setCashAmount === "" ||
      setCreditRating === ""
    ) {
      toast("Please Fill All The Fields", {
        position: "top-center",
      });
    } else {
      let DataToSend = {
        secondMortgageBalance,
        cashAmount,
        creditRating,
      };
      Navigate("/Mforms/propertyInfo");
    }

    // axios
    //   .post("https://infini8y.com/crm/public/api/", DataToSend)
    //   .then(function (response) {
    //     console.log(response);
    // setSecondMortgageBalance("");
    // setCashAmount("");
    // setCreditRating("");
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
              <h1 className="ml-6 text-3xl">2nd Mortgage</h1>
              <h1 className="ml-6 mt-2 text-md">
                Do you have a second mortgage?
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
                      id="outlined-password-input"
                      label="RemainingBalanceOn2ndMortgage"
                      placeholder="$"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      value={secondMortgageBalance}
                      onChange={(e) => setSecondMortgageBalance(e.target.value)}
                    />
                  </>
                ) : null}
                <br></br>
              </Box>

              <h1 className="ml-6 text-3xl mt-3">Cash Out Amount</h1>
              <h1 className="ml-6 mt-2 text-md">
                Would you like to borrow additional cash?
              </h1>
              <Button
                variant="contained"
                className="m-4"
                onClick={() => setWillTrue(true)}
              >
                Yes
              </Button>
              <Button
                variant="contained"
                className="m-4"
                onClick={() => setWillTrue(false)}
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
                {willTrue ? (
                  <>
                    <TextField
                      placeholder="$"
                      id="outlined-password-input"
                      label="CashOutAmount"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      value={cashAmount}
                      onChange={(e) => setCashAmount(e.target.value)}
                    />
                  </>
                ) : null}
                <br></br>
              </Box>

              <h1 className="ml-6 text-3xl mt-3">Credit Rating</h1>
              <h1 className="ml-6 mt-2 text-md">
                What is your approximate credit score?
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
                <TextField
                  className="mt-4 mb-4"
                  id="outlined-select-currency"
                  select
                  label="Credit Rating"
                  defaultValue="E"
                  onChange={(e) => setCreditRating(e.target.value)}
                >
                  <MenuItem value="Poor">Poor 579</MenuItem>
                  <MenuItem value="BelowAverage">
                    Below Average 580-619
                  </MenuItem>
                  <MenuItem value="Average">Average 620-659</MenuItem>
                  <MenuItem value="Good">Good 660-719</MenuItem>
                  <MenuItem value="Excellent">Excellent 720+</MenuItem>
                </TextField>
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

export default BorrowerIncome;
