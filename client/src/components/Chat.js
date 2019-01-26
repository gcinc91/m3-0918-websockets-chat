import React from 'react';
import styled from '@emotion/styled';
import cx from 'classnames';
import { InputBox } from './InputBox';
import {connect} from 'react-redux';

const Message = styled.div`
    padding: 3px 5px;
    border-radius: 5px;
    margin:5px;
    &.me{
        background: lightgreen;
        align-self: flex-end;
    }
    &.server{
        background: lightgray;
        color: black;
        align-self: flex-start;
    }
`

const MessagesFlow =  styled.div`
    border: 1px solid red;
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
`


export const Chat = connect(state => ({messages:state.messages}))(({messages}) => {
    return(
        <div>
        <MessagesFlow>
            {messages.map((m,i) => <Message key={i} className={cx(m.from)}>{m.text}</Message>)}
        </MessagesFlow>
        <InputBox />
        </div>
    )
})