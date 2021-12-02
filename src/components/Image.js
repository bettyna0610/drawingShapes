import React, {useRef, useEffect, useState} from 'react';

export const Image = (props) => {
    const canvasRef = useRef(null);
    const contextRef = useRef(null);
    const [isDrawing,setIsDrawing] = useState(false)
    

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = 320 * 2;
        canvas.height = 480 * 2;
        canvas.style.width = `320px`;
        canvas.style.height = `480px`;

        const context = canvas.getContext("2d");
        context.scale(2,2);
        context.lineCap = "round";
        context.strokeStyle = "black";
        context.lineWidth = 5;
        contextRef.current = context;
    }, [])

    const startDrawing = ({nativeEvent}) => {
        
        
    console.log(props.width,props.height);
        const {offsetX, offsetY} = nativeEvent;
        
        contextRef.current.beginPath();
        contextRef.current.moveTo(offsetX,offsetY);
        setIsDrawing(true);
    }

    const finishDrawing = () => {
        contextRef.current.closePath();
        setIsDrawing(false);
    }

    const draw = ({nativeEvent}) => {
        if (!isDrawing) {
            return
        }
        const {offsetX, offsetY} = nativeEvent;
        contextRef.current.lineTo(offsetX,offsetY);
        contextRef.current.stroke();
    }

    return (
        <div id="image-container">
            <img class="img" src={props.source} style={{width:320, height:480, objectFit: "cover"}}/>
            <canvas id="canvas" width="320" height="480" onMouseDown={startDrawing} onMouseUp={finishDrawing} onMouseMove={draw} ref={canvasRef}/>
        </div>
    )
}