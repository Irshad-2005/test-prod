const express  = require("express");


const app = express();

app.get("/home",(req,res)=>
{
    res.json({
        "status":200,
        "message":"home route"
    });
});

app.get("about",(req,res)=>
{
    res.json({
        "status":200,
        "message":"about route"
    });
});

app.listen(5500,()=>
{
    console.log("server started....!")
}); 