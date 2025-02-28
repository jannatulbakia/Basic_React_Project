import React, { useEffect, useState } from 'react';
import PhotosDataComponent from './PhotosDataComponent';


const PhotosData = () => {

    const[photo, setPhoto]= useState([]);
    console.log(photo);
    useEffect(() =>{
        const photoData = async() => {
            try{
            
                const response = await fetch("https://jsonplaceholder.typicode.com/photos");
                const info = await response.json();
                setPhoto(info)

        }catch(error){
            console.log(error);
        }
        
        }
        photoData();
    },[])

    return (
        <div>
            {
                photo.map(photo =>(
                    <PhotosDataComponent photo= {photo} key= {photo.id} />
                ))
            }
            
        </div>
    );
};
export default PhotosData;