const express = require("express")
const router  = express.Router();


const Veiculo = require("../models/Veiculo");
const { route } = require("./ProprietarioControlls");




router.get("/", async(req , res) =>{

    const veiculos = Veiculo.findAll();



    req.status(200).json(veiculos);
});


router.post("/", async(req , res) =>{

    const {placa} = req.body;
    const {ano} = req.body;
    const {mensalidade} = req.body;
    const {fk_proprietarios} = req.body;

    const newVeiculo = Veiculo.create({placa,ano,mensalidade,fk_proprietarios})



    req.status(200).json({message:"veiculo criado com sucesso"});
});


router.get("/:id", async (req,res) => {
    const veiculo = Veiculo.findByPk(req.params.id);
    res.status(200).json(veiculo)
})

router.delete("/:id", async (req,res) =>{
    await Veiculo.destroy({
        where:{
            id_veiculo:req.params.id
        }
    })
    res.status(200).json({message:"Excluido com sucesso"})
});

router.put("/:id", async (req,res) =>{

    const {placa} = req.body;
    const {ano} = req.body;
    const {mensalidade} = req.body;
    const {fk_proprietarios} = req.body;
    await Veiculo.update({placa,ano,mensalidade,fk_proprietarios},{where: {  id_veiculo:req.params.id}})

     res.status(200).json({message:"Atualizado com sucesso"})
});


module.exports = router