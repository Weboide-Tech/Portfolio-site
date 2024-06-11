import React from 'react'
import './Footer.css'
import {IoLogoFacebook} from 'react-icons/io'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
  <footer >
<a href="/#" className='footer_logo'>Rehan Akhtar</a>
<ul className='permalinks'>
<li><a href="/#">Home</a></li>
<li><a href="#about">About</a></li>
<li><a href="#experience">Experience</a></li>
<li><a href="#services">Services</a></li>
<li><a href="#portfolio">Portfolio</a></li>
<li><a href="#testimonials">Testimonials</a></li>
<li><a href="#contact">Contact</a></li>
</ul>
<div className="footer_socials">
  <a href="https://www.facebook.com/rehanakhtar985"><IoLogoFacebook/></a>
  <a href="https://www.instagram.com/rehanakhtar985/"><BsInstagram/></a>
  <a href="https://twitter.com/rehan985"><BsTwitter/></a>
  <a href="https://www.linkedin.com/in/rehanakhtar985/" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>

</div>
<div className="copy_right">
  <small>&copy; Rehan Portfolio. All rights reserved.</small>
</div>
  </footer>
  )
}

export default Footer
