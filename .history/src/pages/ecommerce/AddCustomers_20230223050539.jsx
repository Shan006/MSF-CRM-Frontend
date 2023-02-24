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
import OpportunityDetails from "./OpportunityDetails";
import RefinanceDetails from "./RefinanceDetails";
import PurchaseDetails from "./PurchaseDetails";
import QualificationQuestions from "./QualifyingQuestions";
import LeadDetails from "./LeadNotes";
import ExtendedPropertyInfo from "./ExtendedPropertyInfo";

const AddCustomers = () => {
  const { setObject } = useContext(LeadContext);
  const [coBorrower, setCoBorrower] = useState([]);
  const [contact, setContact] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [firstname, setFirstName] = useState();
  const [lastname, setLastName] = useState();
  const [phone, setphone] = useState();
  const [email, setEmail] = useState();
  const [alternate_email, setalternate_email] = useState();
  const [contact_type, setcontact_type] = useState();
  const [credit_score, setcredit_score] = useState();
  const [DTI, setDTI] = useState();
  const [LTV, setLTV] = useState();
  const [liquid_assets, setliquid_assets] = useState();
  const [SSN, setSSN] = useState();
  let [DOB, setDOB] = useState();
  const [source, setSource] = useState();
  const [with_relator, setwith_relator] = useState();
  const [referral, setreferral] = useState();
  const [referral_source, setreferral_source] = useState();
  const [language_preference, setlanguage_preference] = useState([]);
  const [coBorrowerData, setCoBorrowerData] = useState([]);
  const [contactData, setContactData] = useState([]);
  const [clearFields, setClearFields] = useState(false);
  const [status, setStatus] = useState();
  // const [obj, setObj] = useState({
  //   firstname: "",
  //   lastname: "",
  //   email: "",
  //   phone: "",
  //   DOB: "",
  //   credit_score: "",
  //   contact_type: "",
  //   relationship: "",
  // });
  // const [contactObj, setContactObj] = useState({
  //   firstname: "",
  //   lastname: "",
  //   email: "",
  //   phone: "",
  //   alternate_phone: "",
  //   decision_maker: "",
  //   contact_type: "",
  //   relationship: "",
  // });
  // const [opportunityObj, setOpportunityObj] = useState({
  //   subject_property_address: "",
  //   city: "",
  //   state: "",
  //   zip: "",
  //   purpose: "",
  //   goal: "",
  //   projected_loan_amount: "",
  //   compensation: "",
  //   country: "",
  //   property_type: "",
  //   unit: "",
  //   appraisal_value: "",
  //   target_rate: "",
  //   target_rate_type: "",
  //   intended_use: "",
  //   occupancy: "",
  // });
  // const [refinanceObj, setRefinanceObj] = useState({
  //   current_mortgage_program: "",
  //   loan_date: "",
  //   original_loan_balance: "",
  //   current_loan_balance: "",
  //   current_payoff: "",
  //   original_purchase_price: "",
  //   original_purchase_date: "",
  //   mortgage_status: "",
  //   current_interest_rate: "",
  //   current_rate_type: "",
  //   current_monthly_payment: "",
  //   proposed_payment: "",
  //   money_saved: "",
  //   borrower_oppinion_value: "",
  //   cash_out_amount: "",
  //   refi_purpose: "",
  // });
  // const [purchaseObj, setPurchaseObj] = useState({
  //   area: "",
  //   purchase_price: "",
  //   down_payment: "",
  //   time_frame: "",
  // });
  // const [qualificationQuestionsobj, setQualificationQuestionsObj] = useState({
  //   bankruptcy: "",
  //   foreclosure: "",
  //   short_sale: "",
  //   late_payments: "",
  //   first_time_homebuyer: "",
  //   FHA_loan: "",
  //   veteran: "",
  //   VA_disability: "",
  // });
  // const [propertyInfoobj, setPropertyInfoObj] = useState({
  //   bankruptcy: "",
  //   foreclosure: "",
  //   short_sale: "",
  //   late_payments: "",
  //   first_time_homebuyer: "",
  //   FHA_loan: "",
  //   veteran: "",
  //   VA_disability: "",
  // });

  const Navigate = useNavigate();

  const addCoBorrower = () => {
    setCoBorrower([...coBorrower, "Co-Borrower Component"]);
  };
  const addContact = () => {
    setContact([...contact, "Contact Component"]);
  };

  // const AddData = () => {
  //   setStatus("NewLead");
  //   const d = new Date();
  //   let id = d.getTime();
  //   const data = {
  //     id: id,
  //     firstname: firstname,
  //     lastname: lastname,
  //     email: email,
  //     phone: phone,
  //     source: source,
  //   };

  //   setObject({
  //     id: data.id,
  //     firstname: data.firstname,
  //     lastname: data.lastname,
  //     email: data.email,
  //     phone: data.phone,
  //     source: data.source,
  //   });

  //   setFirstName("");
  //   setLastName("");
  //   setphone("");
  //   setEmail("");
  //   setalternate_email("");
  //   setcontact_type("");
  //   setcredit_score("");
  //   setDTI("");
  //   setLTV("");
  //   setliquid_assets("");
  //   setSSN("");
  //   setDOB("");
  //   setSource("");
  //   setwith_relator("");
  //   setreferral("");
  //   setreferral_source("");
  //   setlanguage_preference("");
  //   setClearFields(true);

  //   Navigate("/ecommerce/customers");
  // };

  const AddData = (e) => {
    e.preventDefault();
    let lead = {
      firstname,
      lastname,
      phone,
      email,
      // alternate_email,
      // contact_type,
      // credit_score,
      // DTI,
      // LTV,
      // liquid_assets,
      // SSN,
      // DOB,
      // source,
      // with_relator,
      // referral,
      // referral_source,
      // language_preference,
    };
    DOB = new Date(DOB);
    const DataToSend = {
      leads: lead,
      // coborrows: obj,
      // contacts: contactObj,
    };

    if ((firstname === "", lastname === "", phone === "", email === "")) {
      toast("Please Fill The Required Fields", {
        position: "top-center",
      });
    }
    axios
      .post("https://infini8y.com/crm/public/api/store_leads", DataToSend)
      .then(function (response) {
        console.log(response);
        setFirstName("");
        setLastName("");
        setphone("");
        setEmail("");
        setalternate_email("");
        setcontact_type("");
        setcredit_score("");
        setDTI("");
        setLTV("");
        setliquid_assets("");
        setSSN("");
        setDOB("");
        setSource("");
        setwith_relator("");
        setreferral("");
        setreferral_source("");
        setlanguage_preference("");
        setClearFields(true);
        toast.success("Lead Added Successfully", {
          position: "top-center",
        });
        console.log("Added");
        console.log(DataToSend);
      })
      .catch(function (error) {
        console.log(DataToSend);
        toast("Something Went Wrong", {
          position: "top-center",
        });
        console.log(error);
      });
  };

  const currencies = [
    {
      value: "phone",
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
                label="firstname"
                InputLabelProps={{
                  shrink: true,
                }}
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <TextField
                id="outlined-password-input"
                label="lastname"
                InputLabelProps={{
                  shrink: true,
                }}
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
              />
              <TextField
                id="outlined-password-input"
                label="Mobile Phone"
                InputLabelProps={{
                  shrink: true,
                }}
                value={phone}
                onChange={(e) => setphone(e.target.value)}
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
                value={alternate_email}
                onChange={(e) => setalternate_email(e.target.value)}
              />
              <TextField
                id="outlined-select-currency"
                select
                label="Best Contact Method"
                defaultValue="E"
                onChange={(e) => setcontact_type(e.target.value)}
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
                value={credit_score}
                onChange={(e) => setcredit_score(e.target.value)}
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
                value={liquid_assets}
                onChange={(e) => setliquid_assets(e.target.value)}
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
                value={DOB}
                onChange={(e) => setDOB(e.target.value)}
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
                  setwith_relator(e.target.value);
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
                value={referral}
                onChange={(e) => setreferral(e.target.value)}
              />
              <TextField
                id="outlined-password-input"
                label="Referral Source"
                InputLabelProps={{
                  shrink: true,
                }}
                value={referral_source}
                onChange={(e) => setreferral_source(e.target.value)}
              />
              <FormGroup className="flex flex-row mt-2 ml-2">
                <FormControlLabel
                  control={<Checkbox />}
                  onClick={(e) => {
                    if (language_preference.length === 0) {
                      language_preference.push(e.target.name);
                    } else {
                      setlanguage_preference([
                        ...language_preference,
                        e.target.name,
                      ]);
                    }
                  }}
                  label="Spanish"
                  name="Spanish"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  onClick={(e) => {
                    if (language_preference.length === 0) {
                      language_preference.push(e.target.name);
                    } else {
                      setlanguage_preference([
                        ...language_preference,
                        e.target.name,
                      ]);
                    }
                  }}
                  label="Chinese"
                  name="Chinese"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  onClick={(e) => {
                    if (language_preference.length === 0) {
                      language_preference.push(e.target.name);
                    } else {
                      setlanguage_preference([
                        ...language_preference,
                        e.target.name,
                      ]);
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
              // d={coBorrowerData}
              // setD={setCoBorrowerData}
              // co={obj}
              // setCo={setObj}
              // clear={clearFields}
              // setClear={setClearFields}
              />
              {coBorrower.map(() => (
                <AddCoBorrower
                // d={coBorrowerData}
                // setD={setCoBorrowerData}
                // co={obj}
                // setCo={setObj}
                // clear={clearFields}
                // setClear={setClearFields}
                />
              ))}
            </div>
            <div className="ml-4 mb-4 mt-4">
              <AddContact
              // d={contactData}
              // setD={setContactData}
              // co={contactObj}
              // setCo={setContactObj}
              // clear={clearFields}
              // setClear={setClearFields}
              />
              {contact.map(() => (
                <AddContact
                // d={contactData}
                // setD={setContactData}
                // co={contactObj}
                // setCo={setContactObj}
                // clear={clearFields}
                // setClear={setClearFields}
                />
              ))}
            </div>
            <div className="ml-4 mb-4 mt-4">
              <OpportunityDetails
              // co={opportunityObj}
              // setCo={setOpportunityObj}
              // clear={clearFields}
              // setClear={setClearFields}
              />
            </div>
            <div className="ml-4 mb-4 mt-4">
              <RefinanceDetails
              // co={refinanceObj}
              // setCo={setRefinanceObj}
              // clear={clearFields}
              // setClear={setClearFields}
              />
            </div>
            <div className="ml-4 mb-4 mt-4">
              <PurchaseDetails
              // co={purchaseObj}
              // setCo={setPurchaseObj}
              // clear={clearFields}
              // setClear={setClearFields}
              />
            </div>
            <div className="ml-4 mb-4 mt-4">
              <QualificationQuestions
              // co={purchaseObj}
              // setCo={setPurchaseObj}
              // clear={clearFields}
              // setClear={setClearFields}
              />
            </div>
            <div className="ml-4 mb-4 mt-4">
              <ExtendedPropertyInfo
              // co={purchaseObj}
              // setCo={setPurchaseObj}
              // clear={clearFields}
              // setClear={setClearFields}
              />
            </div>
            <div className="ml-4 mb-4 mt-4">
              <LeadDetails
              // co={purchaseObj}
              // setCo={setPurchaseObj}
              // clear={clearFields}
              // setClear={setClearFields}
              />
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
