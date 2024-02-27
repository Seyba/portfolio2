import { useContext } from "react"
import { Link, useParams } from "react-router-dom"
import { Banner } from "../component/Banner"
import { PortfolioContext } from "../context/portfolioContext"

export const Project = (props) => {
    const ctx = useContext(PortfolioContext)
    const { projectData } = ctx
    const params = useParams()
    const { id } = params
    const idx = projectData.findIndex(i => i.id === id)
    const project = projectData[idx]

    const { title, name, address, img } = project
    return(
        <div className="py-8">
            <Banner/>
            <section className="mt-6 py-6 md:grid grid-cols-1 gap-4 mb-4 mx-4 md:mx-32 lg:mx-60 xl:mx-80">
                <div className="bg-dark  mb-4">
                    <div className="my-12">
                        <img src={img} alt="project" className="max-w-full h-auto rounded-t-md"/>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold py-2">Summary</h4>
                        <p className="text-base font-light text-gray-300 tracking-wide leading-6">
                            Discover how we gave this startup a fresh visual start. 
                            With over 50 team members, 5000+ users and 27M, 
                            it was time to replace their outdated look with a design that matched their ambitions.
                        </p>
                        <p className="text-base font-light text-gray-300 tracking-wide leading-6">
                            Fortun is the Berlin-based Series A startup on its way to becoming the leading finance platform for SMEs, 
                            freelancers, and self-employed persons.
                        </p>
                    </div>
                    <h3 className="text-white font-semibold"></h3>
                    <h4>Title</h4>
                    
                    <h4 className="text-red-600"></h4> 
                    <h4 className="text-red-600"></h4>                   
                </div>
            </section>
        </div>
    )
}