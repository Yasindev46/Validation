const mongoose = require("mongoose");

const ConnectDB = () => {
  const db = "mongodb://localhost/Bankdata";
  mongoose.connect(db).then(() =>console.log(`Connected to ${db}`)).catch((err)=>console.log(err));
};
module.exports=ConnectDB;