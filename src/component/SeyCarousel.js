import React, {useState, useEffect} from "react";
import { Carousel } from 'antd';

export const SeyCarousel = () => {
    const data = [
       {
            id: 'a2c', 
            imgSr:"/images/customer1.jpg", 
            msg:"It's hard to do really good job on anything you don't think about in the shower.", 
            customer:"John Smith",
            title: "Client"
        } ,
        {
            id: 'b2c', 
            imgSr:"/images/customer2.jpg", 
            msg:"Your most unhappy customers are your greatest source of learning.", 
            customer:"Jane Doe",
            title: "User"
        } ,
        {
            id: 'bkc', 
            imgSr:"/images/customer3.jpg", 
            msg:"Your reputation is more important than your paycheck, and your integrity.", 
            customer:"John Doe",
            title: "Client"
        }
    ]
    const antContent = {
        height: '400px',
        padding: '50px 0',
        color: '#fff',
        lineHeight: '16px',
        textAlign: 'center',
        background: '#1f1f20',
    }
    return(
        <Carousel autoplay > 
            <div>
                <div style={antContent}>
                    <div className="carousel-img"/>
                    <div>
                        <h4 className="md:text-4xl md:px-20 lg:px-64 xl:px-96 px-4 text-lg font-normal ">❝{data[0].msg}</h4>
                    </div>
                    <div className="mt-4">
                        <p className="md:text-lg text-sm text-zinc-500 font-medium tracking-wide">{data[0].customer}</p>
                        <p className="md:text-sm text-xs text-zinc-500 font-bold tracking-tighter">{data[0].title}</p>
                    </div>
                </div>
            </div>
            <div>
                <div style={antContent}>
                    <div className="carousel-img2"/>
                    <div className="">
                        <h4 className="md:text-4xl md:px-20 lg:px-64 xl:px-96 px-4 text-lg font-normal">❝{data[1].msg}</h4>
                    </div>
                    <div className="mt-4">
                        <p className="md:text-lg text-sm text-zinc-500 font-medium tracking-wide">{data[1].customer}</p>
                        <p className="md:text-sm text-xs text-zinc-500 font-bold tracking-tighter">{data[1].title}</p>
                    </div>
                    
                </div>
            </div>
            <div>
                <div style={antContent}>
                    <div className="carousel-img3"/> 
                    <div>
                        <h4 className="md:text-4xl md:px-20 lg:px-64 xl:px-96 px-4 text-lg font-normal ">❝{data[2].msg}</h4>
                    </div>
                    <div className="mt-4">
                        <p className="md:text-lg text-sm text-zinc-500 font-medium tracking-wide">{data[2].customer}</p>
                        <p className="md:text-sm text-xs text-zinc-500 font-bold tracking-tighter">{data[2].title}</p>
                    </div>
                </div>
            </div>
            
        </Carousel>
    )
}

