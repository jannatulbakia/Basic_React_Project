import React, { useState } from 'react';

const CounterApp = () => {

    const[count, setCount] = useState(0);
    console.log(count);
    const increment=()=>{
        setCount(previousCount => previousCount +1);
    }
    const decrement=() =>{
        setCount(previousCount => previousCount -1);
    }

    return (
        <div className='flex justify-center items-center gap-5 bg-purple-300 py-20'>
            <button className='btn btn-outline btn-success' onClick={decrement}>Decrement</button>

            <p>{count}</p> 
            <button className='btn btn-outline btn-error' onClick={increment}> Increment</button>

        </div>
    );
};

export default CounterApp;