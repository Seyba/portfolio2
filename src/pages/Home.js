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
          <h4 className="text-xl font-semibold text-center py-4">Digital experience, made better</h4>
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
          <h2 className="flex justify-center text-gray-300 text-2xl font-light tracking-wide">I love user-focused design, thoughtfully crafted brands</h2>
        </div>
      </div>
    </div>
  )
}
