import React from 'react';
import Image1 from '../../../assets/images/a.jpg';
import Image2 from '../../../assets/images/b.jpg';
import Image3 from '../../../assets/images/c.jpg';
import Image4 from '../../../assets/images/d.jpg';
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src={Image1} className="w-full" />
                </div> 
                <div id="item2" className="carousel-item w-full">
                    <img src={Image2} className="w-full" />
                </div> 
                <div id="item3" className="carousel-item w-full">
                    <img src={Image3} className="w-full" />
                </div> 
                <div id="item4" className="carousel-item w-full">
                    <img src={Image4} className="w-full" />
                </div> 
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a> 
                <a href="#item2" className="btn btn-xs">2</a> 
                <a href="#item3" className="btn btn-xs">3</a> 
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Banner;