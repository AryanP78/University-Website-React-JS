import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero '>
      <div className="hero-text">
        <h1>We Ensure better Education for a better World</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim temporibus saepe, aliquid blanditiis aspernatur autem quaerat mollitia quae culpa sunt sed sapiente doloremque eos optio, dolore omnis nulla voluptatibus magni?
        Voluptas modi deserunt provident facilis recusandae, sint commodi nostrum eum illo hic consequuntur, iusto totam soluta doloremque quod quos incidunt porro corrupti aperiam vitae autem quibusdam? Voluptates omnis doloribus ex.</p>

        <button className="btn">Explore More <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
