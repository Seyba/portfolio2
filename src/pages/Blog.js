import React from 'react'
import Meta from '../component/Meta'
import { BreadCrumb } from '../component/BreadCrumb'

export const Blog = () => {
  return (
    <>
      <div className="flex justify-around mb-4">
        <div>
          <h2 className="text-5xl font-semibold text-center py-2">Blog</h2>
          <p className="text-gray-300 text-center font-light text-3xl py-2 leading-8 tracking-wider">I design awesome things.</p>
        </div>
      </div>
      <Meta title={"Blog"}/>
      <BreadCrumb title="Blog"/>
    </>
  )
}
