import React, { useState} from 'react'
import { Link } from 'react-router-dom'

export const Navbar2 = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [menuWrapperOpen, setMenuWrapperOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
        setMenuWrapperOpen(!menuWrapperOpen)
    }
  return (
    <>
        <header>
            <nav>
                <div className="navigation">
                    <div className="burger-menu" onClick={toggleMenu}>
                        <div className={`line-one ${menuOpen ? 'one-open': ''}`}></div>
                        <div className={`line-two ${menuOpen ? 'two-open': ''}`}></div>
                    </div>
                    <div>
                        <h3 className="heading text-slate-50">SEYBA</h3>
                    </div>
                    <div>
                        <div className="flex content-between items-center">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-slate-50">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                </svg>
                            </div>
                            <div>
                                <div className="rounded-full h-6 w-6 bg-slate-50 ">
                                    <h5 className="text-sm text-center text-slate-950">3</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        
        </header>
        <div className={`menu-wrapper ${menuWrapperOpen? "menu-wrapper-open" : "" }`}>
            <ul>
                <li>
                    <Link className="text-slate-50" to="/">Home</Link>
                </li>
                <li>
                    <Link className="text-slate-50" to="/about">About</Link>
                </li>
                <li>
                    <Link className="text-slate-50" to="/blog">Blog</Link>
                </li>
                <li>
                    <Link className="text-slate-50" to="/contact">Contact</Link>
                </li>
            </ul>

        </div>
    </>
  )
}
