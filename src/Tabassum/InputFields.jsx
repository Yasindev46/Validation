import React from "react";
import { ErrorMessage, useField  } from "formik";
import { Grid, TextField } from "@mui/material";

export const InputFields = ({ onChange,onClick,item,handleAdd ,label, ...props }) => {
  const [field, meta] = useField(props);
  
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
      <label htmlFor={field.name} style={{fontWeight:"bold",width:"100px"}}>{label}</label>
      <TextField variant="outlined" fullWidth 
        className={`form-control shadow-none ${
          meta.touched && meta.error && "is-invalid"
        }`}
        {...field}
        {...props}
        autoComplete="off"
      />
      <ErrorMessage component="div" name={field.name} className="error" style={{color:"red"}} />
      </Grid>
    </Grid>
  );
};