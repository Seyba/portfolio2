import React from 'react'
import { Link } from 'react-router-dom'

export const Blog = () => {
    const blogs = [
        {image: '/images/blog.jpg', link: '/blog', content:'Developers who change the web with dynamic contents', date: 'feb, 3rd 2023'},
        {image: '/images/blog.jpg', link: '/blog', content:'Web design, Users experiences', date: 'December, 6th 2023'},
        {image: '/images/blog.jpg', link: '/blog', content:'Integrating User Interface with backend content', date: 'July, 20th 2023'}
    ]
  return (
    <div>
        <h2>I Share my thoughts on design</h2>
        {
            blogs?.map((idx, blog) => {
                return(
                    <div key={idx}>
                        <img src={blog.image} alt="blog"/>
                        <Link to={`${blog.link}`}>Design</Link>
                        <div>{blog.content}</div>
                        <p>{blog.date}</p>
                    </div>
                )
            })
        }
    </div>
  )
}
