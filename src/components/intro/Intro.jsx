import './intro.scss';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

let isLoading = true;

export default function Intro() {

  const textRef = useRef(null);

  useEffect(()=>{
    if (textRef.current && isLoading) {
      isLoading = false;

      init(textRef.current, { 
        showCursor: true, 
        strings: ['Developer', 'Designer','Content creator' ],
        typeSpeed: 70,
        backSpeed:60,
      backDelay: 1500 })
  }});
  return (
    <div className='intro' id='intro'>

      <div className="left">

        <div className="imgContainer">

          <img src="assets/IMG_4412.jpg" alt="" />

        </div>
      </div>

      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Marco Viquez</h1>
          <h3>Freelance <span ref={textRef}>Designer</span></h3>
        </div>
      <a href="#portfolio">
        <img src="assets/globe.png" alt="" />
      </a>
      </div>
    </div>
  )
}
