import React, {useRef, useState, useEffect} from "react";
import {Image} from './Image';
import {Draw} from './Draw';
import {List} from './List'

export const Upload = () => {
    const [image, setImage] = useState();
    const [preview, setPreview] = useState();
    const [list, setList] = useState();
    const fileInputRef = useRef();

    useEffect(() => {
        if (image) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setPreview(reader.result)
            }
            reader.readAsDataURL(image)
        } else {
            setPreview(null)
        }
        console.log(preview)
    }, [image])

    
    const submitImage = (event) => {
        event.preventDefault()
        fileInputRef.current.click()
    }

    const onChange = (event) => {
        const file = event.target.files[0]
        if (file && file.type.substr(0,5) === "image") {
            setImage(file)
        } else {
            setImage(null)
        }
    }

    const addInput = (input) => {
        const listArray = [];
        listArray.push(input);
        setList(listArray);
        console.log(listArray)
    }

    return (
        <div>
            <Draw addInput={addInput}/>
            <form>
                <button onClick={submitImage}>Upload Image</button>
                <input type="file" 
                style={{display:"none"}} 
                ref={fileInputRef} 
                onChange={onChange}
                accept="image/*"/>
            </form>
            <div className="flex">
            <List list={list}/>
            <Image source={preview}/>
            </div>
        </div>
    )
}

