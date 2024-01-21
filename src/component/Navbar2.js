import React, {Fragment, useRef, useState} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'


export const Navbar2 = (props) => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [menuWrapperOpen, setMenuWrapperOpen] = useState(false)
    const [openCart, setOpenCart] = useState(false)
    const cancelButtonRef = useRef(null)
    const [open, setOpen] = useState(true)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
        setMenuWrapperOpen(!menuWrapperOpen)
    }

    const toggleCart = () => {
       setOpen(!open)
    }
  return (
    <>
        <header className="">
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
                        <div className="flex content-between items-center" onClick={toggleCart}>
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
        <Transition.Root show={!open} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-900  transition-opacity" />
                </Transition.Child>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-sm bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-slate-950 border-b border-gray-800 flex p-4 justify-between ">
                                    <div>
                                        <h3 className="text-slate-50 text-lg font-bold">Your Cart</h3>
                                    </div>
                                    <div className="text-slate-50">
                                        <Link onClick={toggleCart}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </Link>
                                        
                                    </div>
                                </div>
                                <div className="bg-slate-950 py-8 px-4">
                                    <div className="py-16">
                                        <div className="flex justify-center">
                                            <p className="text-md font-bold text-gray-400">
                                                 No Items Found.
                                            </p>
                                        </div>
                                        <div className="flex justify-center">
                                            <Link onClick={toggleCart} className="text-slate-300 mt-4 tex-md font-bold bg-gray-900 hover:bg-gray-800 py-2 px-6 rounded-md">Go To Home</Link>
                                        </div>
                                    </div>
                                    
                                    
                                </div>
                                
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
        <div className={`menu-wrapper ${menuWrapperOpen? "menu-wrapper-open" : "" }`}>
            <ul>
                <li>
                    <Link onClick={toggleMenu} className="text-slate-50" to="/">Home</Link>
                </li>
                <li>
                    <Link onClick={toggleMenu} className="text-slate-50" to="/about">About</Link>
                </li>
                <li>
                    <Link onClick={toggleMenu} className="text-slate-50" to="/blog">Blog</Link>
                </li>
                <li>
                    <Link onClick={toggleMenu} className="text-slate-50" to="/contact">Contact</Link>
                </li>
                <li>
                    <Link onClick={toggleMenu} className="text-slate-50" to="/projects">Projects</Link>
                </li>
            </ul>

        </div>
    </>
  )
}
