const express = require ('express')
const app = express()

app.use(express.json())

app.get('/', (req,res)=>{
    res.send('Só para lembrar a função GET')
})

app.post('/comprar', (req,res)=>{
    const produto= req.body.produto;
    const quant= req.body.quant;
    const preco= req.body.preco;
    const total= preco * quant;
    res.send('O produto que você deseja é '+ produto+' e o valor total é de '+ total)
               
})

app.listen (3000, () =>{
    console.log('Servidor rodando em http://localhost:3000')
})