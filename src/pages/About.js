import React from 'react'
import Meta from '../component/Meta'
import { BreadCrumb } from '../component/BreadCrumb'

export const About = () => {
  return (
    <>
      <div className="banner-wrapper">
        <div className="banner">
          <div className="py-2">
            <h2 className="text-5xl font-semibold text-center py-2">About Seyba</h2>
            <p className="text-gray-300 text-center font-light text-3xl py-2 leading-8 tracking-wider">A creative web developer like no other.</p>
          </div>
          <Meta title={"About"}/>
          <BreadCrumb title="About"/>
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
      <section className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img src="/images/team.jpg" 
          alt="banner"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">I can be part of a team of great developers, problem solvers, and passionate collaborators.</h2>
          </div>
        </div>
      </section>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h2>Image</h2>
          </div>
          <div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <p className="text-xl leading-9 tracking-wide py-12 text-gray-500">
                I am a New York City based Full Stack Web Developer with a focus on web design, illustration, a visual development.
                I am passionate about transforming visionary concepts into immersive digital experiences. With expertise in both front and back-end technologies,
                mission is to craft solutions that exceed expectations. 
                I have professional experience in customer service, in teaching and hospitality.
                I am proficient in JavaScript, HTML/CSS, React, Firebase, bootstrap, Sass and Tailwind CSS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
