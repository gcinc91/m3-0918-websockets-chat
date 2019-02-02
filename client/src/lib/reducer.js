
const initState = {
    messages:[],
    socket: 'klk',
    user:null
}


export const reducer = (state = initState, action) => {

    switch(action.type){
        case "ADD_MESSAGE":
            state = {
                ...state,
                messages:[...state.messages, action.message]
            }
        break;
        case "ADD_SOCKET":
            state = {
                ...state,
                socket:action.socket
            }
        break;
        case "ADD_USER":
            state = {
                ...state,
                user:action.user
            }
        break;
        case "LOGOUT":
            state = {
                ...state,
                user:action.logout
            }
        break;

        default:
        break;
    }

    return state;
}