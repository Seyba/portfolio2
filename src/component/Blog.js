import React from 'react'
import { Link } from 'react-router-dom'

export const Blog = () => {
    const blogs = [
        {id:'a1b', image: '/images/boatNreadSea.jpeg', link: '/blog', content:'Developers who change the web with dynamic contents', date: 'Feb, 3rd 2023'},
        {id: 'a2b', image: '/images/bigPurple.jpeg', link: '/blog', content:'Web design, Users experiences', date: 'Dec, 6th 2023'},
        {id: 'a3b', image: '/images/design.jpg', link: '/blog', content:'Integrating User Interface with backend content', date: 'Jul, 20th 2023'}
    ]
  return (
    <div>
        <div className="mt-4 flex justify-center">
            <p className="text-base font-light">From Blog</p>
        </div>
        <div className="flex justify-center mx-4">
            <h2 className="text-5xl text-center font-bold py-12">I Share my thoughts on design</h2>
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-3 md:grid-cols-2">
            {
                blogs?.map((blog) => {
                    return(
                        <div key={blog.id} className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img src={blog.image} alt="blog" className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
                            </div>
                            <div className="bg-zinc-800 p-8">
                                <Link to={`${blog.link}`}>
                                    <button className="bg-zinc-300 py-2 px-6 rounded-md text-zinc-900 font-bold text-sm">
                                        Code
                                    </button>
                                </Link>
                                <div>
                                    <h4 className="text-xl font-semibold my-4">{blog.content}</h4>
                                </div>
                                <div className="mt-8">
                                    <p className="text-sm font-thin text-zinc-500">{blog.date}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        
    </div>
  )
}
