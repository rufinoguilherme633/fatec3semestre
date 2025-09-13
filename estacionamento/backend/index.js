const express= require("express");
const bodyParser = require("body-parser")


const cors = require("cors")
const app = express();

const port = 8081;


const proprietario = require("./controllers/ProprietarioControlls");
const veiculo = require("./controllers/VeiculoControlls")
app.use(bodyParser.json());


app.use(cors())

app.get("/", (req,res) => res.send("estou aqui"));
app.use("/proprietario", proprietario);
app.use("/veiculo", veiculo);

app.listen(port,()=>{
    console.log("Servidor ouvindo")
})