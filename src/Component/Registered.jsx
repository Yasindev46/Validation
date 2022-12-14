import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Registered = () => {
    const rcvd=useLocation()
    const [alldata,setAldata]=useState([rcvd.state])
    
    return (
    <div>
        <h1>Employee Data</h1>
      {alldata.length>0 && alldata.map((item) => {
         return (
          <div style={{ display: "inline-block", marginLeft: "10px" }}>
            <h1>{item.firstName}</h1>
          </div>
        );
      })} 
      <button>delete</button>
    </div>
  );
};