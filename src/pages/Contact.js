import React from 'react'
import Meta from '../component/Meta'
import { BreadCrumb } from '../component/BreadCrumb'
import { ContactForm } from '../component/ContactForm'
import { ContactPartial } from '../component/ContactPartial'
import { SmoothScrolling } from '../component/SmoothScrolling'

export const Contact = () => {
  return (
    <>
      <div className="banner-wrapper">
        <div className="banner">
          <div className="py-2">
            <h2 className="text-5xl font-semibold text-center py-2">Contact Me</h2>
            <p className="text-gray-300 text-center font-light text-3xl py-2 leading-8 tracking-wider">Let's work together.</p>
          </div>
          <Meta title={"Contact"}/>
          <BreadCrumb title="Contact"/>
          <div className="flex justify-center py-2">
            <div>
              <svg width="50px" height="100px" viewBox="0 0 247 300" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{fillRule:"evenodd" ,clipRule:"evenodd", strokeLinecap:"round" ,strokeLinejoin:'round', strokeMiterlimit:'1.5'}}>
                <path  className="wheel" d="M123.359,79.775l0,72.843" style={{fill:"none" ,stroke:"#fff" ,strokeWidth:"15px"}} />
                <path  className="scroll" d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z" style={{fill:"none" ,stroke:"#fff" ,strokeWidth:"15px"}} />
              </svg>
            </div>
          </div>
        </div>       
      </div>
      <div>
        <div className="">
          <img src="/images/nyc_map.png" alt="map"/>
        </div>
        <div className="flex justify-center px-4  md:px-40 py-20">
          <div className="">
            <SmoothScrolling>
              <p className="sm:text-3xl text-xl leading-tight uppercase tracking-wide font-thin text-center ">
                I'd love to hear from you! Whether you have a project in mind, a question or just want to  say hello, feel free to drop a message.
              </p>
            </SmoothScrolling>
          </div>
        </div>
      </div>
      <ContactForm/>
      <div>
        <ContactPartial/>
      </div>
    </>
  )
}
