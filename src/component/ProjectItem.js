import { Link } from "react-router-dom"

export const ProjectItem = (props) => {
    const { id, title, img, desc, url} = props.projects
    return(
        <div>
            <div className="project-bg rounded-lg mb-3 p-8 ">
                <Link to={`/projects/project/${id}`}>
                    <img 
                        src={img} 
                        alt={id}
                        className="max-w-full h-auto"
                    />
                </Link>
                <h3 className="text-gray-400 text-lg font-normal text-center">{title}</h3>
                <h3 className="text-slate-950 text-xl font-semibold text-center">{desc}</h3>
            </div>
        </div>
    )
}