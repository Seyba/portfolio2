import React from 'react'
import Meta from '../component/Meta'
import { BreadCrumb } from '../component/BreadCrumb'
import { SmoothScrolling } from '../component/SmoothScrolling'
import Marquee from 'react-fast-marquee'

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
      <section className="relative isolate overflow-hidden bg-gray-900 py-24 md:py-64 sm:py-32">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mt-6 py-20">
          <div className="grid grid-cols-4 place-content-center">
            <div></div>
            <div className="col-span-2">
              <SmoothScrolling>
                <img className="rounded-lg w-30 h-30 object-cover" src="/images/port.jpg" alt="profile"/>
              </SmoothScrolling>
            </div>
            <div></div>
          </div>
          <div className="col-span-2">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <SmoothScrolling>
                <p className="text-xl leading-9 tracking-wide py-6 text-gray-500">
                  I am a New York City based Full Stack Web Developer with a focus on web design, illustration, a visual development.
                  I am passionate about transforming visionary concepts into immersive digital experiences. With expertise in both front and back-end technologies,
                  my mission is to craft solutions that exceed expectations. 
                  I have professional experience in customer service, in teaching and hospitality.
                  I am proficient in JavaScript, HTML/CSS, React, Firebase, bootstrap, Sass and Tailwind CSS.
                </p>
              </SmoothScrolling>
              <SmoothScrolling>
                <h4 className="text-xl font-semibold tracking-tight leading-9">Mahamadou Tirera aka Seyba — Dynamic Developer</h4>
              </SmoothScrolling>
            </div>
          </div>
        </div>
      </div>
      <section className="mt-16 bg-slate-950 py-20 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="px-4 lg:px-16">
            <h3 className="text-xl text-center font-medium pb-4">
              <SmoothScrolling>
                EXPERIENCE
              </SmoothScrolling>
            </h3>
            <div 
              className="flex justify-between items-center mt-6 mb-2 border-b border-slate-800 py-2"
            >
              <div>
                <h4 className="text-lg text-gray-300 font-thin tracking-tight">
                  <SmoothScrolling>
                    Big Dream Farm LLC
                  </SmoothScrolling>
                </h4>
                <h3 className="text-xs text-gray-100 font-semibold tracking-wider">
                  <SmoothScrolling>
                    Manager
                  </SmoothScrolling>
                </h3>
              </div>
              <div>
                <h3 className="text-lg text-gray-300 font-thin tracking-tight">
                  <SmoothScrolling>
                    2019
                  </SmoothScrolling>
                </h3>
              </div>
            </div>

            <div className="mb-2 flex justify-between items-center border-b border-slate-800 py-2">
              <div>
                <h4 className="text-lg text-gray-300 font-thin tracking-tight">
                  <SmoothScrolling>
                    Dos Caminos
                  </SmoothScrolling>
                </h4>
                <h3 className="text-xs text-gray-100 font-semibold tracking-wider">
                  <SmoothScrolling>
                    Cook
                  </SmoothScrolling>
                </h3>
              </div>
              <div>
                <h3 className="text-lg text-gray-300 font-thin tracking-tight">
                  <SmoothScrolling>
                    2016
                  </SmoothScrolling>
                </h3>
              </div>
            </div>
          </div>
          <div className="px-4 lg:px-16">
            <h3 className="text-xl text-center font-medium pb-4">
              <SmoothScrolling>
                EDUCATION
              </SmoothScrolling>
            </h3>
            <div 
              className="flex justify-between items-center mt-6 mb-2 border-b border-slate-800 py-2"
            >
              <div>
                <h4 className="text-lg text-gray-300 font-thin tracking-tight">
                  <SmoothScrolling>
                    Per Scholas
                  </SmoothScrolling>
                </h4>
                <h4 className="text-xs text-gray-100 font-semibold tracking-wider">
                  <SmoothScrolling>
                    Google Sponsored Software Engineer Certification
                  </SmoothScrolling>
                </h4>
              </div>
              <div>
                <h3 className="text-lg text-gray-300 font-thin tracking-tight">
                  <SmoothScrolling>
                    2023
                  </SmoothScrolling>
                </h3>
              </div>
            </div>

            <div 
              className="flex justify-between items-center mt-6 mb-2 border-b border-slate-800 py-2"
            >
              <div>
                <h4 className="text-lg text-gray-300 font-thin tracking-tight">
                  <SmoothScrolling>
                    Udemy
                  </SmoothScrolling>
                </h4>
                <h4 className="text-xs text-gray-100 font-semibold tracking-wider">
                  <SmoothScrolling>
                    Javascript | NodeJs | ReactJS Certification
                  </SmoothScrolling>
                </h4>
              </div>
              <div>
                <h3 className="text-lg text-gray-300 font-thin tracking-tight">
                  <SmoothScrolling>
                    2019
                  </SmoothScrolling>
                </h3>
              </div>
            </div>

            <div 
              className="flex justify-between items-center mt-6 mb-2 border-b border-slate-800 py-2"
            >
              <div>
                <h4 className="text-lg text-gray-300 font-thin tracking-tight">
                  <SmoothScrolling>
                    University of Bamako (MALI)
                  </SmoothScrolling>
                </h4>
                <h4 className="text-xs text-gray-100 font-semibold tracking-wider">
                  <SmoothScrolling>
                    Bachelor in Art
                  </SmoothScrolling>
                </h4>
              </div>
              <div>
                <h3 className="text-lg text-gray-300 font-thin tracking-tight">
                  <SmoothScrolling>
                    2007
                  </SmoothScrolling>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Marquee className="bg-zinc-900 h-28">
          <div className="flex justify-between ">
            <div className="mx-8 py-4">
              <h3 className="text-5xl">JavaScript</h3>
            </div>
            <div className="mx-8 py-4">
              <h3 className="text-5xl">ReactJS</h3>
            </div>
            <div className="mx-8 py-4">
              <h3 className="text-5xl">MongoDB</h3>
            </div>
            <div className="mx-8 py-4">
              <h3 className="text-5xl">NodeJS</h3>
            </div>
            <div className="mx-8 py-4">
              <h3 className="text-5xl">ExpressJS</h3>
            </div>
            <div className="mx-8 py-4">
              <h3 className="text-5xl">HTML/CSS</h3>
            </div>
            <div className="mx-8 py-4">
              <h3 className="text-5xl">Tailwind CSS</h3>
            </div>
            <div className="mx-8 py-4">
              <h3 className="text-5xl">Bootstrap</h3>
            </div>
            <div className="mx-8 py-4">
              <h3 className="text-5xl">Firebase</h3>
            </div>
            <div className="mx-8 py-4">
              <h3 className="text-5xl">SQL</h3>
            </div>
          </div>
        </Marquee>
      </section>
    </>
  )
}
