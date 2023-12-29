import React from 'react'
import Meta from '../component/Meta'
import { BreadCrumb } from '../component/BreadCrumb'

export const About = () => {
  return (
    <>
      <div className="flex justify-around mb-4">
        <div>
          <h2 className="text-5xl font-semibold text-center py-2">About Seyba</h2>
          <p className="text-gray-300 text-center font-light text-3xl py-2 leading-8 tracking-wider">A creative web developer like no other</p>
        </div>
      </div>
      <Meta title={"About"}/>
      <BreadCrumb title="About"/>
    </>
  )
}
