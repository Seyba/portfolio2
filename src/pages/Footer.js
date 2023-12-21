import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className="p-8">
        <div className="footer-wrapper">
            <div className="md:grid grid-cols-2 gap-32">
                <div className="">
                    <div className="py-4">
                        <h4 className="font-semibold text-3xl">SEYBA</h4>
                    </div>
                    <div>
                        <p className="text-lg leading-8 py-4">I'am an award UI/UX designer, web developer and product manager based in New York, USA.</p>
                    </div>
                    <div className="py-4">
                        <ul className="flex">
                            <li className="pr-4">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="pr-4">
                                <Link to="/">About</Link>
                            </li>
                            <li className="pr-4">
                                <Link to="/">Blog</Link>
                            </li>
                            <li className="pr-4 ">
                                <Link to="/">Home</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p>
                        &copy; {new Date().getFullYear()}; Powered by <Link className="text-white" to="https://github.com/Seyba">SEYBA</Link>
                        </p>
                    </div>
                </div>
                <div className="">
                    <div>
                        <p>mmohmo@yahoo.com</p>
                        <p>+1 (646) 479 9306</p>
                    </div>
                    
                </div>
            </div>
        </div>
    </footer>
  )
}
