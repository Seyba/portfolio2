import { useContext } from "react"
import { Link, useParams } from "react-router-dom"
import { Banner } from "../component/Banner"
import { PortfolioContext } from "../context/portfolioContext"
import { ContactPartial } from "../component/ContactPartial"
import { ContactForm } from "../component/ContactForm"
import Meta from "../component/Meta"
import { BreadCrumb } from "../component/BreadCrumb"
import { SmoothScrolling } from "../component/SmoothScrolling"

export const Project = (props) => {
    const ctx = useContext(PortfolioContext)
    const { projectData } = ctx
    const params = useParams()
    const { id } = params
    const idx = projectData.findIndex(i => i.id === id)
    const project = projectData[idx]

    const { title, name, address, img, summary, techStack } = project
    return(
        <div className="py-8">
            <div className="banner-wrapper">
                <div className="banner">
                    <div className="py-2">
                        <h2 className="text-5xl font-semibold text-center py-2 animate-fade-down animate-once animate-duration-800 animate-ease-in-out">Single Project</h2>
                        <p className="text-gray-300 text-center font-light text-3xl py-2 leading-8 tracking-wider animate-fade-down animate-once animate-duration-800 animate-delay-[500ms] animate-ease-in-out">{title}</p>
                    </div>
                    <Meta title={"Project"}/>
                    <BreadCrumb title="Project"/>
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

            <section className="mt-6 py-6 md:grid grid-cols-1 gap-4 mb-4 mx-4 md:mx-32 lg:mx-60 xl:mx-80">
                <div className="bg-dark  mb-4">
                    <div className="my-12">
                        <img src={img} alt="project" className="max-w-full h-auto rounded-t-md"/>
                    </div>
                    <div className="mb-6">
                        <h4 className="text-lg font-semibold py-2"><SmoothScrolling>Summary</SmoothScrolling></h4>
                        <SmoothScrolling>    
                            <p className="text-base py-2 font-light text-gray-300 tracking-wide leading-6">
                                
                                Discover how I give projects a fresh visual start. 
                                With many years hands-on training projects, update or test
                                applications and websites to an intuitive user experience look with a design that match clients and users ambitions.
                                
                            </p>
                        </SmoothScrolling>
                        <SmoothScrolling>
                            <p className="text-base py-2 font-light text-gray-300 tracking-wide leading-6">
                                {summary}
                            </p>
                        </SmoothScrolling>
                    </div>

                    <h4 className="text-lg font-semibold py-2"><SmoothScrolling>Tech Stacks</SmoothScrolling> </h4>
                    <SmoothScrolling>
                        <ol>
                            {
                                techStack.map((stack, i) => <li key={i}className="text-base py-2 font-light text-gray-300 tracking-wide leading-6">{i+1}. { stack}</li>)
                            }  
                        </ol>
                    </SmoothScrolling>
                    <div className="mt-32">
                        <ContactForm/>
                    </div>
                </div>
            </section>
            <div>
                <ContactPartial/>
            </div>
        </div>
    )
}