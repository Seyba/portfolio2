import React from 'react'
import Meta from '../component/Meta'
import { BreadCrumb } from '../component/BreadCrumb'

export const Projects = () => {
  return (
    <>
        <div>  
            
            <div className="banner-wrapper">
                <div className="banner">
                    <div>
                        <h2 className="text-5xl font-semibold text-center py-2">Projects</h2>
                        <p className="text-gray-300 text-center font-light text-3xl py-2 leading-8 tracking-wider">I design awesome things.</p>
                    </div>
                    <Meta title={"Projects"}/>
                    <BreadCrumb title="Projects"/>
                </div>
            </div>
                
        </div>
    </>
  )
}
