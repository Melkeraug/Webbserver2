const mongoose = require('mongoose');
const personModel = require('./personModel')

exports.DB = () => {
  mongoose.connect('mongodb://localhost/webbserver2', { useNewUrlParser: true, useUnifiedTopology: true });
  {useNewUrlParser: true, useUnifiedTopology: true});

    const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function () {
      console.log("Great, you startedd your database")
  });
}

exports.storeElement = (Element) => {
  Element.save(() => {
    console.log("Sucessfully saved a person in database")
  })
}