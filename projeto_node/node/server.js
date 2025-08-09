var express = require("express");


const app = express();


app.get("/", function(req,res){

    res.send("Seja bem vindo ao app");
});


app.get("/sobre", (req,res) => {

    res.send("Sobre sobre uma empresa");
})


app.get("/form", (req,res)=>{

    res.send("Preencha o formulario");
})

let port = 8081
app.listen(port, () => {


    console.log("Servidor escultando na " + port);
})