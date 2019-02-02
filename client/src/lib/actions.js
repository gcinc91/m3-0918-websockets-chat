import { wsConn } from "./store";



export const addClientMessage = (text) => {
    wsConn.sendMessage(text);
    return {
        type:"ADD_MESSAGE",
        message:{
            from: "me",
            text
        }
    }
}

export const addServerMessage = (text) => {
    return {
        type:"ADD_MESSAGE",
        message:{
            from: "server",
            text
        }
    }
}

export const addSocketToState = (socket) => {
    wsConn.getScoket(socket);
    return {
        type:"ADD_SOCKET",
        socket: socket
    }
}

export const getUSer = (user) => {
    return {
        type:"ADD_USER",
        user: user
    }
}


export const logout = () => {
    return {
        type:"LOGOUT",
        user: null
    }
}