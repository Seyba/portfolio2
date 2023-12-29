import React from 'react'
import Meta from '../component/Meta'
import { BreadCrumb } from '../component/BreadCrumb'

export const Blog = () => {
  return (
    <>
      
      <div>
        <h2>I design awesome things.</h2>
      </div>
      <Meta title={"Blog"}/>
      <BreadCrumb title="Blog"/>
    </>
  )
}
