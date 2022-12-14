import React, { useState,useEffect } from "react";
import { DataGrid, GridRowsProp, GridColDef, } from "@mui/x-data-grid";
import {Box, Button} from "@mui/material"

export const Tablelist=({alldata,handleShow})=> {
    const [data,setData]=useState(alldata)
    console.log("===>data",data)

    const rowdata=data.map((item,ind)=>{
        return{
            id:ind+1,
            fname:item.firstName,
            lname:item.lastName,
            contact:item.contact,
            address:item.address,
            gender:item.gender,
        } 
    })
    const columns= [
      { field: "id", headerName: "Sl No", width: 100, headerClassName: 'super-app-theme--header' },
      { field: "fname", headerName: "First Name", width: 150,headerClassName: 'super-app-theme--header' }, 
      { field: "lname", headerName: "Last Name", width: 150,headerClassName: 'super-app-theme--header' }, 
      { field: "contact", headerName: "Contact", width: 150,headerClassName: 'super-app-theme--header' }, 
      { field: "address", headerName: "Address", width: 250,headerClassName: 'super-app-theme--header' }, 
      { field: "gender", headerName: "Gender", width: 250,headerClassName: 'super-app-theme--header' }, 
     ];

  return (
    <Box sx={{  height: 500,
      width: '70%','& .super-app-theme--header': {backgroundColor: 'purple',fontSize:"15px",color:"white"}}}  ml={25}>
        <h1 style={{textAlign:"center"}}>Employee Details</h1>
      <DataGrid rows={rowdata} columns={columns}  sx={{
          boxShadow: 5,
          border: 2,
          fontSize:"15px",
          borderColor: 'primary.light',
          '& .MuiDataGrid-cell:hover': {
            color: 'primary.main',
            fontWeight:'bolder'
          },
        }} />
    {/* <Button variant="contained" ml={35} onClick={()=>setShow(false)}>Back</Button> */}
    <Button variant="contained" ml={35} onClick={handleShow}>Back</Button>
    </Box>
  );
}
