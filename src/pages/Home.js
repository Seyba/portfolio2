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
        <div className="">
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
              <g fill="#000000" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode:" normal"}}><path d="M0,256v-256h256v256z" id="bgRectangle"></path></g><g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}}><g transform="scale(5.12,5.12)"><path d="M45.27344,2.32422c-0.1875,-0.20703 -0.45703,-0.32422 -0.73828,-0.32422h-39.07031c-0.28125,0 -0.55078,0.11719 -0.73828,0.32422c-0.19141,0.20703 -0.28516,0.48438 -0.25781,0.76563l3.51953,39.42578c0.03516,0.41406 0.32422,0.75781 0.72266,0.875l16.01172,4.57031c0.08594,0.02734 0.17969,0.03906 0.27344,0.03906c0.09375,0 0.18359,-0.01172 0.27344,-0.03906l16.02344,-4.57031c0.39844,-0.11719 0.68359,-0.46094 0.72266,-0.875l3.51563,-39.42578c0.02734,-0.28125 -0.06641,-0.55859 -0.25781,-0.76562zM36.84766,15.91797h-18.8125l0.44922,5.08984h17.91016l-1.34375,15.04297l-10.05859,3.03906l-0.09766,-0.03125l-9.94141,-3.01172l-0.54297,-6.12891h4.87109l0.21094,2.37891l5.55859,1.16406l5.45703,-1.16406l0.58203,-6.4375h-17.04297l-1.32422,-14.80469h24.55859z"></path></g></g>
            </svg>
          </div>
          <div>
            <svg fill="#ffffff" width="100px" height="100px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M 21.300781 6 C 21.143781 6 21 6.1257812 21 6.3007812 L 21 11.796875 L 19.753906 11.070312 C 19.675906 11.024313 19.588 11.001953 19.5 11.001953 C 19.412 11.001953 19.324094 11.024312 19.246094 11.070312 L 16.251953 12.816406 C 16.095953 12.906406 16 13.072953 16 13.251953 L 16 16.748047 C 16 16.928047 16.095953 17.093594 16.251953 17.183594 L 19.246094 18.929688 C 19.324094 18.975687 19.412 18.998047 19.5 18.998047 C 19.588 18.998047 19.675906 18.975688 19.753906 18.929688 L 22.748047 17.183594 C 22.904047 17.093594 23 16.927047 23 16.748047 L 23 15 L 23 13.251953 L 23 7.2304688 C 23 7.0524688 22.904953 6.8888281 22.751953 6.7988281 L 21.449219 6.0410156 C 21.400219 6.0130156 21.350781 6 21.300781 6 z M 11.5 11.001953 C 11.41225 11.001953 11.324594 11.024813 11.246094 11.070312 L 8.2519531 12.816406 C 8.0959531 12.906406 8 13.072953 8 13.251953 L 8 16.748047 C 8 16.928047 8.0959531 17.093594 8.2519531 17.183594 L 11.246094 18.929688 C 11.403094 19.020688 11.596906 19.020688 11.753906 18.929688 L 14.748047 17.183594 C 14.904047 17.093594 15 16.927047 15 16.748047 L 15 13.251953 C 15 13.071953 14.904047 12.906406 14.748047 12.816406 L 11.753906 11.070312 C 11.675406 11.024812 11.58775 11.001953 11.5 11.001953 z M 27.5 11.001953 C 27.412 11.001953 27.324094 11.024312 27.246094 11.070312 L 24.251953 12.816406 C 24.095953 12.906406 24 13.072953 24 13.251953 L 24 16.748047 C 24 16.928047 24.095953 17.093594 24.251953 17.183594 L 27.15625 18.939453 C 27.31225 19.034453 27.508016 19.035359 27.666016 18.943359 L 29.09375 18.113281 C 29.24175 18.028281 29.24275 17.813562 29.09375 17.726562 L 26 15.904297 L 26 14.109375 L 27.5 13.236328 L 29 14.109375 L 29 15.359375 C 29 15.526375 29.140375 15.552094 29.234375 15.496094 C 29.612375 15.274094 30.751953 14.613281 30.751953 14.613281 C 30.904953 14.524281 31 14.359641 31 14.181641 L 31 13.251953 C 31 13.071953 30.904047 12.906406 30.748047 12.816406 L 27.753906 11.070312 C 27.674906 11.024313 27.588 11.001953 27.5 11.001953 z M 3.5 11.003906 C 3.412 11.003906 3.3240937 11.026266 3.2460938 11.072266 L 0.25195312 12.816406 C 0.095953125 12.907406 0 13.073906 0 13.253906 L 0 17.716797 C 0 17.934797 0.23582812 18.069938 0.42382812 17.960938 L 1.7519531 17.1875 C 1.9049531 17.0975 2 16.933859 2 16.755859 L 2 14.113281 L 3.5 13.238281 L 5 14.113281 L 5 16.755859 C 5 16.933859 5.0950469 17.0975 5.2480469 17.1875 L 6.5761719 17.960938 C 6.7641719 18.070938 7 17.934797 7 17.716797 L 7 13.253906 C 7 13.073906 6.9040469 12.907406 6.7480469 12.816406 L 3.7539062 11.072266 C 3.6759063 11.026266 3.588 11.003906 3.5 11.003906 z M 19.5 13.236328 L 21 14.111328 L 21 15 L 21 15.888672 L 19.5 16.763672 L 18 15.888672 L 18 14.111328 L 19.5 13.236328 z M 27.5 14.003906 L 26.642578 14.503906 L 26.642578 15.501953 L 27.5 16 L 28.357422 15.501953 L 28.357422 14.503906 L 27.5 14.003906 z M 15.40625 17.998047 C 15.303375 17.998047 15.199375 18.023219 15.109375 18.074219 L 12.296875 19.699219 C 12.111875 19.801219 12 20.001938 12 20.210938 L 12 23.457031 C 12 23.666031 12.116875 23.86275 12.296875 23.96875 L 13.037109 24.390625 C 13.392109 24.565625 13.522594 24.566406 13.683594 24.566406 C 14.213594 24.566406 14.515625 24.249453 14.515625 23.689453 L 14.515625 20.482422 C 14.515625 20.433422 14.477594 20.398438 14.433594 20.398438 L 14.078125 20.398438 C 14.029125 20.398438 13.994141 20.438422 13.994141 20.482422 L 13.994141 23.689453 C 13.994141 23.932453 13.737359 24.181656 13.318359 23.972656 L 12.548828 23.529297 C 12.523828 23.514297 12.505859 23.484078 12.505859 23.455078 L 12.505859 20.208984 C 12.505859 20.179984 12.519828 20.145859 12.548828 20.130859 L 15.361328 18.509766 C 15.391328 18.494766 15.425219 18.494766 15.449219 18.509766 L 18.263672 20.130859 C 18.292672 20.145859 18.306641 20.174984 18.306641 20.208984 L 18.306641 23.455078 C 18.306641 23.489078 18.287672 23.518203 18.263672 23.533203 L 15.449219 25.160156 C 15.424219 25.175156 15.385328 25.175156 15.361328 25.160156 L 14.642578 24.732422 C 14.623578 24.722422 14.593219 24.716562 14.574219 24.726562 C 14.375219 24.843563 14.335391 24.858875 14.150391 24.921875 C 14.101391 24.936875 14.034781 24.966922 14.175781 25.044922 L 15.109375 25.599609 C 15.202375 25.648609 15.30425 25.677734 15.40625 25.677734 C 15.51325 25.677734 15.617219 25.648703 15.699219 25.595703 L 18.511719 23.96875 C 18.696719 23.86675 18.808594 23.666031 18.808594 23.457031 L 18.808594 20.210938 C 18.808594 20.001938 18.691719 19.806219 18.511719 19.699219 L 15.699219 18.074219 C 15.611719 18.023219 15.509125 17.998047 15.40625 17.998047 z M 19.792969 19.496094 C 19.505969 19.496094 19.253906 19.728156 19.253906 20.035156 C 19.253906 20.332156 19.495969 20.576172 19.792969 20.576172 C 20.089969 20.576172 20.332031 20.332156 20.332031 20.035156 C 20.332031 19.728156 20.084969 19.491094 19.792969 19.496094 z M 19.787109 19.582031 C 20.041109 19.582031 20.246094 19.782156 20.246094 20.035156 C 20.246094 20.283156 20.040109 20.488141 19.787109 20.494141 C 19.538109 20.494141 19.335938 20.288156 19.335938 20.035156 C 19.335938 19.782156 19.539109 19.582031 19.787109 19.582031 z M 19.589844 19.728516 L 19.589844 20.335938 L 19.705078 20.335938 L 19.705078 20.09375 L 19.8125 20.09375 C 19.8565 20.09375 19.866953 20.112484 19.876953 20.146484 C 19.876953 20.151484 19.895391 20.308891 19.900391 20.337891 L 20.025391 20.337891 C 20.011391 20.308891 20.001094 20.225781 19.996094 20.175781 C 19.982094 20.097781 19.977531 20.044062 19.894531 20.039062 C 19.938531 20.024063 20.011719 20.000672 20.011719 19.888672 C 20.011719 19.727672 19.871828 19.728516 19.798828 19.728516 L 19.589844 19.728516 z M 19.705078 19.826172 L 19.802734 19.826172 C 19.832734 19.826172 19.890625 19.825203 19.890625 19.908203 C 19.890625 19.942203 19.875875 19.997094 19.796875 19.996094 L 19.705078 19.996094 L 19.705078 19.826172 z M 16.160156 20.322266 C 15.357156 20.322266 14.880859 20.664516 14.880859 21.228516 C 14.880859 21.846516 15.357953 22.011844 16.126953 22.089844 C 17.046953 22.181844 17.119141 22.314141 17.119141 22.494141 C 17.119141 22.810141 16.865484 22.941406 16.271484 22.941406 C 15.526484 22.941406 15.362594 22.756719 15.308594 22.386719 C 15.303594 22.347719 15.268609 22.318359 15.224609 22.318359 L 14.859375 22.318359 C 14.815375 22.318359 14.777344 22.353344 14.777344 22.402344 C 14.777344 22.874344 15.034625 23.439453 16.265625 23.439453 C 17.168625 23.438453 17.679688 23.088609 17.679688 22.474609 C 17.679688 21.866609 17.270297 21.704891 16.404297 21.587891 C 15.528297 21.470891 15.441406 21.412031 15.441406 21.207031 C 15.441406 21.037031 15.513156 20.814453 16.160156 20.814453 C 16.739156 20.814453 16.954969 20.941078 17.042969 21.330078 C 17.052969 21.369078 17.080141 21.392578 17.119141 21.392578 L 17.484375 21.392578 C 17.508375 21.392578 17.528969 21.383141 17.542969 21.369141 C 17.557969 21.350141 17.5675 21.330641 17.5625 21.306641 C 17.5045 20.634641 17.061156 20.322266 16.160156 20.322266 z"></path>
              </g>
            </svg>
          </div>
          
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
              <g fill="#000000" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"  style={{mixBlendMode:" normal"}}><path d="M0,256v-256h256v256z" id="bgRectangle"></path></g><g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"  style={{mixBlendMode: "normal"}}><g transform="scale(5.12,5.12)"><path d="M39,40l-14,4l-14,-4l-3,-34h34c-1,11.33203 -2,22.66797 -3,34zM39.81641,8h-29.63281l2.6875,30.45313l12.12891,3.46875l12.12891,-3.46875zM16.80078,28h4l0.09766,2.5l4.10156,1.39844l4.10156,-1.39844l0.29688,-4.5h-8.79687l-0.20312,-4h9.20313l0.29688,-4h-13.79687l-0.30078,-4h18.30078l-0.5,8l-0.70312,11.5l-7.89844,2.60156l-7.89844,-2.60156z"></path></g></g>
            </svg>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
              <g fill="#000000" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"  style={{mixBlendMode:" normal"}}>
                <path d="M0,256v-256h256v256z" id="bgRectangle"></path>
              </g>
              <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"  style={{mixBlendMode: "normal"}}>
                <g transform="scale(8,8)">
                  <path d="M15.5,4c-4.136,0 -7.5,4.54862 -7.5,10.14063c0,2.72448 0.80866,5.18673 2.10742,7.00977c-0.19561,0.53634 -0.1173,1.13439 0.2098,1.60229c0.3271,0.4679 0.86188,0.74683 1.43278,0.74732c0.9665,0 1.75,-0.7835 1.75,-1.75c0,-0.9665 -0.7835,-1.75 -1.75,-1.75c-0.01759,0.00039 -0.03517,0.00104 -0.05273,0.00195c-1.04368,-1.48117 -1.69727,-3.55803 -1.69727,-5.86133c0,-4.489 2.468,-8.14062 5.5,-8.14062c2.17,0 4.04545,1.87403 4.93945,4.58203c0.772,0.228 1.53816,0.516 2.28516,0.875c-0.873,-4.292 -3.77661,-7.45703 -7.22461,-7.45703zM14.25,11.75c-0.9665,0 -1.75,0.7835 -1.75,1.75c0,0.9665 0.7835,1.75 1.75,1.75c0.74765,-0.00064 1.41231,-0.47619 1.6543,-1.18359c1.89562,-0.22634 4.12687,0.32691 6.16211,1.57813c3.849,2.368 5.89099,6.60114 4.45898,9.24414c-0.504,0.929 -1.39131,1.58539 -2.57031,1.90039c-1.215,0.325 -2.63031,0.26128 -4.07031,-0.13672c-0.556,0.533 -1.17408,1.02619 -1.83008,1.49219c1.417,0.558 2.86547,0.85352 4.23047,0.85352c0.761,0 1.49655,-0.08944 2.18555,-0.27344c1.722,-0.461 3.03955,-1.45686 3.81055,-2.88086c1.987,-3.669 -0.28297,-8.8993 -5.16797,-11.9043c-2.52568,-1.55461 -5.37334,-2.20261 -7.79101,-1.82031c-0.30654,-0.23865 -0.68378,-0.36852 -1.07227,-0.36914zM6.13672,16.13867c-2.904,2.974 -3.98388,6.82108 -2.42187,9.70508c0.772,1.424 2.08855,2.41986 3.81055,2.88086c0.689,0.185 1.4265,0.27344 2.1875,0.27344c2.076,0 4.3483,-0.6715 6.4043,-1.9375c2.63977,-1.62338 4.50508,-3.89626 5.35742,-6.2207c0.74586,-0.3431 1.15295,-1.15858 0.97887,-1.9609c-0.17407,-0.80233 -0.8825,-1.37578 -1.70348,-1.37894c-0.69123,0.00034 -1.31749,0.40753 -1.59826,1.03916c-0.28077,0.63163 -0.16344,1.36935 0.29943,1.88272c-0.75927,1.82634 -2.29688,3.65409 -4.37891,4.93555c-2.352,1.446 -4.9793,1.98159 -7.0293,1.43359c-1.179,-0.315 -2.06731,-0.97239 -2.57031,-1.90039c-0.941,-1.737 -0.37506,-4.15906 1.21094,-6.28906c-0.246,-0.785 -0.43387,-1.60689 -0.54687,-2.46289z"></path>
                </g>
              </g>
            </svg>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
              <g fill="#000000" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}}>
                <path d="M0,256v-256h256v256z" id="bgRectangle"></path>
              </g>
              <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}}>
                <g transform="scale(3.2,3.2)">
                  <path d="M54.41016,9c-0.55,-0.03 -1.02101,0.39922 -1.04102,0.94922c-0.03,0.55 0.40117,1.02078 0.95117,1.05078h0.04883c0.53,0 0.97023,-0.42094 0.99023,-0.96094c0.03,-0.55 -0.39922,-1.01906 -0.94922,-1.03906zM26.88086,9.09961c-0.55,-0.06 -1.05133,0.33086 -1.11133,0.88086c-0.07,0.55 0.33086,1.03938 0.88086,1.10938h0.10938c0.5,0 0.93023,-0.36891 0.99023,-0.87891c0.07,-0.55 -0.32914,-1.05133 -0.86914,-1.11133zM50.49414,9.74219c-0.13063,-0.00437 -0.26453,0.01836 -0.39453,0.06836c-0.51,0.2 -0.77031,0.77883 -0.57031,1.29883c0.16,0.39 0.54141,0.64063 0.94141,0.64063c0.12,0 0.23938,-0.02031 0.35938,-0.07031c0.51,-0.2 0.77031,-0.77906 0.57031,-1.28906c-0.15,-0.39 -0.51438,-0.63531 -0.90625,-0.64844zM22.75391,9.85742c-0.12875,0.02094 -0.25555,0.06758 -0.37305,0.14258c-0.47,0.29 -0.61055,0.91086 -0.31055,1.38086c0.18,0.3 0.50984,0.46875 0.83984,0.46875c0.18,0 0.3693,-0.05016 0.5293,-0.16016c0.47,-0.29 0.61031,-0.90891 0.32031,-1.37891c-0.2175,-0.345 -0.61961,-0.51594 -1.00586,-0.45313zM30.60547,10.27344c-0.38812,-0.01641 -0.76531,0.19891 -0.94531,0.56641c-0.24,0.5 -0.01953,1.09984 0.48047,1.33984c0.13,0.06 0.27992,0.08984 0.41992,0.08984c0.38,0 0.74016,-0.21031 0.91016,-0.57031c0.23,-0.5 0.01953,-1.09008 -0.48047,-1.33008c-0.125,-0.06 -0.25539,-0.09024 -0.38477,-0.0957zM57.95508,10.54297c-0.255,-0.0025 -0.51008,0.09211 -0.70508,0.28711c-0.4,0.39 -0.39977,1.02016 -0.00977,1.41016c0.19,0.2 0.44899,0.29883 0.70898,0.29883c0.25,0 0.51117,-0.08906 0.70117,-0.28906c0.39,-0.38 0.39977,-1.02016 0.00977,-1.41016c-0.195,-0.195 -0.45008,-0.29437 -0.70508,-0.29687zM46.75391,11.60547c-0.12891,0.02188 -0.25555,0.06953 -0.37305,0.14453c-0.46,0.3 -0.60078,0.92062 -0.30078,1.39063c0.19,0.29 0.51961,0.44922 0.84961,0.44922c0.18,0 0.37101,-0.05016 0.54102,-0.16016c0.46,-0.29 0.58883,-0.90891 0.29883,-1.37891c-0.225,-0.345 -0.62891,-0.51094 -1.01562,-0.44531zM34.01563,12.30664c-0.44352,-0.0132 -0.84271,0.26741 -0.98045,0.68921c-0.13774,0.4218 0.01891,0.88392 0.38474,1.13501h0.00195l0.00195,0.00195c1.64395,1.15665 3.36827,2.65345 5.11328,4.38477c-2.0117,2.14351 -4.01337,4.60072 -5.95508,7.3125c-3.83516,0.33845 -7.40655,0.94527 -10.63477,1.75781c-0.61092,-2.40165 -1.02228,-4.65818 -1.16797,-6.66016c-0.03077,-0.52402 -0.46144,-0.93508 -0.98633,-0.94141c-0.28248,-0.00378 -0.55339,0.1121 -0.74576,0.31899c-0.19238,0.20689 -0.28828,0.48549 -0.264,0.76695c0.15647,2.15008 0.5869,4.5259 1.22266,7.03125c-1.97272,0.57648 -3.79432,1.23336 -5.41797,1.96875c-0.08898,0.03858 -0.17188,0.0899 -0.24609,0.15234c-0.06071,0.01579 -0.12293,0.01674 -0.18164,0.04492c-0.5,0.23 -0.71047,0.83008 -0.48047,1.33008c0.17,0.36 0.53016,0.57031 0.91016,0.57031c0.14,0 0.28992,-0.02984 0.41992,-0.08984c0.05504,-0.02642 0.09261,-0.07115 0.14063,-0.10547c0.0905,-0.01457 0.17856,-0.04152 0.26172,-0.08008c1.51174,-0.6847 3.22925,-1.30329 5.10547,-1.85156c0.92609,3.16094 2.19694,6.51846 3.79688,9.96289c-1.40857,3.03424 -2.57623,6.00602 -3.46484,8.83008c-2.00233,-0.57044 -3.838,-1.2199 -5.43555,-1.94336h-0.00195c-0.00065,-0.00065 -0.0013,-0.0013 -0.00195,-0.00195c-0.00195,-0.00089 -0.00391,-0.00107 -0.00586,-0.00195c-0.11859,-0.05424 -0.24665,-0.08476 -0.37695,-0.08984c-0.40545,-0.01461 -0.77955,0.21717 -0.94699,0.58672c-0.16743,0.36955 -0.09502,0.80364 0.18331,1.09883v0.00195c0.08726,0.09238 0.19133,0.16729 0.30664,0.2207c0.00744,0.00357 0.01196,0.01026 0.01953,0.01367c0.01697,0.00783 0.03545,0.00911 0.05273,0.01563c1.6854,0.75985 3.58676,1.43445 5.64453,2.02344c-0.28643,1.03122 -0.54788,2.04781 -0.75781,3.0293c-0.08436,0.35287 0.02899,0.72375 0.29621,0.96915c0.26722,0.24541 0.64639,0.32685 0.99081,0.21281c0.34442,-0.11404 0.60008,-0.40566 0.66805,-0.76205c0.20241,-0.94629 0.45738,-1.93191 0.73633,-2.93359c2.88763,0.71143 6.05956,1.24332 9.43164,1.58203c2.22829,3.24311 4.55631,6.13489 6.89258,8.62305c-1.00598,0.99944 -2.00548,1.93567 -2.98633,2.75c-0.27946,0.22681 -0.41549,0.58628 -0.3562,0.94128c0.05929,0.355 0.30475,0.65076 0.64275,0.77444c0.33799,0.12369 0.71638,0.05622 0.9908,-0.17666c1.02422,-0.85033 2.06117,-1.81804 3.09961,-2.84766c1.47227,1.46233 2.9389,2.76229 4.37695,3.85938c0.00703,0.00573 0.01036,0.01395 0.01758,0.01953v-0.00586c0.2833,0.22656 0.66707,0.28196 1.00288,0.14476c0.33581,-0.1372 0.57099,-0.44548 0.61459,-0.8056c0.0436,-0.36012 -0.11122,-0.71562 -0.40458,-0.929c-1.36828,-1.04259 -2.78135,-2.29728 -4.20898,-3.71875c2.33694,-2.48573 4.66775,-5.37486 6.89844,-8.61719c3.38715,-0.3356 6.56558,-0.8751 9.4668,-1.58594c0.47661,1.70699 0.84796,3.34275 1.10156,4.87891c0.08953,0.54527 0.60414,0.91473 1.14941,0.8252c0.54527,-0.08953 0.91473,-0.60414 0.8252,-1.14941c-0.26496,-1.60497 -0.64641,-3.29953 -1.13477,-5.05664c1.69749,-0.48292 3.29264,-1.02119 4.74219,-1.62109c0.33508,-0.13337 0.57239,-0.43682 0.62109,-0.79416c0.0487,-0.35734 -0.09877,-0.71322 -0.38595,-0.93139c-0.28717,-0.21817 -0.66956,-0.26482 -1.00077,-0.1221c-1.3793,0.57083 -2.91378,1.08754 -4.55859,1.55273c-0.89328,-2.84096 -2.05503,-5.82177 -3.47461,-8.875c1.60325,-3.4487 2.86971,-6.80182 3.79883,-9.9668c1.14296,0.33215 2.24784,0.68115 3.26172,1.06641c0.51507,0.19956 1.09439,-0.05622 1.29395,-0.57129c0.19956,-0.51507 -0.05622,-1.09439 -0.57129,-1.29395c-0.00278,-0.00112 -0.00502,-0.00281 -0.00781,-0.00391c-0.00125,-0.00048 -0.00266,0.00047 -0.00391,0c-1.07471,-0.40837 -2.23674,-0.77641 -3.43555,-1.125c0.44041,-1.72563 0.78424,-3.3894 1,-4.95508v-0.00195v-0.00195c0.0433,-0.28442 -0.03798,-0.57372 -0.22308,-0.79397c-0.1851,-0.22025 -0.45609,-0.35012 -0.74372,-0.35642c-0.5094,-0.01029 -0.94511,0.36401 -1.01172,0.86914c-0.0002,0.00149 -0.00176,0.00242 -0.00195,0.00391v0.00195c0,0.00065 0,0.0013 0,0.00195c-0.20274,1.47223 -0.52844,3.05448 -0.94922,4.70313c-3.23536,-0.8099 -6.83217,-1.40103 -10.67383,-1.73633c-1.94761,-2.71667 -3.95503,-5.18784 -5.97266,-7.33203c1.44568,-1.43889 2.8755,-2.70822 4.25977,-3.75781c0.34627,-0.25561 0.49017,-0.7041 0.35726,-1.11346c-0.13291,-0.40936 -0.51282,-0.68778 -0.9432,-0.69123c-0.22486,-0.00151 -0.44366,0.0728 -0.62109,0.21094c-1.46565,1.11131 -2.96297,2.43756 -4.46484,3.92969c-1.80763,-1.78898 -3.60727,-3.35008 -5.35547,-4.58008c-0.16346,-0.11824 -0.35887,-0.18429 -0.56055,-0.18945zM20.48047,12.95703c-0.38766,0.01453 -0.75039,0.25258 -0.90039,0.64258c-0.2,0.51 0.06008,1.09102 0.58008,1.29102c0.12,0.05 0.23961,0.07031 0.34961,0.07031c0.41,0 0.78945,-0.25039 0.93945,-0.65039c0.2,-0.51 -0.06008,-1.09102 -0.58008,-1.29102c-0.1275,-0.0475 -0.25945,-0.06734 -0.38867,-0.0625zM59.92383,14.05859c-0.12734,-0.01953 -0.26203,-0.01352 -0.39453,0.02148c-0.54,0.14 -0.85852,0.67898 -0.72852,1.20898c0.12,0.46 0.52875,0.76172 0.96875,0.76172c0.08,0 0.17,-0.01125 0.25,-0.03125c0.53,-0.14 0.8607,-0.67875 0.7207,-1.21875c-0.105,-0.3975 -0.43438,-0.68359 -0.81641,-0.74219zM19.81055,16.86914c-0.55,-0.03 -1.03055,0.38141 -1.06055,0.94141c-0.04,0.55 0.37945,1.01883 0.93945,1.04883c0.02,0.01 0.04055,0.00977 0.06055,0.00977c0.52,0 0.96,-0.40945 1,-0.93945c0.03,-0.55 -0.38945,-1.03055 -0.93945,-1.06055zM60.21094,18.00977c-0.55,0 -0.99023,0.44976 -0.99023,1.00977c0,0.55 0.45,0.99023 1,0.99023c0.55,0 1,-0.45 1,-1c0,-0.55 -0.44976,-1 -1.00977,-1zM39.94336,19.94531c1.59018,1.69658 3.18392,3.6161 4.75195,5.70313c-1.53845,-0.08454 -3.09789,-0.14258 -4.69531,-0.14258c-1.63923,0 -3.23769,0.06171 -4.81445,0.15039c1.56954,-2.09517 3.165,-4.00705 4.75781,-5.71094zM40,27.50586c2.13373,0 4.21589,0.08489 6.23438,0.23828c1.39032,1.98334 2.74574,4.10272 4.03711,6.33984c1.14046,1.97589 2.17811,3.94999 3.10938,5.89648c-0.9384,1.96402 -1.97754,3.95365 -3.12891,5.94727c-0.00468,0.0084 -0.00924,0.01686 -0.01367,0.02539c-0.00535,0.00903 -0.01056,0.01815 -0.01562,0.02734c-1.00731,1.7426 -2.05641,3.4028 -3.12695,4.99414c-2.28508,0.19936 -4.65631,0.30859 -7.0957,0.30859c-2.47301,0 -4.88103,-0.10941 -7.19531,-0.31445c-1.07378,-1.59712 -2.12906,-3.25484 -3.13867,-5.00391c-1.15838,-2.00712 -2.18879,-4.00742 -3.13086,-5.98437c0.93812,-1.96209 1.97239,-3.94921 3.12305,-5.94141c0.00197,-0.00324 0.00392,-0.0065 0.00586,-0.00977c0.0033,-0.00518 0.00656,-0.01039 0.00977,-0.01562c1.2737,-2.20515 2.61091,-4.29109 3.98047,-6.25c2.05591,-0.15978 4.1698,-0.25781 6.3457,-0.25781zM48.80664,27.99023c3.09866,0.34019 6.00487,0.84999 8.64258,1.50586c-0.76244,2.58613 -1.76597,5.32104 -3.00586,8.14453c-0.75993,-1.51149 -1.55966,-3.03042 -2.43945,-4.55469c-1.02836,-1.78151 -2.1043,-3.46607 -3.19727,-5.0957zM31.07227,28.01172c-1.07092,1.60006 -2.12244,3.2561 -3.13086,5.00195c-0.0046,0.0078 -0.0094,0.01585 -0.01367,0.02344c-0.0011,0.0019 -0.00083,0.00396 -0.00195,0.00586c-0.88606,1.53432 -1.69828,3.06435 -2.46289,4.58594c-1.22714,-2.80402 -2.24372,-5.53528 -3,-8.10352c2.62611,-0.65766 5.52193,-1.16865 8.60938,-1.51367zM66.73828,30.79492c-0.39047,-0.03609 -0.78351,0.15789 -0.97852,0.52539c-0.26,0.49 -0.07008,1.08961 0.41992,1.34961c0.15,0.08 0.3107,0.11914 0.4707,0.11914c0.35,0 0.69891,-0.1893 0.87891,-0.5293c0.26,-0.48 0.06984,-1.08961 -0.41016,-1.34961c-0.1225,-0.065 -0.2507,-0.1032 -0.38086,-0.11523zM11.29297,32.17188c-0.2525,-0.04375 -0.52391,0.00797 -0.75391,0.16797c-0.45,0.32 -0.55828,0.94062 -0.23828,1.39063c0.2,0.28 0.50836,0.42969 0.81836,0.42969c0.2,0 0.40031,-0.05945 0.57031,-0.18945l0.00977,0.00977c0.45,-0.32 0.56023,-0.95039 0.24023,-1.40039c-0.16,-0.225 -0.39398,-0.36445 -0.64648,-0.4082zM69.89258,33.00195c-0.255,0.02 -0.50164,0.13766 -0.68164,0.34766c-0.36,0.42 -0.30086,1.05016 0.11914,1.41016c0.19,0.16 0.42063,0.24023 0.64063,0.24023c0.29,0 0.56953,-0.11937 0.76953,-0.35937c0.35,-0.42 0.29891,-1.05039 -0.12109,-1.40039c-0.21,-0.18 -0.47156,-0.25828 -0.72656,-0.23828zM40,34.00391c-3.314,0 -6,2.686 -6,6c0,3.314 2.686,6 6,6c3.314,0 6,-2.686 6,-6c0,-3.314 -2.686,-6 -6,-6zM8.07031,34.9082c-0.25375,0.04 -0.49039,0.17734 -0.65039,0.40234c-0.32,0.45 -0.21953,1.08039 0.23047,1.40039c0.17,0.12 0.38008,0.18945 0.58008,0.18945c0.31,0 0.61859,-0.14992 0.80859,-0.41992c0.33,-0.45 0.22125,-1.07062 -0.21875,-1.39062c-0.225,-0.165 -0.49625,-0.22164 -0.75,-0.18164zM72.43555,36.08398c-0.12937,0.00531 -0.25977,0.0357 -0.38477,0.0957c-0.5,0.23 -0.72023,0.82031 -0.49023,1.32031c0.17,0.37 0.53016,0.58008 0.91016,0.58008c0.14,0 0.27992,-0.02984 0.41992,-0.08984c0.5,-0.23 0.72023,-0.83008 0.49023,-1.33008c-0.18,-0.375 -0.55719,-0.59211 -0.94531,-0.57617zM6.96094,38.61914c-0.54801,0.02989 -0.97775,0.48767 -0.95117,1.04492c0.022,0.53809 0.46132,0.95508 1,0.95508h0.04102c0.55,-0.02 0.97922,-0.48906 0.94922,-1.03906c-0.02,-0.56 -0.48906,-0.98094 -1.03906,-0.96094zM72.6582,39.97656c-0.38719,0.03703 -0.73742,0.30336 -0.85742,0.69336v0.00977c-0.16,0.52 0.13016,1.08 0.66016,1.25c0.09,0.03 0.19906,0.04102 0.28906,0.04102c0.43,0 0.82094,-0.27117 0.96094,-0.70117c0.16,-0.52 -0.13016,-1.08 -0.66016,-1.25c-0.13,-0.0425 -0.26351,-0.05531 -0.39258,-0.04297zM8.61523,42.25781c-0.255,-0.0275 -0.51938,0.04289 -0.73437,0.21289c-0.43,0.35 -0.50039,0.98016 -0.15039,1.41016c0.19,0.24 0.4793,0.36914 0.7793,0.36914c0.22,0 0.44109,-0.0707 0.62109,-0.2207c0.43,-0.34 0.4982,-0.96844 0.1582,-1.39844c-0.175,-0.22 -0.41883,-0.34555 -0.67383,-0.37305zM25.45508,42.32422c0.77208,1.53897 1.58227,3.08576 2.47852,4.63867c0,0.00065 0,0.0013 0,0.00195c0.73933,1.28083 1.5027,2.51307 2.27734,3.7168c-2.63955,-0.32624 -5.13253,-0.77306 -7.42383,-1.33203c0.71281,-2.25173 1.60583,-4.60854 2.66797,-7.02539zM54.44727,42.32422c1.0658,2.42394 1.95294,4.78337 2.66797,7.04102c-2.30582,0.55866 -4.79576,1.01491 -7.45117,1.33789c0.77742,-1.20595 1.54512,-2.43718 2.28711,-3.7207c0.02485,-0.03976 0.04164,-0.06961 0.06055,-0.10742c0.8784,-1.52329 1.67673,-3.04038 2.43555,-4.55078zM70.58203,43.26563c-0.255,-0.00625 -0.51289,0.08344 -0.71289,0.27344c-0.4,0.38 -0.40906,1.02188 -0.03906,1.42188c0.2,0.2 0.46047,0.29883 0.73047,0.29883c0.25,0 0.49945,-0.08953 0.68945,-0.26953c0.4,-0.38 0.4093,-1.01992 0.0293,-1.41992c-0.19,-0.195 -0.44227,-0.29844 -0.69727,-0.30469zM11.29883,44.90625c-0.25125,0.04875 -0.48367,0.19383 -0.63867,0.42383c-0.31,0.46 -0.1807,1.08062 0.2793,1.39063c0.17,0.11 0.36078,0.16992 0.55078,0.16992c0.33,0 0.64008,-0.16117 0.83008,-0.45117c0.31,-0.46 0.19047,-1.07891 -0.26953,-1.37891c-0.23,-0.155 -0.5007,-0.20305 -0.75195,-0.1543zM67.20898,45.62305c-0.12984,0.01594 -0.25891,0.05695 -0.37891,0.12695c-0.47,0.27 -0.63938,0.88938 -0.35937,1.35938c0.18,0.33 0.51937,0.5 0.85938,0.5c0.17,0 0.35,-0.03891 0.5,-0.12891c0.48,-0.28 0.64914,-0.89133 0.36914,-1.36133c-0.2025,-0.36 -0.6007,-0.54391 -0.99023,-0.49609zM34.26563,53.07227c1.86883,0.12617 3.7741,0.21094 5.73438,0.21094c1.92065,0 3.78982,-0.07976 5.62305,-0.20117c-1.86195,2.58814 -3.77342,4.92299 -5.67969,6.95898c-1.905,-2.03777 -3.81736,-4.38046 -5.67773,-6.96875zM19.9707,56.94922c-0.55,-0.06 -1.05133,0.34063 -1.11133,0.89063c-0.05,0.55 0.34062,1.03961 0.89063,1.09961c0.04,0 0.06938,0.00977 0.10938,0.00977c0.5,0 0.94023,-0.37844 0.99023,-0.89844c0.06,-0.55 -0.32891,-1.04156 -0.87891,-1.10156zM60.11914,58.42969c-0.55,0.03 -0.96945,0.50078 -0.93945,1.05078c0.03,0.53 0.47,0.93945 1,0.93945h0.06055c0.55,-0.03 0.96945,-0.50055 0.93945,-1.06055c-0.03,-0.55 -0.51055,-0.96969 -1.06055,-0.92969zM19.66992,60.93945c-0.56,0.03 -0.97922,0.50078 -0.94922,1.05078c0.02,0.53 0.47,0.94922 1,0.94922h0.04883c0.55,-0.03 0.97141,-0.49883 0.94141,-1.04883c-0.02,-0.55 -0.49102,-0.98117 -1.04102,-0.95117zM60.21094,62.41992c-0.55,-0.07 -1.06086,0.31938 -1.13086,0.85938c-0.07,0.55 0.30938,1.05086 0.85938,1.13086c0.04,0 0.09086,0.00977 0.13086,0.00977c0.49,0 0.93023,-0.36914 0.99023,-0.86914c0.08,-0.55 -0.30961,-1.05086 -0.84961,-1.13086zM20.48242,64.86133c-0.12937,-0.00687 -0.26258,0.01109 -0.39258,0.05859c-0.52,0.18 -0.78937,0.7593 -0.60937,1.2793c0.15,0.41 0.52945,0.66016 0.93945,0.66016c0.11,0 0.22984,-0.01859 0.33984,-0.05859c0.52,-0.18 0.78961,-0.76148 0.59961,-1.27148c-0.135,-0.3975 -0.48883,-0.64734 -0.87695,-0.66797zM33.98242,65.83984c-0.2525,-0.045 -0.52195,0.00516 -0.75195,0.16016c-0.45,0.32 -0.56,0.94062 -0.25,1.39063c0.2,0.28 0.51031,0.42969 0.82031,0.42969c0.2,0 0.40008,-0.04992 0.58008,-0.16992c0.45,-0.32 0.56,-0.94039 0.25,-1.40039c-0.16,-0.225 -0.39594,-0.36516 -0.64844,-0.41016zM59.01367,66.2207c-0.38719,-0.05062 -0.78414,0.13023 -0.99414,0.49023c-0.27,0.48 -0.10891,1.08914 0.37109,1.36914c0.16,0.09 0.33,0.13086 0.5,0.13086c0.35,0 0.67914,-0.18 0.86914,-0.5c0.27,-0.48 0.11086,-1.09133 -0.36914,-1.36133c-0.12,-0.07 -0.24789,-0.11203 -0.37695,-0.12891zM48.37305,67.20898c-0.38672,-0.04078 -0.77992,0.15172 -0.98242,0.51172c-0.26,0.48 -0.09133,1.08938 0.38867,1.35938c0.16,0.08 0.32023,0.11914 0.49023,0.11914c0.35,0 0.69109,-0.17977 0.87109,-0.50977c0.27,-0.48 0.09938,-1.08938 -0.39062,-1.35937c-0.12,-0.0675 -0.24805,-0.1075 -0.37695,-0.12109zM30.31641,67.83008c-0.13016,0.00391 -0.26172,0.03234 -0.38672,0.08984c-0.5,0.23 -0.72023,0.83008 -0.49023,1.33008c0.17,0.37 0.53016,0.58008 0.91016,0.58008c0.14,0 0.27992,-0.02984 0.41992,-0.08984c0.5,-0.23 0.72023,-0.83008 0.49023,-1.33008c-0.1725,-0.375 -0.55289,-0.5918 -0.94336,-0.58008zM22.5332,68.07422c-0.2525,0.0475 -0.48758,0.19102 -0.64258,0.41602c-0.31,0.45 -0.20023,1.08062 0.25977,1.39063c0.17,0.12 0.37055,0.17969 0.56055,0.17969c0.32,0 0.62813,-0.15141 0.82812,-0.44141c0.31,-0.45 0.19023,-1.06867 -0.25977,-1.38867c-0.225,-0.155 -0.49359,-0.20375 -0.74609,-0.15625zM55.98633,68.73047c-0.12969,-0.01016 -0.26398,0.00383 -0.39648,0.04883c-0.52,0.17 -0.81063,0.72977 -0.64062,1.25977c0.14,0.42 0.53117,0.69141 0.95117,0.69141c0.1,0 0.21055,-0.02078 0.31055,-0.05078c0.53,-0.17 0.80867,-0.73977 0.63867,-1.25977c-0.1275,-0.3975 -0.47422,-0.65899 -0.86328,-0.68945zM51.80078,68.73438c-0.38578,0.06281 -0.71305,0.34859 -0.81055,0.74609c-0.14,0.54 0.1907,1.07875 0.7207,1.21875v-0.00977c0.08,0.03 0.17,0.04102 0.25,0.04102c0.44,0 0.84875,-0.30977 0.96875,-0.75977c0.13,-0.54 -0.19047,-1.0807 -0.73047,-1.2207c-0.135,-0.0325 -0.26984,-0.03656 -0.39844,-0.01562zM26.43945,68.94922c-0.55,0.05 -0.96016,0.53008 -0.91016,1.08008c0.05,0.52 0.49,0.91016 1,0.91016h0.08984c0.55,-0.05 0.96039,-0.53984 0.90039,-1.08984c-0.04,-0.55 -0.53008,-0.95039 -1.08008,-0.90039z"></path>
                </g>
              </g>
            </svg>
          </div>
          <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-database-fill-gear" viewBox="0 0 16 16">
            <path d="M8 1c-1.573 0-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4s.875 1.755 1.904 2.223C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777C13.125 5.755 14 5.007 14 4s-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1"/>
            <path d="M2 7v-.839c.457.432 1.004.751 1.49.972C4.722 7.693 6.318 8 8 8s3.278-.307 4.51-.867c.486-.22 1.033-.54 1.49-.972V7c0 .424-.155.802-.411 1.133a4.51 4.51 0 0 0-4.815 1.843A12 12 0 0 1 8 10c-1.573 0-3.022-.289-4.096-.777C2.875 8.755 2 8.007 2 7m6.257 3.998L8 11c-1.682 0-3.278-.307-4.51-.867-.486-.22-1.033-.54-1.49-.972V10c0 1.007.875 1.755 1.904 2.223C4.978 12.711 6.427 13 8 13h.027a4.55 4.55 0 0 1 .23-2.002m-.002 3L8 14c-1.682 0-3.278-.307-4.51-.867-.486-.22-1.033-.54-1.49-.972V13c0 1.007.875 1.755 1.904 2.223C4.978 15.711 6.427 16 8 16c.536 0 1.058-.034 1.555-.097a4.5 4.5 0 0 1-1.3-1.905m3.631-4.538c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382zM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"/>
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
