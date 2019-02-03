import React from "react";
import {VERIFY_USER} from '../lib/Events'


export default class LoginForm extends React.Component {
  constructor(props) {
    super();

    this.state = {
      nickname: '',
      error:''
    }
  }


  handleSubmit(e){
    e.preventDefault();
    const {socket} = this.props;
    console.log('esto es socket '+ socket)
    const {nickname} = this.state;
    socket.emit(VERIFY_USER, nickname, this.setUser)
  }

  handleChange(e){
    e.preventDefault();
    this.setState({nickname: e.target.value})
  }


  setUser({user, isUser}){
    if(isUser){
        this.setError('Username  taken')
    }else{
        this.props.setUser(user)
    }
  }

  setError(error){
    this.setState({error})
    
  }



  render() {
    

    const {nickname, error} = this.state;
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor='nickname'>
              <h2>Got a Nickname?? </h2>
          </label>
          <input
          ref= {(input) => {this.textInput = input}}
          type='text'
          id='nickname'
          value={nickname}
          onChange={(e) => this.handleChange(e)}
          placeholder='My cool username!'
          />

          <div>{error ? error:null}</div>

        </form>
      
      </div>
    );
  }
}

