import React from 'react';
import Marquee from 'react-fast-marquee';

const Mar = () => {
    return (
        <div className='bg-purple-300 p-2'>
            <Marquee>
                <p className='m-4 text-xl font-bold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi illum, unde asperiores eius possimus velit?</p>
            </Marquee>
        </div>
    );
};

export default Mar;