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

const PropertyInfo = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // PropertyInfo
  const [propertyAddress, setPropertyAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [StateData, setStateData] = useState([
    "AK - Alaska",
    "AL - Alabama",
    "AR - Arkansas",
    "AS - American Samoa",
    "AZ - Arizona",
    "CA - California",
    "CO - Colorado",
    "CT - Connecticut",
    "DC - District of Columbia",
    "DE - Delaware",
    "FL - Florida",
    "GA - Georgia",
    "GU - Guam",
    "HI - Hawaii",
    "IA - Iowa",
    "ID - Idaho",
    "IL - Illinois",
    "IN - Indiana",
    "KS - Kansas",
    "KY - Kentucky",
    "LA - Louisiana",
    "MA - Massachusetts",
    "MD - Maryland",
    "ME - Maine",
    "MI - Michigan",
    "MN - Minnesota",
    "MO - Missouri",
    "MS - Mississippi",
    "MT - Montana",
    "NC - North Carolina",
    "ND - North Dakota",
    "NE - Nebraska",
    "NH - New Hampshire",
    "NJ - New Jersey",
    "NM - New Mexico",
    "NV - Nevada",
    "NY - New York",
    "OH - Ohio",
    "OK - Oklahoma",
    "OR - Oregon",
    "PA - Pennsylvania",
    "PR - Puerto Rico",
    "RI - Rhode Island",
    "SC - South Carolina",
    "SD - South Dakota",
    "TN - Tennessee",
    "TX - Texas",
    "UT - Utah",
    "VA - Virginia",
    "VI - Virgin Islands",
    "VT - Vermont",
    "WA - Washington",
    "WI - Wisconsin",
    "WV - West Virginia",
    "WY - Wyoming",
  ]);
  // Additional PropertyInfo
  const [yearBuilt, setYearBuilt] = useState("");
  const [NoOfUnits, setNoOfUnits] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");
  const [fhaMortgage, setFhaMortgage] = useState("");
  // Mortgage Payment
  const [monthlyPayment, setMonthlyPayment] = useState("");
  let Navigate = useNavigate();

  const GoBack = () => {
    Navigate("/Mforms/secondMortgage");
  };

  const AddData = (e) => {
    e.preventDefault();
    if (
      setPropertyAddress === "" ||
      setCity === "" ||
      setState === "" ||
      setZip === "" ||
      setYearBuilt === "" ||
      setNoOfUnits === "" ||
      setPurchasePrice === "" ||
      setPurchaseDate === ""
    ) {
      toast("Please Fill All The Fields", {
        position: "top-center",
      });
    } else {
      let DataToSend = {
        propertyAddress,
        city,
        state,
        zip,
        yearBuilt,
        NoOfUnits,
        purchaseDate,
        purchasePrice,
        fhaMortgage,
        monthlyPayment,
      };
      Navigate("/Mforms/housingExpenses");
    }

    // axios
    //   .post("https://infini8y.com/crm/public/api/", DataToSend)
    //   .then(function (response) {
    //     console.log(response);
    // setPropertyAddress("");
    // setCity("");
    // setState("");
    // setZip("");
    // setYearBuilt("");
    // setNoOfUnits("");
    // setPurchasePrice("");
    // setPurchaseDate("");
    // setMonthlyPayment("");
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
              {/* Property */}
              <h1 className="ml-6 text-3xl">Tell Us About Your Property</h1>
              <h1 className="ml-6 mt-2 text-md">
                The subject property address is the same as my current address.
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
                  label="PropertyAddress"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={propertyAddress}
                  onChange={(e) => setPropertyAddress(e.target.value)}
                />
                <TextField
                  id="outlined-password-input"
                  label="City"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
                <TextField
                  className="mt-2 mb-4"
                  id="outlined-select-currency"
                  select
                  label="State"
                  defaultValue="E"
                  onChange={(e) => setState(e.target.value)}
                >
                  {StateData.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  id="outlined-password-input"
                  label="Zip"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                />
              </Box>

              {/* Additional Property Info */}

              <h1 className="ml-6 mt-5 text-3xl">
                Additional Property Information
              </h1>
              {/* <h1 className="ml-6 mt-4 text-md">
                Additional Property Information
              </h1> */}
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
                  label="YearBuilt"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={yearBuilt}
                  onChange={(e) => setYearBuilt(e.target.value)}
                />
                <TextField
                  id="outlined-password-input"
                  label="NumberOfUnits"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={NoOfUnits}
                  onChange={(e) => setNoOfUnits(e.target.value)}
                />
                <TextField
                  id="outlined-password-input"
                  label="OriginalPurchasePrice"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={purchasePrice}
                  onChange={(e) => setPurchasePrice(e.target.value)}
                />
                <TextField
                  id="outlined-password-input"
                  label="PurchaseDate"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={purchaseDate}
                  onChange={(e) => setPurchaseDate(e.target.value)}
                />

                <div className="flex">
                  <h1 className="ml-3 mt-4 text-md">
                    Do you currently have an FHA Mortgage?
                  </h1>
                  <Button
                    variant="contained"
                    className="m-2"
                    onClick={(e) => {
                      setFhaMortgage("Yes");
                      // if (e.target.style.backgroundColor === "primary") {
                      //   e.target.style.backgroundColor = "red";
                      // } else {
                      //   e.target.style.backgroundColor = "primary";
                      // }
                    }}
                  >
                    Yes
                  </Button>
                  <Button
                    variant="contained"
                    className="m-2"
                    onClick={() => setFhaMortgage("No")}
                  >
                    No
                  </Button>
                </div>
              </Box>

              {/* Mortgage Payment */}
              <Box
                className="px-2 ml-2 mt-4"
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <h1 className="ml-3 text-3xl mt-5">Mortgage Payment</h1>
                <h1 className="ml-3 mt-2 text-md">
                  What is your monthly mortgage payment?
                </h1>
                <TextField
                  id="outlined-password-input"
                  className="mt-4 mb-3"
                  placeholder="$"
                  label="CurrentMonthlyPayment"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={monthlyPayment}
                  onChange={(e) => setMonthlyPayment(e.target.value)}
                />
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

export default PropertyInfo;
