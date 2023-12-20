import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className="p-8">
        <div className="md:grid grid-cols-2 gap-32">
            <div className="">
                <h4>Seyba</h4>
                <p>I'am an award UI/UX designer, web developer and product manager based in New York, USA.</p>
                <div className="">
                    <ul className="flex">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
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
    </footer>
  )
}
