import React from 'react';
import { connect } from 'react-redux';
import { addClientMessage } from '../lib/actions';

class InternalInputBox extends React.Component {
    constructor(){
        super();
        this.state = {txt:''}
    }
    
    handleSend() {
        const {txt} = this.state;
        const {dispatch} = this.props;
        this.setState({txt:''});
        
        //Check for no text or dispatch
        if(txt === '') return;
        dispatch(addClientMessage(txt));
    }

    render(){
        return (
            <div>
                <input value={this.state.txt} onChange={e => this.setState({txt:e.target.value})}/>
                <button onClick={()=> this.handleSend()}>Send</button>
            </div>
        )
    }
}


export const InputBox = connect()(InternalInputBox);