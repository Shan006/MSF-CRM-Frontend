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

const HousingExpenses = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [propertyTax, setPropertyText] = useState();
  const [homeOwnersInsurance, setHomeOwnersInsurance] = useState("");
  const [hazardInsurance, setHazardInsurance] = useState("");
  const [monthlyHOA, setMonthlyHOA] = useState("");
  let Navigate = useNavigate();

  const GoBack = () => {
    Navigate("/Mforms/propertyInfo");
  };

  const AddData = (e) => {
    e.preventDefault();
    if (
      propertyTax === "" ||
      homeOwnersInsurance === "" ||
      hazardInsurance === "" ||
      monthlyHOA === ""
    ) {
      toast("Please Fill All The Fields", {
        position: "top-center",
      });
    } else {
      let DataToSend = {
        propertyTax,
        homeOwnersInsurance,
        hazardInsurance,
        monthlyHOA,
      };
      Navigate("/Mforms/creditExpenses");
    }

    // axios
    //   .post("https://infini8y.com/crm/public/api/", DataToSend)
    //   .then(function (response) {
    //     console.log(response);
    // setPropertyText("");
    // setHomeOwnersInsurance("");
    // setHazardInsurance("");
    // setMonthlyHOA("");
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
              <h1 className="ml-6 text-3xl">
                What Are Your Current Monthly Housing Expenses?
              </h1>
              <Box
                className="px-2 ml-2 mt-4"
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-password-input"
                  label="MonthlyPropertyTax"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={propertyTax}
                  onChange={(e) => setPropertyText(e.target.value)}
                />
                <TextField
                  id="outlined-password-input"
                  label="MonthlyHomeOwnersInsurance"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={homeOwnersInsurance}
                  onChange={(e) => setHomeOwnersInsurance(e.target.value)}
                />
                <TextField
                  id="outlined-password-input"
                  label="MonthlyHazardInsurance"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={hazardInsurance}
                  onChange={(e) => setHazardInsurance(e.target.value)}
                />
                <TextField
                  id="outlined-password-input"
                  label="MonthlyHOA"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={monthlyHOA}
                  onChange={(e) => setMonthlyHOA(e.target.value)}
                />
                <br></br>
                <Button variant="contained" className="m-2" onClick={GoBack}>
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

export default HousingExpenses;
