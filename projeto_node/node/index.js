const express = require("express");

const app = express();



app.get("/:nome/:cargo/:situacao",(req,res)=>{
    res.send("<h1>Ola</h1>" + req.params.nome + " "+ req.params.cargo +" "+ req.params.situacao)
})


app.listen(8081, ()=>{

    console.log("servidor rodadno");
})