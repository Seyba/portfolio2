import { useContext } from "react"
import { Link, useParams } from "react-router-dom"
import { Banner } from "../component/Banner"
import { PortfolioContext } from "../context/portfolioContext"
import { ContactPartial } from "../component/ContactPartial"
import { ContactForm } from "../component/ContactForm"

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
            <Banner/>
            <section className="mt-6 py-6 md:grid grid-cols-1 gap-4 mb-4 mx-4 md:mx-32 lg:mx-60 xl:mx-80">
                <div className="bg-dark  mb-4">
                    <div className="my-12">
                        <img src={img} alt="project" className="max-w-full h-auto rounded-t-md"/>
                    </div>
                    <div className="mb-6">
                        <h4 className="text-lg font-semibold py-2">Summary</h4>
                        <p className="text-base py-2 font-light text-gray-300 tracking-wide leading-6">
                            Discover how I give projects a fresh visual start. 
                            With over 50 team members, 5000+ users and 27M, 
                            it was time to replace the outdated look with a design that matched clients and users ambitions.
                        </p>
                        <p className="text-base py-2 font-light text-gray-300 tracking-wide leading-6">
                            {summary}
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold py-2">What I've done</h4>
                        <p className="text-base py-2 font-light text-gray-300 tracking-wide leading-6">1. Strategic Discovery</p>
                        <p className="text-base py-2 font-light text-gray-300 tracking-wide leading-6">2. Web application redesign & optimization</p>
                        <p className="text-base py-2 font-light text-gray-300 tracking-wide leading-6">3. Mobile application & optimization</p>
                        <p className="text-base py-2 font-light text-gray-300 tracking-wide leading-6">4. Landing page redesign & optimization</p>
                        <p className="text-base py-2 font-light text-gray-300 tracking-wide leading-6">5. Component-based UI-kit</p>
                    </div>

                    <h4 className="text-lg font-semibold py-2">Tech Stacks</h4>
                    <ol>
                        {
                            techStack.map((stack, i) => <li className="text-base py-2 font-light text-gray-300 tracking-wide leading-6">{i+1}. { stack}</li>)
                        }  
                    </ol>
                    
                    <div>
                        <ContactForm/>
                    </div>
                    
                    <h3 className="text-white font-semibold"></h3>
                    
                    <h4 className="text-red-600"></h4> 
                    <h4 className="text-red-600"></h4>                   
                </div>
            </section>
            <div>
                <ContactPartial/>
            </div>
        </div>
    )
}