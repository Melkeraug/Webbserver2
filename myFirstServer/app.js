const express = require('express')
const databaseModule = require('./databaseModule')
const ejs = require('ejs')
const app = express()
const port = 3000

const clientDir = __dirname + "\\client\\"

app.use(express.json())
app.use(express.urlencoded())

app.set('view-engine', 'ejs')

app.get('/', (req, res) => {
  res.render("pages/index.ejs", {name:""})
})

app.get('/bajs', (req, res) => {
  res.sendFile(clientDir + "index.css")
})

app.get('/volvo', (req, res) => {
  res.sendFile(clientDir + "volvo240.jpg")
})

app.post('/', (req, res) => {
  console.log(req.body.name)
  console.log(req.body.email)

  databaseModule.storePerson(req.body.name, req.body.email, req.body.age)

  res.render("pages/index.ejs", { name: " " + req.body.name })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
}) 