import React, {  useRef } from 'react'
import './testimonial.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {
  
  
  
    const slider = useRef();
    let tx=0;



    const slideForward =()=>{
        if (tx>-50) {
            tx =-25;
        }
        slider.current.style.transform =`translateX(${tx}%)`
    }
  
    const slideBackward =()=>{
        if (tx<-0) {
            tx +=25;
        }
        slider.current.style.transform =`translateX(${tx}%)`

    }
  
  
  
  
  
  
  return (
    <div className='testimonials'>
     <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
     <img src={back_icon} alt=""  className='back-btn' onClick={slideBackward}/>

      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <h3>Aryan  Punia</h3>
                        

                </div>
                    <div className="">
                    <h3>Haryana,India</h3>
                
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam molestiae odio eius aperiam odit doloremque maiores iusto! Quasi, veritatis eveniet deserunt iste dicta libero nostrum necessitatibus est distinctio assumenda nemo?</p></div>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <h3>William Jackson</h3>
                        
                </div>
                <h3>Kerala,India</h3>
                    
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam molestiae odio eius aperiam odit doloremque maiores iusto! Quasi, veritatis eveniet deserunt iste dicta libero nostrum necessitatibus est distinctio assumenda nemo?</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <h3>Salman Khan</h3>
                </div>
                   
                    <h2>Tamil Nadu,India</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam molestiae odio eius aperiam odit doloremque maiores iusto! Quasi, veritatis eveniet deserunt iste dicta libero nostrum necessitatibus est distinctio assumenda nemo?</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <h3> Dokja Kim</h3>
                </div>
                   
                    <h3>Haryana,India</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam molestiae odio eius aperiam odit doloremque maiores iusto! Quasi, veritatis eveniet deserunt iste dicta libero nostrum necessitatibus est distinctio assumenda nemo?</p>
                </div>
            </li>
           
        </ul>
      </div>
    
    </div>
  )
}

export default Testimonials
