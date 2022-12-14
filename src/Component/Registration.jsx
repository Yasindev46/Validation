import React, { useState } from "react";
import { Formik, Form } from "formik";
import { InputFields } from "./InputFields";
import * as Yup from "yup";
import { Registeredcopy } from "./Registeredcopy";
import { Button, Grid, TextField } from "@mui/material";
import Alldata from "./Alldata";
import { Tablelist } from "./Tablelist";

export const Registration = () => {
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
  const [gender,setGender]=useState("Male")
  const [alldata, setAlldata] = useState([]);
  const [show,setShow]=useState(false)
  const handleShow=()=>{
    setShow(false)
    setGender("")
  }

  return (
    <div>
    <Formik
      initialValues={{
        firstName: "Sameer",
        lastName: "Shaikh",
        email: "sameer@gmail.com",
        contact: "1234567890",
        password: "123abc",
        confirmPassword: "123abc",
        address:"Nanded"
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(gender);
        setAlldata([...alldata,{...values,gender}])
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
           <Grid container  spacing={3} mt={2} ml={55}>
            <h1>Registration Form</h1>
            <InputFields label="First Name" name="firstName" type="text" />
            <InputFields label="Last Name" name="lastName" type="text" />
            <InputFields label="Email" name="email" type="email" />
            <InputFields label="Contact" name="contact" type="" />
            <div style={{margin:"15px 0px"}}>
            <label style={{fontWeight:"bold",marginRight:"15px"}}>Gender</label>
            <input type="radio" value="Male"  name="gender"  onChange={(e)=>setGender(e.target.value)}/>:Male
            <input type="radio" value="Female" name="gender"  onChange={(e)=>setGender(e.target.value)}/>:Female
            </div>
            <InputFields label="Password" name="password" type="password" />
            <InputFields label="Confirm Password" name="confirmPassword" type="password"/>
            <InputFields label="Address" name="address" type="text" />
            <Grid item ml={12} mt={2}>
            <Button variant="contained" type="Submit" >Submit</Button>
            </Grid>
            </Grid>
          </Form>
        </div>
      )}
    </Formik>
    <Grid container spacing={2} mt={5}>
        {show?<Tablelist alldata={alldata} setShow={setShow} handleShow={handleShow}/>:""} 
      </Grid>
      </div>
  );
};