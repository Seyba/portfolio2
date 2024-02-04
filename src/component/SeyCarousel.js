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
        height: '200px',
        padding: '200px 0',
        color: '#fff',
        lineHeight: '16px',
        textAlign: 'center',
        background: '#3b4149',
    }
    return(
        <Carousel className=""> 
            <div>
                <div style={antContent}>
                    <h3>image</h3>
                    <h4>dkkkj</h4>
                    <p>m</p>
                </div>
            </div>
            <div>
                <div style={antContent}>
                    
                    <div className="carousel-img">
                    </div>
                    
                    <h4>oscar</h4>
                    <p>Mohmo</p>
                </div>
            </div>
            <div>
                <div style={antContent}>
                    <h3>image</h3>
                    <h4>dkkkj</h4>
                    <p>m</p>
                </div>
            </div>
            {/* <div className="">
                <div className=""> 
                    <img src="/images/customer1.jpg" alt="testimonials" className="text-center rounded-full h-16 w-16"/>
                </div>
                <p >Tedkdkt kdd</p>
                <h4>John doe</h4>
                <h4>customer</h4>
            </div>
            <div className="text-slate-100">
                <div>
                    <img src="/images/customer1.jpg" alt="testimonials" className="rounded-full h-10 w-10"/>
                </div>
                <p>Tedkdkt kdd</p>
                <h4>Mohmo </h4>
                <h4>customer</h4>
            </div>
            <div className="text-slate-100">
                <div>
                    <img src="/images/customer1.jpg" alt="testimonials" className="rounded-full h-10 w-10"/>
                </div>
                <p>Tedkdkt kdd</p>
                <h4>Jane Doe</h4>
                <h4>customer</h4>
            </div> */}
                        
                
            
        </Carousel>
    )
}

