import React, {useState } from 'react'

export const Home = () => {
  const [texts, setTexts] = useState(['innovative', 'talented','powerful','creative'])

  const getText = () => {
    const texts = ['innovative', 'talented','powerful','creative']
    const idx = Math.floor(Math.random() * texts.length)
    // const rightText = () => {
    //   return texts[idx]
    // }
    return texts[idx]
    setInterval(() => texts[idx],4000)
  }
  getText()
  
  return (
    <div>
      <div className="home__hero flex justify-around">
        <div>
          <h4 className="text-xl font-semibold text-center py-4">Digital experience, made better</h4>
          <div>
            <h1 className="scroller">We are a
              <span>
                <h1>{texts[0]}</h1>
                <h1>{texts[1]}</h1>
                <h1>{texts[2]}</h1>
                <h1>{texts[3]}</h1>
              </span> </h1>
            <h1>digital studio.</h1>
            <div>
              We are a <span className="text-slider">{texts[0]}</span> digital studio.
              <p className="text-3xl text-blue-200"></p>
            </div>
          </div>
          {/* <div className="scroller">
            <span>
              {texts[0]}
              <br/>
              {texts[1]}
              <br />
              {texts[2]}
              <br/>
              {texts[3]}
            </span>
          </div> */}
        </div>
      </div>
    </div>
  )
}
