import React from 'react'
import Meta from '../component/Meta'
import { BreadCrumb } from '../component/BreadCrumb'
import { SmoothScrolling } from '../component/SmoothScrolling'
import Marquee from 'react-fast-marquee'
import SeyModal from '../component/SeyModal'

export const About = () => {
  return (
    <>
      <div className="banner-wrapper">
        <div className="banner">
          <div className="py-2">
            <h2 className="text-5xl font-semibold text-center py-2 animate-fade-down animate-once animate-duration-800 animate-ease-in-out">About Seyba</h2>
            <p className="text-gray-300 text-center font-light text-3xl py-2 leading-8 tracking-wider animate-fade-down animate-once animate-duration-800 animate-delay-[500ms] animate-ease-in-out">A creative web developer like no other.</p>
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
            <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl animate-fade-left animate-once animate-duration-800 animate-ease-in-out">I can be part of a team of great developers, problem solvers, and passionate collaborators.</h2>
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
                  I am a New York City based Full Stack Web Developer with a focus on web design, illustration, and visual development.
                  I am passionate about transforming visionary concepts into immersive digital experiences. With expertise in both front and back-end technologies,
                  my mission is to craft solutions that exceed expectations. 
                  I have professional experience in customer service, in teaching and hospitality.
                  I am proficient in JavaScript, HTML/CSS, React, Firebase, bootstrap, Sass and Tailwind CSS.
                </p>
              </SmoothScrolling>
              <SmoothScrolling>
                <h4 className="text-xl font-semibold tracking-tight leading-9">Mahamadou Tirera — Dynamic Developer</h4>
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
              className="flex justify-between items-center  border-b border-slate-800 py-4"
            >
              <div className="flex justify-between items-center">
                <div>
                  <SmoothScrolling>
                    <div className="flex items-center pl-2 h-12 w-12 bg-zinc-700 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                      </svg>
                    </div>
                  </SmoothScrolling>
                </div>
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
              </div>
              <div>
                <h3 className="text-lg text-gray-300 font-thin tracking-tight">
                  <SmoothScrolling>
                    2019
                  </SmoothScrolling>
                </h3>
              </div>
            </div>

            <div className=" flex justify-between items-center border-b border-slate-800 py-4">
              <div className="flex justify-between items-center">
                <div>
                  <SmoothScrolling>
                    <div className="flex items-center pl-2 h-12 w-12 bg-zinc-700 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                      </svg>
                    </div>
                  </SmoothScrolling>
                </div>
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
              </div>
              <div>
                <h3 className="text-lg text-gray-300 font-thin tracking-tight">
                  <SmoothScrolling>
                    2016
                  </SmoothScrolling>
                </h3>
              </div>
            </div>

            <div className=" flex justify-between items-center border-b border-slate-800 py-4">
              <div className="flex justify-between items-center">
                <div>
                  <SmoothScrolling>
                    <div className="flex items-center pl-2 h-12 w-12 bg-zinc-700 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                      </svg>
                    </div>
                  </SmoothScrolling>
                </div>
                <div>
                  <h4 className="text-lg text-gray-300 font-thin tracking-tight">
                    <SmoothScrolling>
                      MetroSport
                    </SmoothScrolling>
                  </h4>
                  <h3 className="text-xs text-gray-100 font-semibold tracking-wider">
                    <SmoothScrolling>
                      Sales Associate
                    </SmoothScrolling>
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="text-lg text-gray-300 font-thin tracking-tight">
                  <SmoothScrolling>
                    2013
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
              className="flex justify-between items-center border-b border-slate-800 py-4"
            >
              <div className="flex items-center justify-betwen">
                <SmoothScrolling>
                  <div className="flex items-center pl-2 h-12 w-12 bg-zinc-700 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                    </svg>
                  </div>
                </SmoothScrolling>
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
              className="flex justify-between items-center border-b border-slate-800 py-4"
            >
              <div className="flex items-center justify-betwen">
                <div>
                  <SmoothScrolling>
                    <div className="flex items-center pl-2 h-12 w-12 bg-zinc-700 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                      </svg>
                    </div>
                  </SmoothScrolling>
                </div>
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
              className="flex justify-between items-center border-b border-slate-800 py-4"
            >
              <div className="flex justify-between items-center">
                <div>
                  <SmoothScrolling>
                    <div className="flex items-center pl-2 h-12 w-12 bg-zinc-700 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                      </svg>
                    </div>
                  </SmoothScrolling>
                </div>
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
        <SmoothScrolling>
          <Marquee className="bg-zinc-900 h-28">
          <div className="flex justify-between ">
            <div className="mx-8 py-4">
              <h3 className="text-5xl">Javascript</h3>
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
        </SmoothScrolling>
      </section>
    </>
  )
}
