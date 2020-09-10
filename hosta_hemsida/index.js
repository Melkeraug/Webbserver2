const express = require('express')
const app = express()
const port = 3000

const clientDir = __dirname

app.get('/', (req, res) => res.sendFile(clientDir + "\\index.html"))
app.get('/index.css' , (req, res) => res.sendFile(clientDir + "\\index.css"))
app.get('/kung.png', (req, res) => res.sendFile(clientDir + "\\kung.png"))


app.listen(port, () => console.log(`Example app listening on port port!`))