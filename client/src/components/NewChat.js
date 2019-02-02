import React from "react";
import { connect } from 'react-redux';
import { getUSer } from "../lib/actions";
import { logout } from "../lib/actions";
import LoginForm from './LoginForm'


class BareNewChat extends React.Component {
 


  setUser = (user) => {
    const {socket, dispatch} = this.props;
    socket.emit('USER_CONNECTED', user);
    dispatch(getUSer(user))
  }

  logout = () => {
    const {dispatch, socket} = this.props;
    console.log('esto es socket '+ socket)
    socket.emit('LOGOUT');
    dispatch(logout())
  }

  render() {
    const {socket} = this.props;
    console.log('esto es socket '+ socket)

    return (
      <div>
        <p>Esto Sera el Chat Baby!</p>
        <LoginForm socket={socket}  setUser={this.setUser}/>
      </div>
    );
  }
}

export default  connect(store => store)(BareNewChat);