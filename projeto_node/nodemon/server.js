const express = require('express')
const app = express();

app.get('/', (req,res)=>{

    res.send("<h1> Ola teste de nodemon</h1>");
})
app.get('/pagina', (req,res)=>{

    res.sendFile(__dirname+"/html"+"/pag01.html");
})


app.get('/pagina2',(req,res)=>{

    res.sendFile(__dirname+"/html"+"/pag02.html")
})

const port = 8080;
app.listen(port,()=>{

    console.log("servidor rodando na porta " + port);
})

