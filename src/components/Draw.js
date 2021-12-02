import React from 'react';
import {Input} from 'react';

export const Draw = (props) => {

    const onClick = () => {
        props.addInput(<Input/>)
    }
    return <button onClick={onClick}>Draw shape</button>
}