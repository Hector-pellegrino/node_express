const express = require ("express")
const path = require("path")


const caminhoBase = path.join(__dirname, "templates")
const app = express()

app.get('/usuarios/:id', (require, resposta) => {
    const id = require.params.id
    console.log(id)
    resposta.sendFile(`${caminhoBase}/usuarios.html`)
})
app. get('/', (require, resposta) => {
    resposta.sendFile(`${caminhoBase}/index.html`)
})

app.listen(3000, () => {
    console.log('Server rodando na porta 3000')
})