const express = require('express')
const labb = require('./labb')
const app = express()
const port = 3000

labb.add("1", 2)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port port!`))