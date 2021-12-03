import React from 'react';
import {Input} from 'react';

export const Draw = (props) => {

    const onClick = () => {
        props.addInput("shape")
    }
    return <button onClick={onClick}>Draw shape</button>
}