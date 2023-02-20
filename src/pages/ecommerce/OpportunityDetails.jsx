import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const OpportunityDetails = (props) => {
  const [subject_property_address, setsubject_property_address] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setzip] = useState("");
  const [purpose, setPurpose] = useState("");
  const [goal, setgoal] = useState("");
  const [projected_loan_amount, setprojected_loan_amount] = useState("");
  const [compensation, setCompensation] = useState("");
  const [country, setCountry] = useState("");
  const [property_type, setproperty_type] = useState("");
  const [unit, setUnits] = useState("");
  const [appraisal_value, setappraisal_value] = useState("");
  const [target_rate, settarget_rate] = useState("");
  const [target_rate_type, settarget_rate_type] = useState("");
  const [intended_use, setintended_use] = useState("");
  const [occupancy, setoccupancy] = useState("");
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
  const [property_typeArray, setproperty_typeArray] = useState([
    "PUD",
    "SFH-Detached",
    "SFH-Attached",
    "TownHome",
    "Condo",
    "Condo-HighRise",
    "2-4Plex",
    "MFH-Single",
    "MFH-Double",
    "MFH-Multi",
    "SFR",
    "2-Unit",
    "3-Unit",
    "4-Unit",
  ]);
  // useEffect(() => {
  //   setsubject_property_address("");
  //   setCity("");
  //   setState("");
  //   setzip("");
  //   setPurpose("");
  //   setgoal("");
  //   setprojected_loan_amount("");
  //   setCompensation("");
  //   setCountry("");
  //   setproperty_type("");
  //   setUnits("");
  //   setappraisal_value("");
  //   settarget_rate("");
  //   settarget_rate_type("");
  //   setintended_use("");
  //   setoccupancy("");
  //   // props.setClear(false);
  // }, [props.clear]);
  return (
    <>
      <div className="border-solid border-2 rounded-md border-indigo-200 py-3 mt-4">
        <h1 className="ml-4 font-medium">Opportunity Details</h1>
        <Box
          className="ml-2 mt-3"
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-password-input"
            label="Subject Property Address"
            InputLabelProps={{
              shrink: true,
            }}
            value={subject_property_address}
            onChange={(e) => {
              setsubject_property_address(e.target.value);
              // props.setCo({
              //   ...props.co,
              //   subject_property_address: e.target.value,
              // });
            }}
          />
          <TextField
            id="outlined-password-input"
            label="City/Municipality"
            InputLabelProps={{
              shrink: true,
            }}
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
              // props.setCo({ ...props.co, city: e.target.value });
            }}
          />
          <TextField
            id="outlined-select-currency"
            select
            label="State/Province"
            defaultValue="E"
            onChange={(e) => {
              setState(e.target.value);
              // props.setCo({ ...props.co, state: e.target.value });
            }}
          >
            {StateData.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-password-input"
            label="Zip/PostalCode"
            InputLabelProps={{
              shrink: true,
            }}
            value={zip}
            onChange={(e) => {
              setzip(e.target.value);
              // props.setCo({ ...props.co, zip: e.target.value });
            }}
          />
          <TextField
            id="outlined-select-currency"
            select
            label="Purpose"
            defaultValue="E"
            onChange={(e) => {
              setPurpose(e.target.value);
              // props.setCo({ ...props.co, purpose: e.target.value });
            }}
          >
            <MenuItem value="Refinance">Refinance</MenuItem>
            <MenuItem value="Purchase">Purchase</MenuItem>
            <MenuItem value="CashOutRefinance">Cash Out Refinance</MenuItem>
          </TextField>
          <TextField
            id="outlined-password-input"
            label="Est. Goals&goal"
            InputLabelProps={{
              shrink: true,
            }}
            value={goal}
            onChange={(e) => {
              setgoal(e.target.value);
              // props.setCo({ ...props.co, goal: e.target.value });
            }}
          />
          <TextField
            id="outlined-password-input"
            label="Projected Loan Amount"
            placeholder="$"
            InputLabelProps={{
              shrink: true,
            }}
            value={projected_loan_amount}
            onChange={(e) => {
              setprojected_loan_amount(e.target.value);
              // props.setCo({
              //   ...props.co,
              //   projected_loan_amount: e.target.value,
              // });
            }}
          />
          <TextField
            id="outlined-password-input"
            label="Est. Compensation"
            placeholder="$"
            InputLabelProps={{
              shrink: true,
            }}
            value={compensation}
            onChange={(e) => {
              setCompensation(e.target.value);
              // props.setCo({ ...props.co, compensation: e.target.value });
            }}
          />
          <TextField
            id="outlined-password-input"
            label="Country"
            InputLabelProps={{
              shrink: true,
            }}
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
              // props.setCo({ ...props.co, country: e.target.value });
            }}
          />
          <TextField
            id="outlined-select-currency"
            select
            label="Property Type"
            defaultValue="E"
            onChange={(e) => {
              setproperty_type(e.target.value);
              // props.setCo({ ...props.co, property_type: e.target.value });
            }}
          >
            {property_typeArray.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-password-input"
            label="NoOfUnits"
            placeholder="1"
            InputLabelProps={{
              shrink: true,
            }}
            value={unit}
            onChange={(e) => {
              setUnits(e.target.value);
              // props.setCo({ ...props.co, uint: e.target.value });
            }}
          />
          <TextField
            id="outlined-password-input"
            label="Estimated Appraisal Value"
            placeholder="$"
            InputLabelProps={{
              shrink: true,
            }}
            value={appraisal_value}
            onChange={(e) => {
              setappraisal_value(e.target.value);
              // props.setCo({ ...props.co, appraisal_value: e.target.value });
            }}
          />
          <TextField
            id="outlined-password-input"
            label="Target Rate"
            placeholder="0%"
            InputLabelProps={{
              shrink: true,
            }}
            value={target_rate}
            onChange={(e) => {
              settarget_rate(e.target.value);
              // props.setCo({ ...props.co, target_rate: e.target.value });
            }}
          />
          <TextField
            id="outlined-password-input"
            label="Target Rate Type"
            InputLabelProps={{
              shrink: true,
            }}
            value={target_rate_type}
            onChange={(e) => {
              settarget_rate_type(e.target.value);
              // props.setCo({ ...props.co, target_rate_type: e.target.value });
            }}
          />
          <TextField
            id="outlined-select-currency"
            select
            label="Intended Use"
            defaultValue="E"
            onChange={(e) => {
              setintended_use(e.target.value);
              // props.setCo({ ...props.co, intended_use: e.target.value });
            }}
          >
            <MenuItem value="PrimaryResidence">Primary Residence</MenuItem>
            <MenuItem value="SecondHome">Second Home</MenuItem>
            <MenuItem value="InvestmentProperty">Investment Property</MenuItem>
          </TextField>
          <TextField
            id="outlined-select-currency"
            select
            label="Occupancy"
            defaultValue="E"
            onChange={(e) => {
              setoccupancy(e.target.value);
              // props.setCo({ ...props.co, occupancy: e.target.value });
            }}
          >
            <MenuItem value="PrimaryResidence">Primary</MenuItem>
            <MenuItem value="SecondHome">Second Home</MenuItem>
            <MenuItem value="InvestmentProperty">Investment</MenuItem>
            <MenuItem value="InvestmentProperty">Other</MenuItem>
          </TextField>
          {/* <button
            onClick={(e) => {
              e.preventDefault();
              console.log("OpportunityDetails", props.co);
            }}
          >
            Check
          </button> */}
        </Box>
      </div>
    </>
  );
};

export default OpportunityDetails;
