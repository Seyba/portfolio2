import { Link } from "react-router-dom"

export const ProjectItem = (props) => {
    const { id, name, title, address, img} = props.projects
    return(
        <div>
            <div className="project-bg rounded-sm mb-3 p-8 ">
                <Link to={`/projects/project/${id}`}>
                    <img 
                        src={img} 
                        alt={id}
                        className="max-w-full h-auto"
                    />
                </Link>
                <h3 className="text-white text-lg font-normal">{name}</h3>
                <h3 className="text-gray-400 text-xl font-semibold">{title}</h3>
                <button className="mt-6 bg-slate-700 rounded-md px-6 font-light py-4">
                    <Link to={`${address}`}>
                        VIEW PROJECT
                    </Link> 
                </button>
                     
            </div>
        </div>
    )
}