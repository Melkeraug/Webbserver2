const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

const PersonSchema = new mongoose.Schema({
    name: String,
    age: Number
  });

  const Person = mongoose.model('Person', personSchema);

 var melker = new Person({fname: "Melker", age: "17"})

 melker.save()