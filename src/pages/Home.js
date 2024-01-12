import React, {useState, useEffect } from 'react'

export const Home = () => {
  const [rightText, setRightText] = useState('')
  const [msgIdx, setMsgIdx] = useState(0)

  const text = ['innovative', 'talented','powerful','creative']
  const msg = ['intelligent', 'skilled', 'dependable','collaborative']


  useEffect(() => {
    const interval = setInterval(() => {
      const idx = Math.floor(Math.random() * text.length)

      setMsgIdx(previous => {
        if(previous === msg.length) {
          return 0;
        } 
        if(previous > msg.length) {
          return 0;
        }
        return previous + 1;
      })
      setRightText(text[idx])
      
      
    }, 4000)

    return () => clearInterval(interval)
  })
  return (
    <div>
      <div className="home__hero flex justify-around">
        <div>
          <h4 className="text-lg font-semibold tracking-wide text-center py-4">Digital experience, made better</h4>
        </div>
      </div>
      <div >
        <div className="flex justify-center">
          <div className="content-wrap">
            <h1 className="display-1 for-rotator">We're a</h1>
            <div className="words-wrap ">
              {
                (msgIdx === 4) ? <h1 className="display-1 ">powerful</h1> : <h1 className="display-1">{msg[msgIdx]}</h1>
              }
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <h1 className="display-1 for-rotator">Digital Studio.</h1>
        </div>
        <div className="mt-6">
          <h2 className="flex justify-center text-gray-300 text-2xl font-light tracking-wider">I love user-focused design, thoughtfully crafted brands</h2>
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <div>
          <button className="sBtn">Enquire Now</button>
        </div>
        <div>
          <button className="sBtn">View My Projects</button>
        </div>
        
      </div>
      <div className="mt-6">
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
  )
}
