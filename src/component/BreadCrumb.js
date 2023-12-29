import React from 'react'
import { Link } from 'react-router-dom'

export const BreadCrumb = (props) => {
    const { title } = props
  return (
    <div className="flex justify-around">
        <div className="flex breadcrumb">
            <div className="flex items-center text-center">
                <Link className="font-semibold" to="/">
                    Home 
                </Link> 
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="mx-1 bi bi-caret-right-fill" viewBox="0 0 16 16">
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                    </svg>
                </div>
                <div className="text-slate-300 font-semibold">
                    {title}
                </div>
                    
            </div>
        </div>
    </div>
  )
}
