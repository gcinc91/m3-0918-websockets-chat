const {createUser, createMessage, createChat} = require('./lib/factories')


module.exports = (io) => {
    console.log("Websocket Ready");

    io.on('connection', function(socket){
        console.log('a user connected '+ socket.id );


        //VERIFY USER
        socket.on('verificando usuario', (nickname,callback) =>{
            if(isUser(connectedUser,nickname)){
                callback({isUser:true, user:null})
            }else{
                callback({isUser:false, user:createUser({name:nickname})})
            }
        })



        isUser = (userList, username) => {
            return username in userList
        }

        removeUser = (userList, username) => {
            let newList = Object.assign({}, userList)
            delete newList[username]
            return newList;
        }

        addUser = (userList, user) => {
            let newList = Object.assign({}, userList)
            newList[user.name] = user
            return newList;
        }
    



        

        
        socket.emit('mensaje', {text:"Conectado al servidor de Terra"});
        socket.on('new_message', (obj) =>{
            console.log('NEW MESSAGE FROM CLIENT:');
            console.log(obj);
            socket.broadcast.emit('mensaje', obj);
        })
    });

    connectedUser ={}

    

}


