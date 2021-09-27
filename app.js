let express = require('express');// requiero express
const { join } = require('path');
let app = express();//ejecuto express
const  PORT =  3030
let path = require('path')
app.use(express.static("public"))
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "/views/index.html"))
})
app.get('/babbage', function(req, res){
    res.sendFile(path.join(__dirname, "/views/babbage.html"))
})
app.get('/berners', function(req, res){
    res.sendFile(path.join(__dirname, "/views/berners.html"))
})
app.get('/clarke', function(req, res){
    res.sendFile(path.join(__dirname, "/views/clarke.html"))
})
app.get('/hamilton', function(req, res){
    res.sendFile(path.join(__dirname, "/views/hamilton.html"))
})
app.get('/hopper', function(req, res){
    res.sendFile(path.join(__dirname, "/views/hopper.html"))
})
app.get('/lovelace', function(req, res){
    res.sendFile(path.join(__dirname, "/views/lovelace.html"))
})
app.get('/turing', function(req, res){
    res.sendFile(path.join(__dirname, "/views/turing.html"))
})
app.listen(PORT, () => console.log(`
Servidor levantado en el puerto ${PORT}
http://localhost:${PORT}
`));