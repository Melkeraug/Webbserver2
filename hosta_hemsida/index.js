const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

app.use(express.json())
app.use(express.urlencoded())

const { response } = require('express');

const clientDir = __dirname

const personSchema = new mongoose.Schema({
    name: String,
    email: String
  });
  
  const Person = mongoose.model('Person', personSchema);

app.post('/', function (req, res) {
    var melker = new Person({name: req.body.name, email: req.body.email})
    melker.save()
    res.send('POST request to the homepage')
})

app.get('/', (req, res) => res.sendFile(clientDir + "\\index.html"))
app.get('/index.css' , (req, res) => res.sendFile(clientDir + "\\index.css"))
app.get('/kung.png', (req, res) => res.sendFile(clientDir + "\\kung.png"))


app.listen(port, () => console.log(`Example app listening on port port!`))