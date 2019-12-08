import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Footer.css'

export default function Footer() {
    return (
      <>
        <p>{'placeholder for social media links'}</p>
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