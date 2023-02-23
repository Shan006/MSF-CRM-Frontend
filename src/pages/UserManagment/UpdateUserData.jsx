import React, { useState } from "react";
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

const UpdateUserData = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [firstname, setFirstName] = useState();
  const [lastname, setLastName] = useState();
  const [phone, setphone] = useState();
  const [email, setEmail] = useState();
  const [role, setRole] = useState();
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
                label="First Name"
                InputLabelProps={{
                  shrink: true,
                }}
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <TextField
                id="outlined-password-input"
                label="Last Name"
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
                label="Role"
                InputLabelProps={{
                  shrink: true,
                }}
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
              <br></br>
              <Button variant="contained" className="m-3">
                Submit
              </Button>
            </Box>
          </main>
        </div>
      </div>
    </>
  );
};

export default UpdateUserData;
