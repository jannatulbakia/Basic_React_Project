import React from 'react';

const PhotosDataComponent = ({photo}) => {
    const{title,url,thumbnailUrl} =photo;
    return (
        <div className='m-6'>
            {
                <>
                <p className=' p-6 bg-cyan-100 text-center'>{title}</p>
                <img className='h-32 w-32 p-2' src={url} alt="" />
                <img className='h-32 w-32 p-2' src={thumbnailUrl} alt="" />

                </>
                  
            }      
        </div>
    );
};

export default PhotosDataComponent;