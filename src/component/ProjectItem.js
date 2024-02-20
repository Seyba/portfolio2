import { Link } from "react-router-dom"

export const ProjectItem = (props) => {
    const { id, title, img, desc, url} = props.projects
    return(
        <div>
            <div className="bg-gray-900  mb-3">
                <Link to={`/projects/project/${id}`}>
                    <img 
                        src={img} 
                        alt={id}
                        className="h-1/3 w-1/3"
                    />
                </Link>
                <h3 className="text-gray-400 text-lg font-normal text-center">{title}</h3>
                <h3 className="text-slate-950 text-xl font-semibold text-center">{desc}</h3>
            </div>
        </div>
    )
}