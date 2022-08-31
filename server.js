const express = require('express');
const Container = require('./functions');
const contain = new Container("./products.txt")

const app = express();

app.get('/',(req,res)=>{
    res.send('<h1>Home!</h1>')
})
app.get('/products',(req,res)=>{
    const response = contain.getAll();
    res.send(`Products: ${ response }`);
})

app.get('/randomProduct',(req,res)=>{
    const response = contain.getRandomProduct();
    res.send(`Random Product: ${ response }`);
})

const server = app.listen(8080,()=>{
    console.log("server is up")
})

