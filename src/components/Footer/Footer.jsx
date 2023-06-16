import React from 'react';
import './Footer.css'

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear()

  return (
    <footer className='Footer'>
      <p className='FooterText'> Всі права захищено  <span>{year}</span>  &copy; </p>
    </footer>
  )
}
export default Footer;
