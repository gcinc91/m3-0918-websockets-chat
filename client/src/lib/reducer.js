
const initState = {
    messages:[]
}


export const reducer = (state = initState, action) => {

    switch(action.type){
        case "ADD_MESSAGE":
            state = {
                ...state,
                messages:[...state.messages, action.message]
            }
        break;
        default:
        break;
    }
    return state;
}