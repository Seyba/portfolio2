import React, {useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

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
      <div className="flex justify-center py-6 mt-6">
        <div className="flex ">
          <div className="mr-2">
            <Link to="/" className="sBtn">Enquire Now</Link>
          </div>
          <div className="ml-2">
            <Link to="/" className="sBtn">View My Projects</Link>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
              <g fill="#000000" filRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" font-size="none" textAnchor="none" style={{mixBlendMode: "normal"}}>
                <path d="M0,256v-256h256v256z" id="bgRectangle"></path>
              </g>
                <g fill="#ffffff" filRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" font-size="none" textAnchor="none" style={{mixBlendMode: "normal"}}>
                <g transform="scale(3.2,3.2)">
                  <path d="M74.01,62.5c-1.795,0 -3.517,-0.852 -4.607,-2.277l-11.596,-15.163l-11.596,15.163c-1.09,1.426 -2.812,2.277 -4.607,2.277h-3.428l16.484,-21.556l-16.399,-21.444h3.428c1.795,0 3.518,0.851 4.607,2.276l11.51,15.052l11.51,-15.052c1.09,-1.426 2.812,-2.276 4.607,-2.276h3.428l-16.397,21.444l16.484,21.556z" fill="#ffffff">
                  </path>
                  <path d="M76.341,20l-16.017,20.944l16.102,21.056h-2.416c-1.651,0 -3.207,-0.769 -4.21,-2.081l-11.993,-15.682l-11.993,15.682c-1.003,1.312 -2.56,2.081 -4.21,2.081h-2.417l16.102,-21.056l-16.016,-20.944h2.417c1.651,0 3.207,0.769 4.21,2.081l11.907,15.571l11.907,-15.571c1.003,-1.312 2.559,-2.081 4.21,-2.081h2.417M78.364,19h-2.024h-2.417c-1.949,0 -3.82,0.925 -5.005,2.473l-11.111,14.532l-11.113,-14.532c-1.184,-1.548 -3.055,-2.473 -5.005,-2.473h-2.417h-2.024l1.229,1.607l15.553,20.337l-15.637,20.449l-1.23,1.607h2.024h2.417c1.949,0 3.82,-0.925 5.005,-2.473l11.198,-14.644l11.198,14.644c1.184,1.548 3.055,2.473 5.005,2.473h2.417h2.024l-1.229,-1.607l-15.639,-20.449l15.552,-20.337l1.229,-1.607z" fill="#66798f"></path><g><path d="M20,64.5c-10.201,0 -18.5,-8.594 -18.5,-19.156v-8.689c0,-10.562 8.299,-19.155 18.5,-19.155c10.201,0 18.5,8.593 18.5,19.154v7.845l-32,0.001v0.844c0,7.806 6.056,14.156 13.5,14.156c4.111,0 8.093,-2.067 10.653,-5.529c1.161,-1.571 2.86,-2.472 4.661,-2.472h1.711l0.204,0.204l0.134,0.268l-0.075,0.203c-2.717,7.373 -9.664,12.326 -17.288,12.326zM33.5,39.5v-2.846c0,-7.804 -6.056,-14.154 -13.5,-14.154c-7.444,0 -13.5,6.35 -13.5,14.155v2.845z" fill="#ffffff"></path><path d="M20,18c9.925,0 18,8.369 18,18.654v7.345l-32,0.001v1.344c0,8.082 6.28,14.656 14,14.656c4.376,0 8.446,-2.203 11.055,-5.732c1.016,-1.374 2.55,-2.269 4.259,-2.269h1.505c0,0.001 0,0.001 0,0.002c-2.644,7.175 -9.408,11.999 -16.819,11.999c-9.925,0 -18,-8.369 -18,-18.656v-8.689c0,-10.286 8.075,-18.655 18,-18.655M6,40h28v-3.346c0,-8.08 -6.28,-14.654 -14,-14.654c-7.72,0 -14,6.574 -14,14.654v3.346M20,17c-10.477,0 -19,8.817 -19,19.654v8.689c0,10.839 8.523,19.657 19,19.657c7.832,0 14.968,-5.085 17.758,-12.653l0.496,-1.346l-1.435,-0.002h-1.505c-1.961,0 -3.806,0.975 -5.063,2.675c-2.466,3.335 -6.298,5.326 -10.251,5.326c-7.168,0 -13,-6.126 -13,-13.656v-0.344l31,-0.001h1v-1v-7.345c0,-10.837 -8.523,-19.654 -19,-19.654zM7,39v-2.346c0,-7.529 5.832,-13.654 13,-13.654c7.168,0 13,6.125 13,13.654v2.346h-26z" fill="#66798f">
                  </path>
                </g>
                </g>
                </g>
            </svg>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
              <g fill="#ffffff" filRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" font-size="none" textAnchor="none" style={{mixBlendMode: "normal"}}><g transform="scale(10.66667,10.66667)"><path d="M22.105,7.553c-0.224,0.448 -0.523,0.723 -0.914,0.838c-0.614,0.183 -1.343,-0.052 -1.685,-0.253c-0.451,-0.265 -0.974,-0.667 -1.527,-1.092c-1.765,-1.358 -3.961,-3.046 -6.979,-3.046c-2.414,0 -3.654,1.239 -5.707,3.293l1.407,1.421c0.546,-0.425 4.031,-0.015 5.552,1.194c2.259,1.795 3.89,3.092 5.748,3.092c2.659,0 4.879,-1.741 5.94,-4.658zM16.192,15.391c-0.613,0.18 -1.343,-0.052 -1.685,-0.253c-0.451,-0.265 -0.974,-0.667 -1.527,-1.092c-1.766,-1.358 -3.962,-3.046 -6.98,-3.046c-2.414,0 -3.654,1.239 -5.707,3.293l1.407,1.421c0.545,-0.427 4.032,-0.014 5.552,1.194c2.259,1.795 3.89,3.092 5.748,3.092c2.659,0 4.879,-1.741 5.94,-4.658l-1.834,-0.789c-0.225,0.448 -0.523,0.722 -0.914,0.838z"></path></g></g>
            </svg>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
              <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode:" normal"}}><path d="M0,256v-256h256v256z" id="bgRectangle"></path></g><g fill="#000000" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}}><g transform="scale(5.12,5.12)"><path d="M45.27344,2.32422c-0.1875,-0.20703 -0.45703,-0.32422 -0.73828,-0.32422h-39.07031c-0.28125,0 -0.55078,0.11719 -0.73828,0.32422c-0.19141,0.20703 -0.28516,0.48438 -0.25781,0.76563l3.51953,39.42578c0.03516,0.41406 0.32422,0.75781 0.72266,0.875l16.01172,4.57031c0.08594,0.02734 0.17969,0.03906 0.27344,0.03906c0.09375,0 0.18359,-0.01172 0.27344,-0.03906l16.02344,-4.57031c0.39844,-0.11719 0.68359,-0.46094 0.72266,-0.875l3.51563,-39.42578c0.02734,-0.28125 -0.06641,-0.55859 -0.25781,-0.76562zM36.84766,15.91797h-18.8125l0.44922,5.08984h17.91016l-1.34375,15.04297l-10.05859,3.03906l-0.09766,-0.03125l-9.94141,-3.01172l-0.54297,-6.12891h4.87109l0.21094,2.37891l5.55859,1.16406l5.45703,-1.16406l0.58203,-6.4375h-17.04297l-1.32422,-14.80469h24.55859z"></path></g></g>
            </svg>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
              <g fill="#000000" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"  style={{mixBlendMode:" normal"}}><path d="M0,256v-256h256v256z" id="bgRectangle"></path></g><g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"  style={{mixBlendMode: "normal"}}><g transform="scale(5.12,5.12)"><path d="M39,40l-14,4l-14,-4l-3,-34h34c-1,11.33203 -2,22.66797 -3,34zM39.81641,8h-29.63281l2.6875,30.45313l12.12891,3.46875l12.12891,-3.46875zM16.80078,28h4l0.09766,2.5l4.10156,1.39844l4.10156,-1.39844l0.29688,-4.5h-8.79687l-0.20312,-4h9.20313l0.29688,-4h-13.79687l-0.30078,-4h18.30078l-0.5,8l-0.70312,11.5l-7.89844,2.60156l-7.89844,-2.60156z"></path></g></g>
            </svg>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
              <g fill="#000000" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"  style={{mixBlendMode:" normal"}}><path d="M0,256v-256h256v256z" id="bgRectangle"></path></g><g fill="#ffffff" fill-rule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"  style={{mixBlendMode: "normal"}}><g transform="scale(8,8)"><path d="M15.5,4c-4.136,0 -7.5,4.54862 -7.5,10.14063c0,2.72448 0.80866,5.18673 2.10742,7.00977c-0.19561,0.53634 -0.1173,1.13439 0.2098,1.60229c0.3271,0.4679 0.86188,0.74683 1.43278,0.74732c0.9665,0 1.75,-0.7835 1.75,-1.75c0,-0.9665 -0.7835,-1.75 -1.75,-1.75c-0.01759,0.00039 -0.03517,0.00104 -0.05273,0.00195c-1.04368,-1.48117 -1.69727,-3.55803 -1.69727,-5.86133c0,-4.489 2.468,-8.14062 5.5,-8.14062c2.17,0 4.04545,1.87403 4.93945,4.58203c0.772,0.228 1.53816,0.516 2.28516,0.875c-0.873,-4.292 -3.77661,-7.45703 -7.22461,-7.45703zM14.25,11.75c-0.9665,0 -1.75,0.7835 -1.75,1.75c0,0.9665 0.7835,1.75 1.75,1.75c0.74765,-0.00064 1.41231,-0.47619 1.6543,-1.18359c1.89562,-0.22634 4.12687,0.32691 6.16211,1.57813c3.849,2.368 5.89099,6.60114 4.45898,9.24414c-0.504,0.929 -1.39131,1.58539 -2.57031,1.90039c-1.215,0.325 -2.63031,0.26128 -4.07031,-0.13672c-0.556,0.533 -1.17408,1.02619 -1.83008,1.49219c1.417,0.558 2.86547,0.85352 4.23047,0.85352c0.761,0 1.49655,-0.08944 2.18555,-0.27344c1.722,-0.461 3.03955,-1.45686 3.81055,-2.88086c1.987,-3.669 -0.28297,-8.8993 -5.16797,-11.9043c-2.52568,-1.55461 -5.37334,-2.20261 -7.79101,-1.82031c-0.30654,-0.23865 -0.68378,-0.36852 -1.07227,-0.36914zM6.13672,16.13867c-2.904,2.974 -3.98388,6.82108 -2.42187,9.70508c0.772,1.424 2.08855,2.41986 3.81055,2.88086c0.689,0.185 1.4265,0.27344 2.1875,0.27344c2.076,0 4.3483,-0.6715 6.4043,-1.9375c2.63977,-1.62338 4.50508,-3.89626 5.35742,-6.2207c0.74586,-0.3431 1.15295,-1.15858 0.97887,-1.9609c-0.17407,-0.80233 -0.8825,-1.37578 -1.70348,-1.37894c-0.69123,0.00034 -1.31749,0.40753 -1.59826,1.03916c-0.28077,0.63163 -0.16344,1.36935 0.29943,1.88272c-0.75927,1.82634 -2.29688,3.65409 -4.37891,4.93555c-2.352,1.446 -4.9793,1.98159 -7.0293,1.43359c-1.179,-0.315 -2.06731,-0.97239 -2.57031,-1.90039c-0.941,-1.737 -0.37506,-4.15906 1.21094,-6.28906c-0.246,-0.785 -0.43387,-1.60689 -0.54687,-2.46289z"></path></g></g>
            </svg>
          </div>
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
