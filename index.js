const express = require ("express")
const path = require("path")


const caminhoBase = path.join(__dirname, "templates")
const app = express()
app. get('/', (require, resposta) => {
    resposta.sendFile(`${caminhoBase}/index.html`)
})

app.listen(3000, () => {
    console.log('Server rodando na porta 3000')
})