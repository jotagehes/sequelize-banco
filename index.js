const express = require('express')
const routes = require('./routes/routes')
const app = express()

app.use(express.urlencoded({
    extended: false
}))

app.use(routes)

const port = 3000


app.listen(port, ()=> console.log(`servidor rodando na porta ${port}`))
