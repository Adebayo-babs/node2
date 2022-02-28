const express = require("express")
const app  = express();

app.use(express.static("public")); //We use this to access our  images, css and JS files

app.use(express.urlencoded({extended:true}));



app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/index.html")
})

app.post("/", (req, res)=>{
    //console.log(req.body)
    console.log("Name: "+req.body.fn + " " + req.body.ln);
    console.log("Gender: "+req.body.sex);
    console.log("State of Origin: "+req.body.state);
    console.log("Address: "+req.body.address);

    res.send("Data has been captured")
})

app.listen(9100, ()=>{
    console.log("Server running on port 9100")
})