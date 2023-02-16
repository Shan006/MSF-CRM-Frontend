import React, { useState } from "react";
import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import WelcomeBanner from "../../partials/dashboard/WelcomeBanner";
// import Textarea from "@mui/joy/Textarea";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const CreditVerification = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [borrowerSSN, setBorrowerSSN] = useState("");
  const [borrowerDateOfBirth, setBorrowerDateOfBirth] = useState("");
  const [agree, setAgree] = useState("unclicked");
  let Navigate = useNavigate();

  const GoBack = () => {
    Navigate("/Mforms/housingExpenses");
  };

  const AddData = (e) => {
    e.preventDefault();
    if (
      borrowerSSN === "" ||
      borrowerDateOfBirth === "" ||
      agree === "unclicked"
    ) {
      toast("Please Fill All The Fields", {
        position: "top-center",
      });
    } else {
      let DataToSend = {
        borrowerSSN,
        borrowerDateOfBirth,
      };
      Navigate("/Mforms/creditExpenses");
    }

    // axios
    //   .post("https://infini8y.com/crm/public/api/", DataToSend)
    //   .then(function (response) {
    //     console.log(response);
    // setBorrowerSSN("");
    // setBorrowerDateOfBirth("");
    // setAgree("unclicked");
    // setMonthlyHOA("");
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
              <h1 className="ml-6 text-3xl">Credit verification</h1>
              <h1 className="ml-6 mt-4 text-md">
                To quickly help find a mortgage loan that best fits your needs,
                you are authorizing to review your credit history. This
                information is required to qualify for a mortgage loan
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
                  label="BorrowerSSN"
                  placeholder="___-__-____"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={borrowerSSN}
                  onChange={(e) => setBorrowerSSN(e.target.value)}
                />
                <TextField
                  id="outlined-password-input"
                  label="BorrowerDateOfBirth"
                  placeholder="___-__-____"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={borrowerDateOfBirth}
                  onChange={(e) => setBorrowerDateOfBirth(e.target.value)}
                />
                <FormGroup className="flex flex-row mt-2 ml-2">
                  <FormControlLabel
                    control={<Checkbox />}
                    onClick={() => {
                      agree === "clicked"
                        ? setAgree("unclicked")
                        : setAgree("clicked");
                    }}
                    label="I agree to the below terms"
                  />
                </FormGroup>
                <h1 className="ml-0 mt-4 mb-2 text-md">Term</h1>
                <div className="sm:text-sm w-5/6 h-56 bg-slate-200 overflow-y-auto p-4">
                  You understand that by checking the “I Accept” box above and
                  clicking on the 'Authorize' button you: Agree to the terms and
                  conditions hereunder, acknowledge receipt of our privacy
                  policy and you are providing 'written instructions' under the
                  FCRA to Mortgage Company (“us” or “our”) authorizing us to
                  obtain information from your personal credit profile from each
                  credit reporting agency and you; Confirm your authorization
                  for us to obtain your credit profile from any consumer
                  reporting agency to display to you, to confirm your identity
                  to avoid fraudulent transactions in your name, and to enable
                  any consumer reporting agency to monitor your credit for
                  change and you; Authorize us to obtain such information to
                  confirm your identity and display your credit data to you and
                  you; Agree to the following Terms and Conditions Disclaimer:
                  You understand that by clicking on the "I Authorize" button
                  and signing up for services, you are providing "written
                  instructions" to us and its employees, agents, subsidiaries,
                  affiliates, contractors, third party data sources and
                  suppliers, and all other credit reporting agencies under the
                  Fair Credit Reporting Act (FCRA), as amended, to access your
                  credit files from each national credit reporting agency and to
                  exchange information about you with each such national credit
                  reporting agency in order to verify your identity and to
                  provide the products and / or services to you. You agree and
                  hereby authorize Company, its agents and employees, to provide
                  your personally identifiable information (or, if applicable,
                  information about your child you have enrolled) to third
                  parties as provided in our Privacy Policy, as may be amended
                  from time to time, You waive any and all claims against
                  Company and its agents and employees for the acts or omissions
                  of these third parties with regard to the use or disclosure of
                  such information. Your further authorize Company and its
                  agents and employees to obtain various information and reports
                  about you (or about your child that you have enrolled, if
                  applicable) in order to provide the products and / or
                  services, including, but not limited to, address history
                  reports, name and alias reports, criminal reports or sex
                  offender reports, and to provide monitoring and alerts and
                  you; Agree to the following Privacy Policy / Terms and
                  Conditions Disclaimer: While enrolling for the products and /
                  or services, we will ask you for the following types of
                  information: contact information (such as name, address, phone
                  number, and email address); sensitive information (such as
                  date of birth, driver's license number and social security
                  number); personal information to verify your identity and
                  financial information (such as credit card number). This
                  information is required in order to verify your identity,
                  charge you the agreed upon fees for our products and services,
                  and to fulfill our obligation to provide our products and
                  services to you, including communicating with third parties as
                  necessary to provide such products and services , such as
                  identification verification companies, consumer reporting
                  agencies, payment validation companies, law enforcement
                  agencies, or others.
                </div>
                {/* <Textarea
                  disabled={false}
                  minRows={2}
                  size="lg"
                  variant="soft"
                /> */}
                <br></br>
                <Button variant="contained" className="m-3" onClick={GoBack}>
                  Go Back
                </Button>
                <Button variant="contained" className="m-3" onClick={AddData}>
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

export default CreditVerification;
