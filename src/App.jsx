

import './App.css'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Contact from './components/Contact/Contact'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Programs from './components/Programs/Programs'
import Testimonials from './components/Testimonials/Testimonials'
import Title from './components/Title/Title'

function App() {
  

  return (
    
      <div>
        <Navbar/>
        <Hero/>
        <div className="conatiner">
          <Title subTitle='Our Program' title='What We Offer'/>
          <Programs/>
          <About/>
          <Title subTitle='Gallery' title='Campus Photos'    />
          <Campus/>
          <Title subTitle='Testimonial' title='What a Student Says'    />
          <Testimonials/>
          <Title subTitle='Contact Us' title='Get in Touch'/>
          <Contact/>

        </div>
        
      </div>
     
   
  )
}

export default App
