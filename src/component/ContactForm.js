import React from 'react'

export const ContactForm = () => {
  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form>
        <div className="px-2">
          <h3>contact Me</h3>
          <h4>Let's start your project</h4>
          <label htmlFor="name" className="block text-sm font-medium uppercase leading-6 text-gray-100">
            Name 
          </label>
          <div className="mt-2">
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className="block w-full rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <label htmlFor="email" className="block text-sm uppercase font-medium leading-6 text-gray-100">
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="block w-full rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium uppercase leading-6 text-gray-100">
              Message
            </label>
            <div className="mt-2">
              <textarea
                id="message"
                name="message"
                rows={3}
                className="block w-full rounded-sm border-0 py-1.5 text-gray-00 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="flex w-full justify-center uppercase rounded-sm bg-zinc-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Send Request
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
