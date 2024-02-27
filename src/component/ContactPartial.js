import React from 'react'
import { Link } from 'react-router-dom'
import { SmoothScrolling } from './SmoothScrolling'

export const ContactPartial = () => {
  return (
    <div className="mt-16 px-16 flex justify-center py-24 bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900">
        <SmoothScrolling>
          <div className="max-w-2xl text-center">
            <h3 className="text-base font-semibold mb-4 tracking-widest ">Stay in touch</h3>
            <h2 className="text-6xl font-bold tracking-wider py-2">Ready to talk</h2>
            <p className="py-4 text-2xl font-thin leading-relaxed tracking-wider">Feel free to contact me</p>
            <div className="flex justify-center">
              <Link className="sBtn" to="/contact">
                Talk to me
              </Link>
            </div>
          </div>
        </SmoothScrolling>
    </div>
  )
}
