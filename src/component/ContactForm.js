import React, {useRef } from 'react'
import { SmoothScrolling } from './SmoothScrolling'
import { useNavigate } from 'react-router-dom'
//import emailJs from 'emailjs-com'
import emailjs from '@emailjs/browser'


const api_key = process.env.REACT_APP_API_KEY
const apiPublicKey = process.env.REACT_APP_PUBLIC_KEY
const templateId = process.env.REACT_APP_TEMPLATE_ID
const serviceId = process.env.REACT_APP_SERVICE_ID 

console.log('api public key', serviceId)
export const ContactForm = () => {
  const form = useRef()
  const navigate = useNavigate()


  const sendEmail = e => {
    e.preventDefault()
    emailjs.sendForm(serviceId, templateId, form.current, {publicKey: apiPublicKey})
      .then((result) => { 
        console.log('success!!!', result.text)
        navigate('/')
      }, (error) => {
        console.log('FAILED...', error.text)
      })
      
  }

  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <form ref={form} onSubmit={sendEmail}>
        <SmoothScrolling>
          <div className="px-3">
            <div>
              <h3 className="text-2xl font-light tracking-wider py-4 leading-6 text-center">Contact Me</h3>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-center tracking-wider">Let's start your project</h4>
            </div>
            <label htmlFor="name" className="block text-sm font-semibold mt-2 uppercase leading-6 text-gray-100">
              Name 
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="block w-full rounded-sm bg-zinc-800 border-0 py-2.5 px-2 text-slate-100 shadow-sm ring-1 ring-gray-700 placeholder:text-slate-100  focus:ring-slate-100 sm:text-sm sm:leading-6"
              />
            </div>
            <label htmlFor="email" className="block text-sm uppercase font-semibold mt-2 leading-6 text-gray-100">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-sm bg-zinc-800 border-0 py-2.5 px-2 text-slate-100 shadow-sm ring-1 ring-gray-700 placeholder:text-slate-100  focus:ring-slate-100 sm:text-sm sm:leading-6"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold pt-2 uppercase leading-6 text-gray-100">
                Message
              </label>
              <div className="mt-2">
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="block w-full rounded-sm bg-zinc-800 border-0 py-2.5 px-2 text-slate-100 shadow-sm ring-1 ring-gray-700 placeholder:text-slate-100  focus:ring-slate-100 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="flex w-1/2 justify-center uppercase rounded-sm bg-zinc-600 px-3 py-3.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-zinc-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500"
              >
                Send Request
              </button>
            </div>
          </div>
        </SmoothScrolling>
      </form>
    </div>
  )
}
