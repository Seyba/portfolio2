import { Link, useParams } from "react-router-dom"
import { Banner } from "../component/Banner"

export const Project = (props) => {
    const params = useParams()
    const { id } = params
    const { title, name, address, image } = props
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
                </div>
            </section>
        </div>
    )
}