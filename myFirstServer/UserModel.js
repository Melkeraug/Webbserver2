const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String

  });
  
const User = mongoose.model('User', userSchema);

exports.newUser = (uName, uEmail, uPassword) => {
    var user = new User({
        name: uName, 
        email: uEmail,
        password: uPassword
       })

    return user
}

exports.getUser = async (uName) =>{
    var user = await User.findOne({ name: uName })
    return user
}


// exports.getAllMessages = async () => {
//     let messages = await Message.find({})
//     return messages
//   }