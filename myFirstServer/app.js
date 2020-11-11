const express = require('express')
const databaseModule = require('./databaseModule')
const MessageModel = require('./MessageModel')
const UserModel = require('./UserModel')

const ejs = require('ejs')
const app = express()
const port = 3000

const clientDir = __dirname + "\\client\\"

app.use(express.json())
app.use(express.urlencoded())

app.set('view-engine', 'ejs')

app.use(express.static(clientDir))

app.get('/', (req, res) => {
  res.render("pages/index.ejs", {name:""})
})

app.get('/messages', async (req, res) => {

  const messages = await MessageModel.getAllMessages()

  res.render("pages/messages.ejs", {posts: messages})
})

app.get('/login', (req,res) =>{
  res.render('pages/login.ejs')
})

app.get('/register', (req,res) =>{
  res.render('pages/register.ejs')
})

app.post('/', (req, res) => {
  console.log(req.body.name)
  console.log(req.body.email)

  databaseModule.storePerson(req.body.name, req.body.email, req.body.age)

  res.render("pages/index.ejs", { name: " " + req.body.name })
})

app.post('/poo', (req, res) => {

  let messageModel = MessageModel.createNewMessage(req.body.name, req.body.message)

  databaseModule.storeElement(messageModel)

  res.redirect('/messages')
})

app.post('/register', async (req, res) => {
  let user = UserModel.newUser(req.body.uName, req.body.uEmail, req.body.uPassword)
  await databaseModule.storeElement(user)
  res.redirect('/login')
})

app.post('/login', async (req, res) => {
  let user = await UserModel.getUser(req.body.uName)
  console.log(user);
  if (user) {
    if (user.password === req.body.uPassword) {
      res.send('SUCESS')
    } else {
      res.send('INCORRECT PASSWORD')
    }
  } else {
    res.send('USER  DOES NOT EXIST')
  }

})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
}) 
