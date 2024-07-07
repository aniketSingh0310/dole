import React from 'react'
import Logo from '../shared/logo';

const Footer = () => {
  return (
    <div className='w-full p-12  flex flex-col md:flex-row justify-around'>
      <Logo/>
      <div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Sevices</li>
        </ul>
      </div>
      <div>
      <ul>
            <li>Contact</li>
            <li>About</li>
            <li>Sevices</li>
            <li>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer;
