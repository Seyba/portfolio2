import React from 'react'
import Meta from '../component/Meta'
import { BreadCrumb } from '../component/BreadCrumb'
import { ProjectItem } from '../component/ProjectItem'

export const Projects = () => {
    const projectData = [
        {
            id: 'bouti',
            name: 'Boutique',
            title:'Beauty ecommerce website',
            address: 'https://boutique-nay4.onrender.com/',
            img: '/images/boutique.png'
        },
        {
            id: 'tictac',
            name: 'Tic Tac Toe',
            title:'Classic Javascript Tic Tac Toe Game',
            address: 'https://seyba.github.io/TicTacToe/',
            img: '/images/tictactoe.png'
        },
        {
            id: 'crypto',
            name: 'Crypto App',
            title:'Simple Crypto Currencies App',
            address: 'https://comfy-smakager-0be15f.netlify.app/',
            img: '/images/crypto.png'
        },
        {
            id: 'star',
            name: 'Star Wars',
            title:'Star Wars Starships App',
            address: 'https://ephemeral-dodol-c5b7d0.netlify.app/',
            img: '/images/starwars.png'
        },
        {
            id: 'tweet',
            name: 'Tweet',
            title:'Tweet App',
            address: 'https://seyba-twitter-app.onrender.com/tweets',
            img: '/images/tweet.png'
        },
        {
            id: 'devshop',
            name: 'DevShop',
            title:'General Merchandise Ecommerce Site',
            address: 'https://devshop-n1ez.onrender.com/',
            img: '/images/devShop.png'
        }
    ]
  return (
    <>
        <div>  
            
            <div className="banner-wrapper">
                <div className="banner">
                    <div className="py-2">
                        <h2 className="text-5xl font-semibold text-center py-2">Projects</h2>
                        <p className="text-gray-300 text-center font-light text-3xl py-2 leading-8 tracking-wider">I design awesome things.</p>
                    </div>
                    <Meta title={"Projects"}/>
                    <BreadCrumb title="Projects"/>
                    <div className="flex justify-center py-2">
                        <div>
                            <svg width="50px" height="100px" viewBox="0 0 247 300" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{fillRule:"evenodd" ,clipRule:"evenodd", strokeLinecap:"round" ,strokeLinejoin:'round', strokeMiterlimit:'1.5'}}>
                                <path  className="wheel" d="M123.359,79.775l0,72.843" style={{fill:"none" ,stroke:"#fff" ,strokeWidth:"15px"}} />
                                <path  className="scroll" d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z" style={{fill:"none" ,stroke:"#fff" ,strokeWidth:"15px"}} />
                            </svg>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="grid grid-cols-1 mx-10 md:mx-32 md:grid-cols-2 gap-4">
                {projectData.map(project => <ProjectItem key={project.id} projects={project}/>)}
            </div>
        </div>
    </>
  )
}
