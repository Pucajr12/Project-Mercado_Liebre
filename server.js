const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const path = require("path")


app.use(express.static('public'));  //middleware 

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname + "/views/inicio.html"))
})
app.get("/register", (req,res) =>{
    res.sendFile(path.join(__dirname + "/views/registro.html"))
} )
app.get("/login",(req,res)=>{
    res.sendFile(path.resolve(__dirname + "/views/login.html"))
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});

