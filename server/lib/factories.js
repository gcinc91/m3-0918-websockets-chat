const uuidv4 = require("uuid/v4");



const createUser = ({name= ''} ={}) => ({
  id: uuidv4(),
  name
});


const createMessage = ({message = '', sender = ''} ={}) => ({
  id: uuidv4(),
  time: getTime(Date.now()),
  message,
  sender
});


const getTime = (date) => {

  return `${date.getHours()}:${('0'+date.getMinutes()).slice(-2)}`
}


const createChat = ({messages = [], name = 'Comunity', users = []} ={}) => ({
  id: uuidv4(),
  name,
  messages,
  users,
  typingUsers: []
});


module.exports = {
  createUser,
  createChat,
  createMessage
}