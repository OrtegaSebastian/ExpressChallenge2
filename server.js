const express = require('express')


const contain = new Container("./products.txt")


const app = express();

app.get('/',(req,res)=>{
    res.send('<h1>Home!</h1>')
})
app.get('/products',(req,res)=>{
    res.send(`<h2>Lista de productos</h1> `, contain.getAll())
})
app.get('/randomProduct',(req,res)=>{
    res.send(contain.getRandomProduct())
})



const server = app.listen(8080,()=>{
    console.log("server is up")
})


