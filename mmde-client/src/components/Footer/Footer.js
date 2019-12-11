import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';

export default function Footer() {
    return (
      <>
        <div>
          <a href="https://www.facebook.com/pages/category/Product-Service/Make-My-Day-Entertainment-2036208030018445/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              size='2x'
              icon={['fab', 'facebook-square']}
              className='Footer_icons'            
            />
          </a>
        </div>
        <FontAwesomeIcon
          size='1x'
          icon='copyright'
          className='Footer_icons'            
        />
        <p id="Footer_copyright">2019 Make My Day Entertainment, LLC. <br /> All rights reserved</p>
        <p>Site by Patient Padawan</p>
      </>  
    )
}