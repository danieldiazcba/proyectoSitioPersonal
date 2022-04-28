const express = require ("express")
const app = express();

app.use(express.static('public'));

const path = require("path");

app.listen (3000,() =>
console.log("Servidor 3000 Corriendo"));

app.get ("/", (req, res)=>{
    res.sendFile (path.join(__dirname + "/views/index.html"))
});