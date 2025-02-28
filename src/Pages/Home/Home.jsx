import React from 'react';
import './Home.css'
import Banner from './HomeComponents/Banner';
import Mar from './HomeComponents/Mar';
import Image from './HomeComponents/Image';
const Home = () => {
    return (
        <><div>
            <p>Home Component</p>
            <p>This is the main</p>
            <Mar></Mar>
            <Banner></Banner>
            <Image></Image>
        </div>
        <div>
            <h1>Lorem ipsum dolor sit amet.</h1>
        </div>
        </>
    );
};

export default Home;