var express = require("express");
var app = express()

app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/user/create",(req,res) => {
    let userData = {}
    userData.name = req.body.name;
    userData.age = req.body.age;
    users.push(userData);
    res.json({statusCode: 200, data: userData, message:"Created"})
})

app.get("/user",(req,res) => {
    res.json({statusCode: 200, data: users, message:"Success"})
})

var port = process.env.port || 3000;

app.listen(port, ()=>{
    console.log("Application has started on port: ",port)
})