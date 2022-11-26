import React from 'react'
import './Footer.scss'
import Container from '../Container/Container'

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="copyright">
          <p>Designed & built by Amrit. © {new Date().getFullYear()}</p>
        </div>
        <div className="social-link mt-2">
          <a href="mailto:amritanand888@gmail.com" target="_blank" alt="Email">
            <span><i className="bi bi-envelope"></i></span>
          </a>
          <a href="https://github.com/aamrits" target="_blank" alt="GitHub">
            <span><i className="bi bi-github"></i></span>
          </a>
          <a href="https://www.linkedin.com/in/amrit-gandhi-b9b8416a/" target="_blank" alt="LinkedIn">
            <span><i className="bi bi-linkedin"></i></span>
          </a>
        </div>
      </Container>
    </footer>
  )
}

export default Footer