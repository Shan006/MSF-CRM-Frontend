import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const QualificationQuestions = (props) => {
  const [bankruptcy, setbankruptcy] = useState("");
  const [foreclosure, setforeclosure] = useState("");
  const [short_sale, setshort_sale] = useState("");
  const [late_payments, setlate_payments] = useState("");
  const [first_time_homebuyer, setfirst_time_homebuyer] = useState("");
  const [FHA_loan, setFHA_loan] = useState("");
  const [veteran, setveteran] = useState("");
  const [VA_disability, setVA_disability] = useState("");

  // useEffect(() => {
  //   setbankruptcy("");
  //   setforeclosure("");
  //   setshort_sale("");
  //   setlate_payments("");
  //   setfirst_time_homebuyer("");
  //   setFHA_loan("");
  //   setveteran("");
  //   setVA_disability("");
  //   // props.setClear(false);
  // }, [props.clear]);
  return (
    <>
      <div className="border-solid border-2 rounded-md border-indigo-200 py-3 mt-4">
        <h1 className="ml-4 font-medium">Qualifying Questions</h1>
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
            id="bankruptcy"
            select
            label="Mortgage Status"
            defaultValue="E"
            onChange={(e) => {
              setbankruptcy(e.target.value);
              // props.setCo({ ...props.co, bankruptcy: e.target.value });
            }}
          >
            <MenuItem value="Yes">Yes</MenuItem>
            <MenuItem value="No">No</MenuItem>
          </TextField>
          <TextField
            id="outlined-select-currency"
            select
            label="Foreclosure"
            defaultValue="E"
            onChange={(e) => {
              setforeclosure(e.target.value);
              // props.setCo({ ...props.co, foreclosure: e.target.value });
            }}
          >
            <MenuItem value="Yes">Yes</MenuItem>
            <MenuItem value="No">No</MenuItem>
          </TextField>
          <TextField
            id="outlined-select-currency"
            select
            label="Short Sale"
            defaultValue="E"
            onChange={(e) => {
              setshort_sale(e.target.value);
              // props.setCo({ ...props.co, short_sale: e.target.value });
            }}
          >
            <MenuItem value="Yes">Yes</MenuItem>
            <MenuItem value="No">No</MenuItem>
          </TextField>
          <TextField
            id="outlined-select-currency"
            select
            label="Late Payments"
            defaultValue="E"
            onChange={(e) => {
              setlate_payments(e.target.value);
              // props.setCo({ ...props.co, late_payments: e.target.value });
            }}
          >
            <MenuItem value="Yes">Yes</MenuItem>
            <MenuItem value="No">No</MenuItem>
          </TextField>
          <TextField
            id="outlined-select-currency"
            select
            label="First Time Homebuyer?"
            defaultValue="E"
            onChange={(e) => {
              setfirst_time_homebuyer(e.target.value);
              // props.setCo({
              //   ...props.co,
              //   first_time_homebuyer: e.target.value,
              // });
            }}
          >
            <MenuItem value="Yes">Yes</MenuItem>
            <MenuItem value="No">No</MenuItem>
          </TextField>
          <TextField
            id="outlined-select-currency"
            select
            label="FHA Loan"
            defaultValue="E"
            onChange={(e) => {
              setFHA_loan(e.target.value);
              // props.setCo({ ...props.co, FHA_loan: e.target.value });
            }}
          >
            <MenuItem value="Yes">Yes</MenuItem>
            <MenuItem value="No">No</MenuItem>
          </TextField>
          <TextField
            id="outlined-select-currency"
            select
            label="Veteran"
            defaultValue="E"
            onChange={(e) => {
              setveteran(e.target.value);
              // props.setCo({ ...props.co, veteran: e.target.value });
            }}
          >
            <MenuItem value="Yes">Yes</MenuItem>
            <MenuItem value="No">No</MenuItem>
          </TextField>
          <TextField
            id="outlined-select-currency"
            select
            label="VA Disability"
            defaultValue="E"
            onChange={(e) => {
              setVA_disability(e.target.value);
              // props.setCo({ ...props.co, VA_disability: e.target.value });
            }}
          >
            <MenuItem value="Yes">Yes</MenuItem>
            <MenuItem value="No">No</MenuItem>
          </TextField>
          {/* <button
            onClick={(e) => {
              e.preventDefault();
              console.log("RefinanceDetails", props.co);
            }}
          >
            Check
          </button> */}
        </Box>
      </div>
    </>
  );
};

export default QualificationQuestions;
