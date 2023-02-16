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
import { useLocation } from "react-router-dom";
import { LeadContext } from "../../context/LeadContext";
import { useNavigate } from "react-router-dom";
const Portal = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [mobilePhone, setMobilePhone] = useState();
  const [email, setEmail] = useState();
  const [alternateEmail, setAlternateEmail] = useState();
  const [contactMethod, setContactMethod] = useState();
  const [creditScore, setCreditScore] = useState();
  const [DTI, setDTI] = useState();
  const [LTV, setLTV] = useState();
  const [liquidAssets, setLiquidAssets] = useState();
  const [SSN, setSSN] = useState();
  let [dob, setDob] = useState();
  const [source, setSource] = useState();
  const [workingWithRetailor, setWorkingWithRetailor] = useState();
  const [referalpartner, setReferalpartner] = useState();
  const [referalSource, setReferalSource] = useState();
  const [language, setLanguage] = useState([]);

  const location = useLocation();
  const { leadData, setLeadData } = useContext(LeadContext);
  let Navigate = useNavigate();

  useEffect(() => {
    setFirstName(location.state.firstName);
    setLastName(location.state.lastName);
    setEmail(location.state.email);
    setMobilePhone(location.state.mobilePhone);
    setSource(location.state.source);
  }, []);

  // useEffect(() => {
  //   axios
  //     .get(`https://infini8y.com/crm/public/api/get_leads/${location.state.id}`)
  //     .then(function (response) {
  //       console.log("Data", response.data.lead);
  //       setFirstName(response.data.lead.firstName);
  //       setLastName(response.data.lead.lastName);
  //       setMobilePhone(response.data.lead.mobilePhone);
  //       setEmail(response.data.lead.email);
  //       setAlternateEmail(response.data.lead.alternateEmail);
  //       setContactMethod(response.data.lead.contactMethod);
  //       setCreditScore(response.data.lead.creditScore);
  //       setDTI(response.data.lead.DTI);
  //       setLTV(response.data.lead.LTV);
  //       setLiquidAssets(response.data.lead.liquidAssets);
  //       setSSN(response.data.lead.SSN);
  //       setDob(response.data.lead.dob);
  //       setSource(response.data.lead.source);
  //       setWorkingWithRetailor(response.data.lead.workingWithRetailor);
  //       setReferalpartner(response.data.lead.referalpartner);
  //       setReferalSource(response.data.lead.referalSource);
  //       setLanguage(response.data.lead.language);
  //     })
  //     .catch(function (error) {
  //       toast("Something Went Wrong", {
  //         position: "top-center",
  //       });
  //       console.log(error);
  //     });
  // }, []);

  const AddData = (e) => {
    e.preventDefault();

    const newState = leadData.map((obj) => {
      if (obj.id === location.state.id) {
        return {
          ...obj,
          firstName: firstName,
          lastName: lastName,
          email: email,
          mobilePhone: mobilePhone,
          source: source,
        };
      }
      return obj;
    });

    setLeadData(newState);
    setFirstName("");
    setLastName("");
    setMobilePhone("");
    setEmail("");
    setAlternateEmail("");
    setContactMethod("");
    setCreditScore("");
    setDTI("");
    setLTV("");
    setLiquidAssets("");
    setSSN("");
    setDob("");
    setSource("");
    setWorkingWithRetailor("");
    setReferalpartner("");
    setReferalSource("");
    setLanguage("");

    Navigate("/ecommerce/customers");
  };

  // const AddData = (e) => {
  //   e.preventDefault();
  //   dob = new Date(dob);
  //   const DataToSend = {
  //     firstName,
  //     lastName,
  //     mobilePhone,
  //     email,
  //     alternateEmail,
  //     contactMethod,
  //     creditScore,
  //     DTI,
  //     LTV,
  //     liquidAssets,
  //     SSN,
  //     dob,
  //     source,
  //     workingWithRetailor,
  //     referalpartner,
  //     referalSource,
  //     language,
  //   };
  //   console.log(firstName);
  //   console.log(DataToSend);
  //   axios
  //     .put(
  //       `https://infini8y.com/crm/public/api/update_leads/${location.state.id}`,
  //       DataToSend
  //     )
  //     .then(function (response) {
  //       console.log(response);
  //       setFirstName("");
  //       setLastName("");
  //       setMobilePhone("");
  //       setEmail("");
  //       setAlternateEmail("");
  //       setContactMethod("");
  //       setCreditScore("");
  //       setDTI("");
  //       setLTV("");
  //       setLiquidAssets("");
  //       setSSN("");
  //       setDob("");
  //       setSource("");
  //       setWorkingWithRetailor("");
  //       setReferalpartner("");
  //       setReferalSource("");
  //       setLanguage("");
  //       console.log(DataToSend);
  //       toast.success("Lead Updated Successfully", {
  //         position: "top-center",
  //       });
  //       console.log("Updated");
  //     })
  //     .catch(function (error) {
  //       console.log(DataToSend);
  //       toast("Something Went Wrong", {
  //         position: "top-center",
  //       });
  //       console.log(error);
  //     });
  // };

  const currencies = [
    {
      value: "MobilePhone",
      label: "Mobile Phone",
    },
    {
      value: "HomePhone",
      label: "Home Phone",
    },
    {
      value: "WorkPhone",
      label: "Work Phone",
    },
    {
      value: "Text",
      label: "Text",
    },
    {
      value: "email",
      label: "Email",
    },
  ];

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {/*  Site header */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main>
            <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
              <WelcomeBanner />
            </div>
            <Box
              className="border-solid border-2 rounded-md border-indigo-200 px-2 py-4 ml-2"
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <h1 className="ml-4 mb-3 font-medium">
                Update Borrower Information
              </h1>
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
                label="LastName"
                InputLabelProps={{
                  shrink: true,
                }}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <TextField
                id="outlined-password-input"
                label="Mobile Phone"
                InputLabelProps={{
                  shrink: true,
                }}
                value={mobilePhone}
                onChange={(e) => setMobilePhone(e.target.value)}
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
                label="Alternate Email"
                InputLabelProps={{
                  shrink: true,
                }}
                value={alternateEmail}
                onChange={(e) => setAlternateEmail(e.target.value)}
              />
              <TextField
                id="outlined-select-currency"
                select
                label="Best Contact Method"
                defaultValue="E"
                onChange={(e) => setContactMethod(e.target.value)}
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="outlined-password-input"
                label="Credit Score"
                InputLabelProps={{
                  shrink: true,
                }}
                value={creditScore}
                onChange={(e) => setCreditScore(e.target.value)}
              />
              <TextField
                id="outlined-password-input"
                label="DTI"
                InputLabelProps={{
                  shrink: true,
                }}
                value={DTI}
                onChange={(e) => setDTI(e.target.value)}
              />
              <TextField
                id="outlined-password-input"
                label="LTV"
                InputLabelProps={{
                  shrink: true,
                }}
                value={LTV}
                onChange={(e) => setLTV(e.target.value)}
              />
              <TextField
                id="outlined-password-input"
                label="Liquid Assets"
                InputLabelProps={{
                  shrink: true,
                }}
                value={liquidAssets}
                onChange={(e) => setLiquidAssets(e.target.value)}
              />
              <TextField
                id="outlined-password-input"
                label="SSN"
                InputLabelProps={{
                  shrink: true,
                }}
                value={SSN}
                onChange={(e) => setSSN(e.target.value)}
              />
              <TextField
                id="outlined-password-input"
                label="Date Of Birth"
                InputLabelProps={{
                  shrink: true,
                }}
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
              <TextField
                id="outlined-select-currency"
                select
                label="Source"
                defaultValue="E"
                onChange={(e) => {
                  setSource(e.target.value);
                  console.log(e.target.value);
                }}
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="outlined-select-currency"
                select
                label="Working With Realtor?"
                defaultValue="E"
                onChange={(e) => {
                  setWorkingWithRetailor(e.target.value);
                }}
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="outlined-password-input"
                label="Referral Partner"
                InputLabelProps={{
                  shrink: true,
                }}
                value={referalpartner}
                onChange={(e) => setReferalpartner(e.target.value)}
              />
              <TextField
                id="outlined-password-input"
                label="Referral Source"
                InputLabelProps={{
                  shrink: true,
                }}
                value={referalSource}
                onChange={(e) => setReferalSource(e.target.value)}
              />
              <FormGroup className="flex flex-row mt-2 ml-2">
                <FormControlLabel
                  control={<Checkbox />}
                  onClick={(e) => {
                    if (language.length === 0) {
                      language.push(e.target.name);
                    } else {
                      setLanguage([...language, e.target.name]);
                    }
                  }}
                  label="Spanish"
                  name="Spanish"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  onClick={(e) => {
                    if (language.length === 0) {
                      language.push(e.target.name);
                    } else {
                      setLanguage([...language, e.target.name]);
                    }
                  }}
                  label="Chinese"
                  name="Chinese"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  onClick={(e) => {
                    if (language.length === 0) {
                      language.push(e.target.name);
                    } else {
                      setLanguage([...language, e.target.name]);
                    }
                  }}
                  label="Others"
                  name="Others"
                />
              </FormGroup>
            </Box>
            <Button variant="contained" className="m-3 mt-3" onClick={AddData}>
              Submit
            </Button>
          </main>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Portal;
