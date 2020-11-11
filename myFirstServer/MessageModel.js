const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    name: String,
    message: String
  });
  
const Message = mongoose.model('Message', messageSchema);

exports.createNewMessage = (name, message) => {
    var messagePost = new Message({
        name: name, 
        message: message
       })

    return messagePost
}

exports.getAllMessages = async () => {
    let messages = await Message.find({})
    return messages
  }