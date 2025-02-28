import React, { useEffect, useState } from 'react';
import UserDataComponent from './UserDataComponent';

const UserData = () => {
    const[tasks, setTask]= useState([]);
    console.log(tasks);
    useEffect(() =>{
        const toDoData = async() => {
            try{
            
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                const info = await response.json();
                setTask(info)

        }catch(error){
            console.log(error);
        }
        
        }
        toDoData();
    },[])

    return (
        <div>
            {
                tasks.map(task =>(
                    <UserDataComponent task= {task} key= {task.id} />
                ))
            }
            
        </div>
    );
};

export default UserData;