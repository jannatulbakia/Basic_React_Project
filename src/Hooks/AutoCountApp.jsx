

import React, { useEffect, useState } from 'react';



const AutoCountApp = () => {

    const[a, setA] =useState(0);
    useEffect(() => {
        const interval= setInterval(()=>{
            setA(prevCount => prevCount +1);
        },1000);
        return()=> {
            clearInterval(interval)
        }
    },[]);

    return (
        <div>
            <p className='text-center text-4xl'>{a}</p>
        </div>
    );
};

export default AutoCountApp;