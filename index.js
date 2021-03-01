const express = require('express');
const path = require('path');

const app = express();


app.use(express.static(__dirname));

app.listen(5000, ()=>console.log("We're now on the run, captain; at port 5000"));
app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "index.html"));
    //res.send(__dirname);
});


