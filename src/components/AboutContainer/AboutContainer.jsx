import React from 'react'
import Container from '../Container/Container'
import './AboutContainer.scss'

const AboutContainer = () => {
  return (
    <Container>
        <section id="about">
            <div className="hero-title">
                Amrit Anand Gandhi
            </div>
            <div className="hero-subtitle">
                Frontend Engineer
            </div>
            <div className="bio">
                <p>Hello! I am a Frontend developer based in India. I am a JavaScript enthusiast and I specialize in building interactive web applications using modern JavaScript and React. When I'm not working, I like to read and write and do a bit of blogging when I get time.</p>
            </div>
            <div className="link">
                <a href="#" rel='noopener' className='btn btn-custom'>Check out my blog! </a>
            </div>
        </section>
    </Container>
  )
}

export default AboutContainer