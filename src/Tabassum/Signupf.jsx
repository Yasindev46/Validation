import React, { useState } from "react";
import { Formik, Form } from "formik";
import { InputFields } from "./InputFields";
import * as Yup from "yup";
import { Registeredcopy } from "./Registeredcopy";
import { Button, Grid } from "@mui/material";
import Alldata from "./Alldata";
import { Tablelist } from "./Tablelist";

export const Signupf = () => {
  const phonenumber =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\]?[0-9]{3}[-\s\]?[0-9]{4,6}$/im;
  const validate = Yup.object({
    firstName: Yup.string()
      .min(2, "Minimum 2 letters required")
      .max(16, "Maximum 16 letters only")
      .required("Required *"),
    lastName: Yup.string()
    .min(2, "Minimum 2 letters required")
    .max(16, "Maximum 16 letters only")
      .required("Required *"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    contact: Yup.string()
      .min(10, "Enter valid mobile number")
      .max(11, "Enter valid mobile number")
      .required("Mobile number is required *")
      .matches(phonenumber, "Invalid mobile number"),
    password: Yup.string()
      .min(6, "Password must be at least 6 charaters")
      .required("Password is required *"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm password is required *"),
  });
  const [alldata, setAlldata] = useState([]);
  const [show,setShow]=useState(false)

  return (
    <div>
    <Formik
      initialValues={{
        firstName: "abc",
        lastName: "abc",
        email: "abc@gmail.com",
        contact: "1234567890",
        password: "123abc",
        confirmPassword: "123abc",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        // console.log(values);
        setAlldata([...alldata,values])
        setShow(true)
      }}
    >
      {(formik) => (
        <div
          style={{
            display: show?"none":"flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Form >
          {/* <Form> */}
            <Grid container  spacing={3} mt={5} ml={55}>
          <h1>Registration Form</h1>
            <InputFields label="First Name" name="firstName" type="text" />
            <InputFields label="Last Name" name="lastName" type="text" />
            <InputFields label="Email" name="email" type="email" />
            <InputFields label="Contact" name="contact" type="" />
            <InputFields label="Password" name="password" type="password" />
            <InputFields label="Confirm Password" name="confirmPassword" type="password"/>
            <InputFields label="Address" name="Address" type="text" />
            <Grid item ml={10} mt={2}>
            <Button variant="contained" type="Submit" >Submit</Button>
            </Grid>
            </Grid>
          </Form>
        </div>
      )}
    </Formik>
    <Grid container spacing={2} mt={5}>
      {/* {show?<Registeredcopy alldata={alldata} setShow={setShow}/>:""} */}
      {/* <Alldata alldata={alldata}/> */}
      {show?<Tablelist alldata={alldata} setShow={setShow}/>:""} 
      </Grid>
      </div>
  );
};