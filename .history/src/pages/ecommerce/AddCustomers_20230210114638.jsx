import React, { useState, useContext } from "react";
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
import AddCoBorrower from "./AddCoBorrower";
import AddContact from "./AddContact";
import { useNavigate } from "react-router-dom";
import { LeadContext } from "../../context/LeadContext";

const AddCustomers = () => {
  const { setObject } = useContext(LeadContext);
  const [coBorrower, setCoBorrower] = useState([]);
  const [contact, setContact] = useState([]);
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
  const [coBorrowerData, setCoBorrowerData] = useState([]);
  const [contactData, setContactData] = useState([]);
  const [clearFields, setClearFields] = useState(false);
  const [status, setStatus] = useState();
  const [obj, setObj] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobilePhone: "",
    dob: "",
    creditScore: "",
    bestContactMethod: "",
    relationToBorrower: "",
  });
  const [contactObj, setContactObj] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobilePhone: "",
    alternatePhone: "",
    decisionMaker: "",
    bestContactMethod: "",
    relationToBorrower: "",
  });

  const Navigate = useNavigate();

  const addCoBorrower = () => {
    setCoBorrower([...coBorrower, "Co-Borrower Component"]);
  };
  const addContact = () => {
    setContact([...contact, "Contact Component"]);
  };

  // const AddData = (e) => {
  //   e.preventDefault();
  //   coBorrowerData.push(obj);
  //   contactData.push(contactObj);
  //   dob = new Date(dob);
  //   const formData = new FormData();
  //   formData.append("firstName", firstName);
  //   formData.append("lastName", lastName);
  //   formData.append("mobilePhone", mobilePhone);
  //   formData.append("email", email);
  //   formData.append("alternateEmail", alternateEmail);
  //   formData.append("contactMethod", contactMethod);
  //   formData.append("creditScore", creditScore);
  //   formData.append("DTI", DTI);
  //   formData.append("LTV", LTV);
  //   formData.append("liquidAssets", liquidAssets);
  //   formData.append("SSN", SSN);
  //   formData.append("dob", dob);
  //   formData.append("source", source);
  //   formData.append("workingWithRetailor", workingWithRetailor);
  //   formData.append("referalpartner", referalpartner);
  //   formData.append("referalSource", referalSource);
  //   formData.append("language", language);
  //   formData.append("coborrows", coBorrowerData);
  //   formData.append("contacts", contactData);

  //   axios
  //     .post("https://infini8y.com/crm/public/api/store_leads", formData)
  //     .then((response) => {
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
  //       setClearFields(true);
  //       toast.success("Lead Added Successfully", {
  //         position: "top-center",
  //       });
  //       console.log("Added");
  //       console.log(formData);
  //     })
  //     .catch((error) => {
  //       console.log(formData);
  //       toast("Something Went Wrong", {
  //         position: "top-center",
  //       });
  //       console.log(error);
  //     });
  // };

  const AddData = () => {
    setStatus("NewLead");
    const d = new Date();
    let id = d.getTime();
    const data = {
      id: id,
      firstName: firstName,
      lastName: lastName,
      email: email,
      mobilePhone: mobilePhone,
      source: source,
    };

    setObject({
      id: data.id,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      mobilePhone: data.mobilePhone,
      source: data.source,
    });

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
    setClearFields(true);

    Navigate("/ecommerce/customers");
  };

  // const AddData = (e) => {
  //   e.preventDefault();
  //   coBorrowerData.push(obj);
  //   contactData.push(contactObj);
  //   let lead = {
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
  //   dob = new Date(dob);
  //   const DataToSend = {
  //     leads: lead,
  //     coborrows: obj,
  //     contacts: contactObj,
  //   };

  //   axios
  //     .post("https://infini8y.com/crm/public/api/store_leads", DataToSend)
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
  //       setClearFields(true);
  //       toast.success("Lead Added Successfully", {
  //         position: "top-center",
  //       });
  //       console.log("Added");
  //       console.log(DataToSend);
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
              <h1 className="ml-4 mb-3 font-medium">Borrower Information</h1>
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
                placeholder="yyyy-mm-dd"
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
              <Button
                variant="outlined"
                className="mt-3"
                onClick={addCoBorrower}
              >
                Add Co-Borrower
              </Button>
              <Button variant="outlined" className="mt-3" onClick={addContact}>
                Add Contact
              </Button>
            </Box>
            <div className="ml-4 mb-4 mt-4">
              <AddCoBorrower
                d={coBorrowerData}
                setD={setCoBorrowerData}
                co={obj}
                setCo={setObj}
                clear={clearFields}
                setClear={setClearFields}
              />
              {coBorrower.map(() => (
                <AddCoBorrower
                  d={coBorrowerData}
                  setD={setCoBorrowerData}
                  co={obj}
                  setCo={setObj}
                  clear={clearFields}
                  setClear={setClearFields}
                />
              ))}
            </div>
            <div className="ml-4 mb-4 mt-4">
              <AddContact
                d={contactData}
                setD={setContactData}
                co={contactObj}
                setCo={setContactObj}
                clear={clearFields}
                setClear={setClearFields}
              />
              {contact.map(() => (
                <AddContact
                  d={contactData}
                  setD={setContactData}
                  co={contactObj}
                  setCo={setContactObj}
                  clear={clearFields}
                  setClear={setClearFields}
                />
              ))}
            </div>
            <Button variant="contained" className="m-3 mt-0" onClick={AddData}>
              Submit
            </Button>
          </main>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default AddCustomers;
