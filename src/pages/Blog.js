import React from 'react'
import Meta from '../component/Meta'
import { BreadCrumb } from '../component/BreadCrumb'

export const Blog = () => {
  return (
    <>
      <div className="banner-wrapper">
        <div className="banner">
          <div className="py-2">
            <h2 className="text-5xl font-semibold text-center py-2 animate-fade-down animate-once animate-duration-800 animate-ease-in-out">Blog</h2>
            <p className="text-gray-300 text-center font-light text-3xl py-2 leading-8 tracking-wider animate-fade-down animate-once animate-duration-800 animate-delay-[500ms] animate-ease-in-out">I design awesome things.</p>
          </div>
          <Meta title={"Blog"}/>
          <BreadCrumb title="Blog"/>
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
    </>
  )
}
