const {createUser, createMessage, createChat} = require('./lib/factories')
const  {VERIFY_USER, USER_CONNECTED } = require ('../client/src/lib/Events.js')

let connectedUsers ={}

module.exports = (io) => {
    console.log("Websocket Ready");

    io.on('connection', function(socket){
        console.log('socket Id: '+ socket.id );


        //VERIFY USER
        socket.on(VERIFY_USER, (nickname,callback) =>{
            console.log('esta llegando al back')
            if(isUser(connectedUser,nickname)){
                callback({isUser:true, user:null})
            }else{
                callback({ isUser:false, user:createUser({name:nickname})})
            }
        })


        socket.on(USER_CONNECTED,(user) => {
            connectedUsers = addUsers(connectedUsers, user);
            socket.user = user
            io.emit(USER_CONNECTED, connectedUsers)
            console.log(connectedUsers)
        })



        isUser = (userList, username) => {
            return username in userList
        }

        removeUser = (userList, username) => {
            let newList = Object.assign({}, userList)
            delete newList[username]
            return newList;
        }

        addUsers = (userList, user) => {
            let newList = Object.assign({}, userList)
            newList[user.name] = user
            return newList;
        }
    



        

        
        // socket.emit('mensaje', {text:"Conectado al servidor de Terra"});
        // socket.on('new_message', (obj) =>{
        //     console.log('NEW MESSAGE FROM CLIENT:');
        //     console.log(obj);
        //     socket.broadcast.emit('mensaje', obj);
        // })
    });

    

    

}


