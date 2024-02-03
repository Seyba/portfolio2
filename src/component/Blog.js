import React from 'react'
import { Link } from 'react-router-dom'

export const Blog = () => {
    const blogs = [
        {id:'a1b', image: '/images/boatNreadSea.jpeg', link: '/blog', content:'Developers who change the web with dynamic contents', date: 'feb, 3rd 2023'},
        {id: 'a2b', image: '/images/bigPurple.jpeg', link: '/blog', content:'Web design, Users experiences', date: 'December, 6th 2023'},
        {id: 'a3b', image: '/images/design.jpg', link: '/blog', content:'Integrating User Interface with backend content', date: 'July, 20th 2023'}
    ]
  return (
    <div>
        <h2>I Share my thoughts on design</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-3 md:grid-cols-2">
            {
                blogs?.map((blog) => {
                    return(
                        <div key={blog.id} className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img src={blog.image} alt="blog" className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
                            </div>
                            <div className="bg-zinc-800 p-8">
                                <Link to={`${blog.link}`}>Design</Link>
                                <div>{blog.content}</div>
                                <p>{blog.date}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        
    </div>
  )
}
