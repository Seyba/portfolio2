import { Link } from "react-router-dom"
import { Banner } from "./Banner"
import { SmoothScrolling } from "./SmoothScrolling"
import Meta from "./Meta"
import { BreadCrumb } from "./BreadCrumb"

export const ProjectItem = (props) => {
    const { id, name, title, address, img} = props.projects
    return(
        <> 
            <div className="flex justify-center md:p-4 px-0">
                <SmoothScrolling>
                    <div className="project-bg rounded-sm mb-3 p-8 ">
                        <Link to={`/projects/project/${id}`}>
                            <img 
                                src={img} 
                                alt={id}
                                className="max-w-full h-auto"
                            />
                        </Link>
                        <h3 className="text-white text-2xl mt-6 py-2 tracking-widest font-semibold">{name}</h3>
                        <h3 className="text-gray-500 text-lg font-light leading-9 tracking-tight">{title}</h3>
                        <button className="mt-6 bg-slate-700 rounded-md px-6 font-light py-4 hover:text-slate-40    0 hover:bg-slate-800">
                            <Link to={`${address}`}>
                                VIEW PROJECT
                            </Link> 
                        </button>
                            
                    </div>
                </SmoothScrolling>
            </div>
        </>
    )
}