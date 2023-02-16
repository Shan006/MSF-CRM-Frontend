import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const AddContact = (props) => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [mobilePhone, setMobilePhone] = useState();
  const [email, setEmail] = useState();
  const [bestContactMethod, setBestContactMethod] = useState();
  const [alternatePhone, setAlternatePhone] = useState();
  const [decisionMaker, setDecisionMaker] = useState();
  const [relationToBorrower, setRelationToBorrower] = useState();
  const [count, setCount] = useState(0);
  const [Checker, setChecker] = useState({
    Checkfname: false,
    Checklname: false,
    Checkmobile: false,
    Checkemail: false,
    Checkcontact: false,
    CheckalternatePhone: false,
    CheckdecisionMaker: false,
    Checkrelation: false,
  });

  useEffect(() => {
    setFirstName("");
    setLastName("");
    setMobilePhone("");
    setEmail("");
    setBestContactMethod("");
    setAlternatePhone("");
    setDecisionMaker("");
    setRelationToBorrower("");
    props.setClear(false);
  }, [props.clear]);

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
      <div className="border-solid border-2 rounded-md border-indigo-200 py-3 mt-4">
        <h1 className="ml-4 font-medium">Contact Information</h1>
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
            label="FirstName"
            InputLabelProps={{
              shrink: true,
            }}
            // onMouseLeave={(e) => {
            //   if (count == 8) {
            //     if (props.d.length == 0) {
            //       props.d.push(props.co);
            //       console.log("Length 0", props.d);
            //       console.log(props.co);
            //       setCount(0);
            //       console.log(count);
            //     } else {
            //       props.setD([...props.d, props.co]);
            //       console.log(props.d);
            //       console.log(props.co);
            //       setCount(0);
            //     }
            //     return 0;
            //   } else if (count == 0) {
            //     props.d.pop();
            //     props.setCo({ ...props.co, firstName: e.target.value });
            //     props.setD([...props.d, props.co]);
            //     console.log(firstName);
            //     return 0;
            //   } else {
            //     return null;
            //   }
            // }}
            onClick={(e) => {
              if (Checker.Checkfname == false) {
                setCount(count + 1);
                setChecker({ ...Checker, Checkfname: true });
              } else {
                setCount(count);
              }
            }}
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
              props.setCo({ ...props.co, firstname: e.target.value });
              console.log(count);
            }}
          />
          <TextField
            id="outlined-password-input"
            label="LastName"
            InputLabelProps={{
              shrink: true,
            }}
            // onMouseLeave={(e) => {
            //   if (count == 8) {
            //     if (props.d.length == 0) {
            //       props.d.push(props.co);
            //       console.log("Length 0", props.d);
            //       console.log(props.co);
            //       setCount(0);
            //       console.log(count);
            //     } else {
            //       props.setD([...props.d, props.co]);
            //       console.log(props.d);
            //       console.log(props.co);
            //       setCount(0);
            //     }
            //     return 0;
            //   } else if (count == 0) {
            //     props.d.pop();
            //     props.setCo({ ...props.co, lastName: e.target.value });
            //     props.setD([...props.d, props.co]);
            //     console.log(lastName);
            //     return 0;
            //   } else {
            //     return null;
            //   }
            // }}
            onClick={() => {
              if (Checker.Checklname == false) {
                setCount(count + 1);
                setChecker({ ...Checker, Checklname: true });
              } else {
                setCount(count);
              }
            }}
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
              props.setCo({ ...props.co, lastname: e.target.value });
            }}
          />
          <TextField
            id="outlined-password-input"
            label="Email"
            InputLabelProps={{
              shrink: true,
            }}
            // onMouseLeave={(e) => {
            //   if (count == 8) {
            //     if (props.d.length == 0) {
            //       props.d.push(props.co);
            //       console.log("Length 0", props.d);
            //       console.log(props.co);
            //       setCount(0);
            //       console.log(count);
            //     } else {
            //       props.setD([...props.d, props.co]);
            //       console.log(props.d);
            //       console.log(props.co);
            //       setCount(0);
            //     }
            //     return 0;
            //   } else if (count == 0) {
            //     props.d.pop();
            //     props.setCo({ ...props.co, email: e.target.value });
            //     props.setD([...props.d, props.co]);
            //     console.log(email);
            //     return 0;
            //   } else {
            //     return null;
            //   }
            // }}
            onClick={() => {
              if (Checker.Checkemail == false) {
                setCount(count + 1);
                setChecker({ ...Checker, Checkemail: true });
              } else {
                setCount(count);
              }
            }}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              props.setCo({ ...props.co, email: e.target.value });
            }}
          />
          <TextField
            id="outlined-password-input"
            label="Mobile Phone"
            InputLabelProps={{
              shrink: true,
            }}
            // onMouseLeave={(e) => {
            //   if (count == 8) {
            //     if (props.d.length == 0) {
            //       props.d.push(props.co);
            //       console.log("Length 0", props.d);
            //       console.log(props.co);
            //       setCount(0);
            //       console.log(count);
            //     } else {
            //       props.setD([...props.d, props.co]);
            //       console.log(props.d);
            //       console.log(props.co);
            //       setCount(0);
            //     }
            //     return 0;
            //   } else if (count == 0) {
            //     props.d.pop();
            //     props.setCo({ ...props.co, mobilePhone: e.target.value });
            //     props.setD([...props.d, props.co]);
            //     console.log(mobilePhone);
            //     return 0;
            //   } else {
            //     return null;
            //   }
            // }}
            onClick={() => {
              if (Checker.Checkmobile == false) {
                setCount(count + 1);
                setChecker({ ...Checker, Checkmobile: true });
              } else {
                setCount(count);
              }
            }}
            value={mobilePhone}
            onChange={(e) => {
              setMobilePhone(e.target.value);
              props.setCo({ ...props.co, phone: e.target.value });
            }}
          />
          <TextField
            id="outlined-password-input"
            label="Alternate Phone"
            InputLabelProps={{
              shrink: true,
            }}
            // onMouseLeave={(e) => {
            //   if (count == 8) {
            //     if (props.d.length == 0) {
            //       props.d.push(props.co);
            //       console.log("Length 0", props.d);
            //       console.log(props.co);
            //       setCount(0);
            //       console.log(count);
            //     } else {
            //       props.setD([...props.d, props.co]);
            //       console.log(props.d);
            //       console.log(props.co);
            //       setCount(0);
            //     }
            //     return 0;
            //   } else if (count == 0) {
            //     props.d.pop();
            //     props.setCo({ ...props.co, alternatePhone: e.target.value });
            //     props.setD([...props.d, props.co]);
            //     console.log(alternatePhone);
            //     return 0;
            //   } else {
            //     return null;
            //   }
            // }}
            onClick={() => {
              if (Checker.CheckalternatePhone == false) {
                setCount(count + 1);
                setChecker({ ...Checker, CheckalternatePhone: true });
              } else {
                setCount(count);
              }
            }}
            value={alternatePhone}
            onChange={(e) => {
              setAlternatePhone(e.target.value);
              props.setCo({ ...props.co, alternate_phone: e.target.value });
            }}
          />
          <TextField
            id="outlined-password-input"
            label="Decision Maker"
            InputLabelProps={{
              shrink: true,
            }}
            // onMouseLeave={(e) => {
            //   if (count == 8) {
            //     if (props.d.length == 0) {
            //       props.d.push(props.co);
            //       console.log("Length 0", props.d);
            //       console.log(props.co);
            //       setCount(0);
            //       console.log(count);
            //     } else {
            //       props.setD([...props.d, props.co]);
            //       console.log(props.d);
            //       console.log(props.co);
            //       setCount(0);
            //     }
            //     return 0;
            //   } else if (count == 0) {
            //     props.d.pop();
            //     props.setCo({ ...props.co, decisionMaker: e.target.value });
            //     props.setD([...props.d, props.co]);
            //     console.log(decisionMaker);
            //     return 0;
            //   } else {
            //     return null;
            //   }
            // }}
            onClick={() => {
              if (Checker.CheckdecisionMaker == false) {
                setCount(count + 1);
                setChecker({ ...Checker, CheckdecisionMaker: true });
              } else {
                setCount(count);
              }
            }}
            value={decisionMaker}
            onChange={(e) => {
              setDecisionMaker(e.target.value);
              props.setCo({ ...props.co, decision_maker: e.target.value });
            }}
          />
          <TextField
            id="outlined-select-currency"
            select
            label="Best Contact Method"
            defaultValue="E"
            // onMouseLeave={(e) => {
            //   if (count == 8) {
            //     if (props.d.length == 0) {
            //       props.d.push(props.co);
            //       console.log("Length 0", props.d);
            //       console.log(props.co);
            //       setCount(0);
            //       console.log(count);
            //     } else {
            //       props.setD([...props.d, props.co]);
            //       console.log(props.d);
            //       console.log(props.co);
            //       setCount(0);
            //     }
            //     return 0;
            //   } else if (count == 0) {
            //     props.d.pop();
            //     props.setCo({ ...props.co, bestContactMethod: e.target.value });
            //     props.setD([...props.d, props.co]);
            //     console.log(bestContactMethod);
            //     return 0;
            //   } else {
            //     return null;
            //   }
            // }}
            onClick={() => {
              if (Checker.Checkcontact == false) {
                setCount(count + 1);
                setChecker({ ...Checker, Checkcontact: true });
              } else {
                setCount(count);
              }
            }}
            onChange={(e) => {
              setBestContactMethod(e.target.value);
              props.setCo({ ...props.co, contact_type: e.target.value });
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
            label="Relationship to Borrower"
            InputLabelProps={{
              shrink: true,
            }}
            // onMouseLeave={(e) => {
            //   if (count == 8) {
            //     if (props.d.length == 0) {
            //       props.d.push(props.co);
            //       console.log("Length 0", props.d);
            //       console.log(props.co);
            //       setCount(0);
            //       console.log(count);
            //     } else {
            //       props.setD([...props.d, props.co]);
            //       console.log(props.d);
            //       console.log(props.co);
            //       setCount(0);
            //     }
            //     return 0;
            //   } else if (count == 0) {
            //     props.d.pop();
            //     props.setCo({
            //       ...props.co,
            //       relationToBorrower: e.target.value,
            //     });
            //     props.setD([...props.d, props.co]);
            //     console.log(relationToBorrower);
            //     return 0;
            //   } else {
            //     return null;
            //   }
            // }}
            onClick={() => {
              if (Checker.Checkrelation == false) {
                setCount(count + 1);
                setChecker({ ...Checker, Checkrelation: true });
              } else {
                setCount(count);
              }
            }}
            value={relationToBorrower}
            onChange={(e) => {
              setRelationToBorrower(e.target.value);
              props.setCo({ ...props.co, relationship: e.target.value });
            }}
          />
          {/* <button
            onClick={(e) => {
              e.preventDefault();
              console.log(props.co);
              console.log(props.d);
              console.log(count);
            }}
          >
            Check
          </button> */}
        </Box>
      </div>
    </>
  );
};

export default AddContact;
