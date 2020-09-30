const express = require('express')
const app = express()
const port = 3000

const clientDir = __dirname + '\\client\\'

app.get('/', (req, res) => res.sendFile(clientDir + 'index.html'))
app.get('/mainStyle', (req, res) => res.sendFile(clientDir + 'index.css'))

app.listen(port, () => console.log(`Example app listening on port port!`))