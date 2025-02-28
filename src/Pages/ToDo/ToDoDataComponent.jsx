import React from 'react';

const ToDoDataComponent = ({food}) => {
    
    const{quantity,name} =food;

    return (
        <div>
            {/* <p>{task.title}</p>
            <p>{task.completed}</p> */}
            <p className='m-4 p-6 bg-cyan-100 text-center'>{quantity}</p>
            <p className='m-4 p-6 bg-cyan-100 text-center'>{name}</p>
            
        </div>
    );
};

export default ToDoDataComponent;