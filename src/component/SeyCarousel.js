import React, {useState, useEffect} from "react";
import { Carousel } from 'antd';

export const SeyCarousel = () => {
    const data = [
       {id: 'a2c', imgSr:"", msg:"", customer:""} 
    ]
    return(
        <Carousel autoplay>
            <div className="flex justify-center ">
                <div className="">
                    <img src="" alt=""/>
                    <p></p>
                    <h4></h4>
                </div>
            </div>
        </Carousel>
    )
}

