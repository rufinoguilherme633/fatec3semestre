var http = require("http");

http.createServer(function(req,res){

    res.end("Meu primeiro servidor");
}).listen(8081);

console.log("servidor rodando")

