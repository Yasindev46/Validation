import React, { useEffect, useState } from "react";
import { Grid,Card,Button } from "@mui/material";
export const Registeredcopy = ({alldata,setShow}) => {
    return (
    <Grid container spacing={3}>
      {alldata.length>0 && alldata.map((item) => {
         return (
          <Grid item sx={3} m={2}>
          <Card>
            <h3>{item.firstName} {item.lastName}</h3>
            <h4>{item.contact}</h4>
            <h4>{item.email}</h4>

          </Card>
          </Grid>
        );
      })} 
      <Grid item sx={12}>
      <Button variant="contained" onClick={()=>setShow(false)} style={{height:"40px"}} fullWidth>Back</Button>
      </Grid>
    </Grid>
  );
};