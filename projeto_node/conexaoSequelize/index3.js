const express = require('express')
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')
const bodyParser = require('body-parser')
const app = express();

const sequelize = new Sequelize("projeto1","root","root",{
    host:"localhost",
    dialect:"mysql"

});

app.engine('handlebars', handlebars.engine({defaultLayout:'main'}));
app.set('view engine','handlebars');


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.get('/card', function(req,res){

    res.render('formulario')
});

app.post('/add', function(req,res){

    res.send("teste" + req.body.titulo + "\n"+
            "Conteudo" + req.body.conteudo
    )
});



app.get("/formuSomar",function(req,res){
    res.render('soma')
})

app.post("/somar", function(req,res){
        res.send("o resultado é "+ somar(req.body.v1,req.body.v2))
})

function somar(v1,v2){
    return parseInt(v1)+parseInt(v2)

}
app.listen(8080,()=>{

    console.log('servidor na porta ', 8080)
})