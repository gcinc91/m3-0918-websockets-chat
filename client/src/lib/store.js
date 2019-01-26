import { createStore } from 'redux';
import { reducer } from './reducer';
import { WebsocketConnection } from './websocket';


const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log("Store created");

export const wsConn = new WebsocketConnection(store);

export {store};