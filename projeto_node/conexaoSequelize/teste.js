const Sequelize = require('sequelize');
const sequelize = new Sequelize('projeto1','root','root',{
    host:"localhost",
    dialect:"mysql"
});




sequelize.authenticate().then(function(){
    console.log("conexão com banco de dados com sucesso");
}).catch(function(){
    console.log("falha ao conectar ao banco de dados");
})


const Postagem = sequelize.define('postagens',{
    titulo:{
        type: Sequelize.STRING
    },
    conteudo:{
        type: Sequelize.TEXT
    }
})





//Postagem.sync({force:true})


const Usuarios = sequelize.define('usuarios',{
    nome:{
        type: Sequelize.STRING
    },
    sobrenome:{
        type: Sequelize.STRING
    },
    idade:{
        type: Sequelize.INTEGER
    },
    email:{
        type: Sequelize.STRING
    }

})



//Usuarios.sync({force:true})

/*Usuarios.bulkCreate([

    {
        nome:"Guilherme",
        sobrenome:"Rufino",
        idade:24,
        email:"teste.backup.com"
    },
     {
        nome:"jay",
        sobrenome:"Caps",
        idade:24,
        email:"momo.backup.com"
    },
])*/



/*Usuarios.create(

    {
        nome:"Unico insert",
        sobrenome:"teste",
        idade:24,
        email:"teste.backup.com"
    },
)*/


async function chamar(){

    const todos = await  Usuarios.findAll();

console.log(todos)
}

//chamar()