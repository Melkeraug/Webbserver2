const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded())

const { response } = require('express');

const clientDir = __dirname

app.post('/', function (req, res) {
    console.log(req.body.name.)
    res.send('POST request to the homepage')
})

app.get('/', (req, res) => res.sendFile(clientDir + "\\index.html"))
app.get('/index.css' , (req, res) => res.sendFile(clientDir + "\\index.css"))
app.get('/kung.png', (req, res) => res.sendFile(clientDir + "\\kung.png"))


app.listen(port, () => console.log(`Example app listening on port port!`))