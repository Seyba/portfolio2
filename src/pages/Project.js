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

    const { title, name, address, image } = project
    return(
        <div className="py-8">
            <Banner/>
            <section className="md:grid grid-cols-1 gap-4 mb-4 mx-6 md:mx-32">
                <div className="bg-dark  mb-4">
                    <h3 className="text-white font-semibold">Project {id} </h3>
                    <h4>Title</h4>
                    <div className="w-60 h-60">
                        <Link to={`${id}`}>
                            project image
                        </Link>
                    </div>
                    <h4 className="text-red-600">{title} </h4> 
                    <h4 className="text-red-600">{name} </h4>                   
                </div>
            </section>
        </div>
    )
}