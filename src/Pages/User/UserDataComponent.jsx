import React from 'react';

const UserDataComponent = ({task}) => {
    const{username,address} =task;
    return (
        <div>
            <p className='m-4 p-6 bg-cyan-100 text-center'>{username}</p>
            <p className='m-4 p-6 text-center bg-red-200'>{address.street}</p>
            <p className='m-4 p-6 bg-cyan-100 text-center'>{address.geo.lat}</p>
            
            
        </div>
    );
};

export default UserDataComponent;