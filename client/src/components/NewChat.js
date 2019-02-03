import React from "react";
import { connect } from 'react-redux';
import { getUSer, connectSocket } from "../lib/actions";
import { logout } from "../lib/actions";
import LoginForm from './LoginForm';
import io from 'socket.io-client';
import {USER_CONNECTED, LOGOUT} from '../lib/Events'


class BareNewChat extends React.Component {



  componentWillMount(){
    this.initSocket()
  }

  initSocket = () => {
    const {dispatch} = this.props
    const socket = io('http://localhost:3001')
    socket.on('connect', () => {
      console.log(USER_CONNECTED)
    })
    dispatch(connectSocket(socket))
  }


  setUser = (user) => {
    const {socket, dispatch} = this.props;
    socket.emit(USER_CONNECTED, user);
    dispatch(getUSer(user))
  }

  logout = () => {
    const {dispatch, socket} = this.props;
    socket.emit(LOGOUT);
    dispatch(logout())
  }

  render() {
    const {socket} = this.props;
    return (
      <div>
        <p>Esto Sera el Chat Baby!</p>
        <LoginForm socket={socket}  setUser={this.setUser}/>
      </div>
    );
  }
}

export default  connect(store => store)(BareNewChat);