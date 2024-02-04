import React, {useState, useRef, useEffect} from "react";
import { Carousel } from 'antd';

export const SeyCarousel = () => {
    const myCar = useRef(null)

    const data = [
       {
            id: 'a2c', 
            imgSr:"/images/customer1.jpg", 
            msg:"It's hard to do really good job on anything you don't think about in the shower.", 
            customer:"John Doe",
            title: "Customer"
        } ,
        {
            id: 'b2c', 
            imgSr:"/images/customer2.jpg", 
            msg:"It's hard to do really good job on anything you don't think about in the shower.", 
            customer:"John Doe",
            title: "Customer"
        } ,
        {
            id: 'bkc', 
            imgSr:"/images/customer3.jpg", 
            msg:"It's hard to do really good job on anything you don't think about in the shower.", 
            customer:"Jane Doe",
            title: "Customer"
        }
    ]
    const antContent = {
        height: '400px',
        padding: '50px 0',
        color: '#fff',
        lineHeight: '16px',
        textAlign: 'center',
        background: '#373637',
    }
    return(
        <Carousel className="mt-6"> 
            <div>
                <div style={antContent}>
                    <div className="carousel-img"/>
                    <h4>{data[0].msg}</h4>
                    <p>{data[0].customer}</p>
                </div>
            </div>
            <div>
                <div style={antContent}>
                    <div className="carousel-img"/>
                    <h4>{data[1].msg}</h4>
                    <p>{data[1].customer}</p>
                </div>
            </div>
            <div>
                <div style={antContent}>
                    <div className="carousel-img"/> 
                    <h4>{data[2].msg}</h4>
                    <p>{data[2].customer}</p>
                </div>
            </div>
            
        </Carousel>
    )
}

