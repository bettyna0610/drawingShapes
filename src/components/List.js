import React, {useState} from 'react';
import {Input} from './Input';
import {Draw} from './Draw';

export const List = () => {

    const [list, setList] = useState([]);

    const addInput = (input) => {
        let listArray = list;
        listArray.push(input);
        console.log(listArray)
        setList(listArray);
        console.log(list)
    }

    return (
        <div>
            <Draw addInput={addInput}/>
            {list && list.map(list => <Input />)}
        </div>
    )
}