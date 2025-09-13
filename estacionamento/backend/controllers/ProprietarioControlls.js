const express = require("express")
const router = express.Router();
const Proprietario = require("../models/Proprietario")

router.get('/',async (req,res)=> {
    const proprietarios = await Proprietario.findAll();
    res.status(200).json(proprietarios)
});


router.post('/', async(req,res)=> {
    const {nome} = req.body.nome;
    const {cpf} = req.body.cpf;

    const newEdit = await Proprietario.create({nome,cpf});
    res.status(200).json({message:"Cadastrado com sucesso"})
});

router.get("/:id", async(req,res)=>{
    const proprietario = await Proprietario.findByPk(req.params.id);
    res.status(200).json(proprietario)
});

router.delete("/:id", async (req,res) =>{
    await Proprietario.destroy({
        where:{
            id_proprietario:req.params.id
        }
    })
    res.status(200).json({message:"Excluido com sucesso"})
});

router.put("/:id", async (req,res) =>{

    const {nome} = req.body.nome;
    const {cpf} = req.body.cpf;

    await Proprietario.update({nome,cpf},{where: { id_proprietario:req.params.id}})

     res.status(200).json({message:"Atualizado com sucesso"})
});


module.exports = router