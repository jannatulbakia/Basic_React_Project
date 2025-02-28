import React from 'react';

const FetchDataComponent = ({post}) => {
    // console.log(post);
    // console.log(title);
    const{title,body}=post;
    return (
         <div className=' m-10'>
             {/* <p className='text-2xl font-bold'>{post.title}</p>
             <p>{post.body}</p> */}
             <p className='text-2xl font-bold bg-emerald-300 p-3'>{title}</p>
             <p className='p-3'>{body}</p>
        </div>
    );
};

export default FetchDataComponent;