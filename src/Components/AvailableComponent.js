
import React from "react";
import { useDrag } from 'react-dnd';

const AvailableComponent=({component})=>{
    const [{isDragging},drag] =useDrag(
        {
        type:'COMPONENT',
        item:{component},
        collect:(monitor)=>({
            isDragging:monitor.isDragging(),
        }),
        })
    return(
        <div 
        ref={drag}
        style={{
          border: '1px solid gray',
          padding: '8px',
          marginBottom: '8px',
          backgroundColor: isDragging ? 'lightgreen' : 'white',
        }}
        >
            {component.label}
          
        </div>
    )
}

export default AvailableComponent;