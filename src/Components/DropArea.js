import React from "react";
import { useDrop } from 'react-dnd';


const DropArea=({onDrop,children})=>{
    const [{isOver},drop]= useDrop({
        accept:'COMPONENT',
        drop:(item)=>{

            onDrop(item.component);
        },
        collect:(monitor)=>({
            isOver: monitor.isOver(),
        }),

    })

    return(
        <div 
        ref={drop}
        style={{
            minHeight: '150px',
            border: '2px dashed gray',
            padding: '16px',
            backgroundColor: isOver ? 'lightblue' : 'white',
        }}
>
{children}

        </div>
    )
}

export default DropArea;