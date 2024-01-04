import React, {useState } from 'react'

export const Home = () => {
  const [texts, setTexts] = useState(['innovative', 'talented','powerful','creative'])

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
              </span> 
            digital studio.</h1>
            
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
