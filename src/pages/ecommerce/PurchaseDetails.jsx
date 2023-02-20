import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const PurchaseDetails = (props) => {
  const [area, setArea] = useState("");
  const [purchase_price, setpurchase_price] = useState("");
  const [down_payment, setdown_payment] = useState("");
  const [time_frame, settime_frame] = useState("");

  // useEffect(() => {
  //   setArea("");
  //   setpurchase_price("");
  //   setdown_payment("");
  //   settime_frame("");
  //   // props.setClear(false);
  // }, [props.clear]);
  return (
    <>
      <div className="border-solid border-2 rounded-md border-indigo-200 py-3 mt-4">
        <h1 className="ml-4 font-medium">Purchase Details</h1>
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
            label="Area"
            InputLabelProps={{
              shrink: true,
            }}
            value={area}
            onChange={(e) => {
              setArea(e.target.value);
              // props.setCo({
              //   ...props.co,
              //   area: e.target.value,
              // });
            }}
          />
          <TextField
            id="outlined-password-input"
            label="Purchase Price"
            InputLabelProps={{
              shrink: true,
            }}
            value={purchase_price}
            onChange={(e) => {
              setpurchase_price(e.target.value);
              // props.setCo({ ...props.co, purchase_price: e.target.value });
            }}
          />
          <TextField
            id="outlined-password-input"
            label="Down Payment"
            InputLabelProps={{
              shrink: true,
            }}
            value={down_payment}
            onChange={(e) => {
              setdown_payment(e.target.value);
              // props.setCo({ ...props.co, down_payment: e.target.value });
            }}
          />
          <TextField
            id="outlined-select-currency"
            select
            label="Time Frame"
            defaultValue="E"
            onChange={(e) => {
              settime_frame(e.target.value);
              // props.setCo({ ...props.co, time_frame: e.target.value });
            }}
          >
            <MenuItem value="1Week">1Week</MenuItem>
            <MenuItem value="2-4Weeks">2-4 Weeks</MenuItem>
            <MenuItem value="30-60Days">30-60 Days</MenuItem>
            <MenuItem value="60-90Days">60-90 Days</MenuItem>
            <MenuItem value="3-6Months">3-6 Months</MenuItem>
            <MenuItem value="1+Year">1+ Year</MenuItem>
          </TextField>
          {/* <button
            onClick={(e) => {
              e.preventDefault();
              console.log("PurchaseDetails", props.co);
            }}
          >
            Check
          </button> */}
        </Box>
      </div>
    </>
  );
};

export default PurchaseDetails;
