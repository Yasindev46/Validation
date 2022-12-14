const modelBankdata = required('./');

modelBankdata.find({},(err,doc)=>{
    res.send(doc)
})