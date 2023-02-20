import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const RefinanceDetails = (props) => {
  const [current_mortgage_program, setcurrent_mortgage_program] = useState("");
  const [loan_date, setloan_date] = useState("");
  const [original_loan_balance, setoriginal_loan_balance] = useState("");
  const [current_loan_balance, setcurrent_loan_balance] = useState("");
  const [current_payoff, setcurrent_payoff] = useState("");
  const [original_purchase_price, setoriginal_purchase_price] = useState("");
  const [original_purchase_date, setoriginal_purchase_date] = useState("");
  const [mortgage_status, setmortgage_status] = useState("");
  const [current_interest_rate, setcurrent_interest_rate] = useState("");
  const [current_rate_type, setcurrent_rate_type] = useState("");
  const [current_monthly_payment, setcurrent_monthly_payment] = useState("");
  const [proposed_payment, setproposed_payment] = useState("");
  const [money_saved, setmoney_saved] = useState("");
  const [borrower_oppinion_value, setborrower_oppinion_value] = useState("");
  const [cash_out_amount, setcash_out_amount] = useState("");
  const [refi_purpose, setrefi_purpose] = useState("");

  // useEffect(() => {
  //   setcurrent_mortgage_program("");
  //   setloan_date("");
  //   setoriginal_loan_balance("");
  //   setcurrent_payoff("");
  //   setoriginal_purchase_price("");
  //   setoriginal_purchase_date("");
  //   setmortgage_status("");
  //   setcurrent_interest_rate("");
  //   setcurrent_rate_type("");
  //   setcurrent_monthly_payment("");
  //   setproposed_payment("");
  //   setmoney_saved("");
  //   setborrower_oppinion_value("");
  //   setcash_out_amount("");
  //   setrefi_purpose("");
  //   // props.setClear(false);
  // }, [props.clear]);
  return (
    <>
      <div className="border-solid border-2 rounded-md border-indigo-200 py-3 mt-4">
        <h1 className="ml-4 font-medium">Refinance Details</h1>
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
            label="Current Mortgage Program"
            InputLabelProps={{
              shrink: true,
            }}
            value={current_mortgage_program}
            onChange={(e) => {
              setcurrent_mortgage_program(e.target.value);
              // props.setCo({
              //   ...props.co,
              //   current_mortgage_program: e.target.value,
              // });
            }}
          />
          <TextField
            id="outlined-password-input"
            label="Loan Date"
            InputLabelProps={{
              shrink: true,
            }}
            value={loan_date}
            onChange={(e) => {
              setloan_date(e.target.value);
              // props.setCo({ ...props.co, loan_date: e.target.value });
            }}
          />
          <TextField
            id="outlined-password-input"
            label="Original Loan Balance"
            InputLabelProps={{
              shrink: true,
            }}
            value={original_loan_balance}
            onChange={(e) => {
              setoriginal_loan_balance(e.target.value);
              // props.setCo({
              //   ...props.co,
              //   original_loan_balance: e.target.value,
              // });
            }}
          />
          <TextField
            id="outlined-password-input"
            label="Current Loan Balance"
            InputLabelProps={{
              shrink: true,
            }}
            value={current_loan_balance}
            onChange={(e) => {
              setcurrent_loan_balance(e.target.value);
              // props.setCo({
              //   ...props.co,
              //   current_loan_balance: e.target.value,
              // });
            }}
          />
          <TextField
            id="outlined-password-input"
            label="Current Payoff"
            // placeholder="yyyy-mm-dd"
            InputLabelProps={{
              shrink: true,
            }}
            value={current_payoff}
            onChange={(e) => {
              setcurrent_payoff(e.target.value);
              // props.setCo({
              //   ...props.co,
              //   current_current_payoff: e.target.value,
              // });
            }}
          />
          <TextField
            id="outlined-password-input"
            label="Original Purchase Price"
            InputLabelProps={{
              shrink: true,
            }}
            value={original_purchase_price}
            onChange={(e) => {
              setoriginal_purchase_price(e.target.value);
              // props.setCo({
              //   ...props.co,
              //   original_purchase_price: e.target.value,
              // });
            }}
          />
          <TextField
            id="outlined-password-input"
            label="Original Purchase Date"
            InputLabelProps={{
              shrink: true,
            }}
            value={original_purchase_date}
            onChange={(e) => {
              setoriginal_purchase_date(e.target.value);
              // props.setCo({
              //   ...props.co,
              //   original_purchase_date: e.target.value,
              // });
            }}
          />
          <TextField
            id="outlined-select-currency"
            select
            label="Mortgage Status"
            defaultValue="E"
            onChange={(e) => {
              setmortgage_status(e.target.value);
              // props.setCo({ ...props.co, mortgage_status: e.target.value });
            }}
          >
            <MenuItem value="Current">Current</MenuItem>
            <MenuItem value="NotCurrent">Not Current</MenuItem>
            <MenuItem value="Matured">Matured</MenuItem>
            <MenuItem value="MaturityDefault">Maturity Default</MenuItem>
            <MenuItem value="PaymentDefault">Payment Default</MenuItem>
            <MenuItem value="ForeCloser">Forecloser</MenuItem>
            <MenuItem value="ForeBearance">Forebearance</MenuItem>
          </TextField>
          <TextField
            id="outlined-password-input"
            label="Current Interest Rate"
            placeholder="$"
            InputLabelProps={{
              shrink: true,
            }}
            value={current_interest_rate}
            onChange={(e) => {
              setcurrent_interest_rate(e.target.value);
              // props.setCo({
              //   ...props.co,
              //   current_interest_rate: e.target.value,
              // });
            }}
          />
          <TextField
            id="outlined-select-currency"
            select
            label="Current Rate Type"
            defaultValue="E"
            onChange={(e) => {
              setcurrent_rate_type(e.target.value);
              // props.setCo({ ...props.co, current_rate_type: e.target.value });
            }}
          >
            <MenuItem value="Fixed">Fixed</MenuItem>
            <MenuItem value="Adjustable">Adjustable</MenuItem>
            <MenuItem value="Variable">Variable</MenuItem>
          </TextField>
          <TextField
            id="outlined-password-input"
            label="Current Monthly Payment"
            placeholder="$"
            InputLabelProps={{
              shrink: true,
            }}
            value={current_monthly_payment}
            onChange={(e) => {
              setcurrent_monthly_payment(e.target.value);
              // props.setCo({
              //   ...props.co,
              //   current_monthly_payment: e.target.value,
              // });
            }}
          />
          <TextField
            id="outlined-password-input"
            label="Propsed Payment"
            InputLabelProps={{
              shrink: true,
            }}
            value={proposed_payment}
            onChange={(e) => {
              setproposed_payment(e.target.value);
              // props.setCo({ ...props.co, proposed_payment: e.target.value });
            }}
          />
          <TextField
            id="outlined-password-input"
            label="Money Saved"
            InputLabelProps={{
              shrink: true,
            }}
            value={money_saved}
            onChange={(e) => {
              setmoney_saved(e.target.value);
              // props.setCo({ ...props.co, money_saved: e.target.value });
            }}
          />
          <TextField
            id="outlined-password-input"
            label="Borrower Opinion Value"
            InputLabelProps={{
              shrink: true,
            }}
            value={borrower_oppinion_value}
            onChange={(e) => {
              setborrower_oppinion_value(e.target.value);
              // props.setCo({
              //   ...props.co,
              //   borrower_oppinion_value: e.target.value,
              // });
            }}
          />
          <TextField
            id="outlined-password-input"
            label="Cash Out Amount"
            InputLabelProps={{
              shrink: true,
            }}
            value={cash_out_amount}
            onChange={(e) => {
              setcash_out_amount(e.target.value);
              // props.setCo({
              //   ...props.co,
              //   cash_out_amount: e.target.value,
              // });
            }}
          />
          <TextField
            id="outlined-password-input"
            label="Refi Purpose"
            InputLabelProps={{
              shrink: true,
            }}
            value={refi_purpose}
            onChange={(e) => {
              setrefi_purpose(e.target.value);
              // props.setCo({
              //   ...props.co,
              //   refi_purpose: e.target.value,
              // });
            }}
          />
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

export default RefinanceDetails;
