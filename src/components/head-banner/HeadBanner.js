import React,{useState,useEffect} from 'react'
import './HeadBanner.css'

const HeadBanner = () => {


  let [days,setDays]=useState(1);
  let [hours,setHours]=useState(24);
  let [minutes,setMinutes]=useState(59);
  let [seconds,setSeconds]=useState(59);


 

  


  return (
    <div className='headBanner'>
        <div className='bck_balls'></div>
        <div className='bck_balls'></div>
        <div className='bck_balls'></div>
        <div className='bck_balls'></div>
        <div className='bck_balls'></div>
        <div className='bck_balls'></div>

        <div className='headBanner_container'>
            <h1>Web Hosting as Dynamic as Your Business</h1>
            <h1><sup>₹</sup><span className='price'>149.00</span><sub>/mo</sub></h1>
            <p>Start your journey with our Premium plan and get<br/> a personal domain, lifetime SSL, and DDoS protection<br/>for free with a four-year subscrption</p>

            <div className='headBanner_timer'>
              <div className='timers_containers'>
                <div className='timers'>{days}</div>
                <p>Days</p>
              </div>

              <div className='timers_containers'>
              <div className='timers'>{hours}</div>
              <p>Hours</p>
              </div>

              <div className='timers_containers'>
              <div className='timers'>{minutes}</div>
              <p>Minutes</p>

              </div>
              <div className='timers_containers'>
              <div className='timers'>{seconds}</div>
              <p>Seconds</p>
              </div>
            </div>

            <button className='banner_btn'>Get Offer</button>

        </div>
    </div>
  )
}

export default HeadBanner