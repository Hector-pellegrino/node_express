const express = require ("express")
const path = require("path")

const app = express()
const caminhoBase = path.join(__dirname, "templates")

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())


app.post ('/cadastrar/salvar', (require, resposta) => {
    const nome = require.body.nome
    const email = require.body.email
    const senha = require.body.senha
    console.log(`O nome do usuário é ${nome}`)
})

app.get('/cadastrar', (require, resposta) => {
    resposta.sendFile(`${caminhoBase}/cadastro.html`)
})

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