import React from 'react'
import { Link } from 'react-router-dom'

export const BreadCrumb = (props) => {
    const { title } = props
  return (
    <div className="breadCrumb">
        <p className="text-center">
        <Link to="/">
            Home &nbsp;
        </Link> { " "} 
        / {title}
        </p>
    </div>
  )
}
