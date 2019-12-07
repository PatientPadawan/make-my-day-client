import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './NavBar.css'

export default function NavBar(selected) {
    return(
        <nav role='navigation'>
            <h3 id='Nav_logo'>MMDE</h3>
            <div className='Nav_linksContainer'>
                <Link className='Nav_links' to='/admin'>
                    <FontAwesomeIcon
                        size='1x'
                        icon='user-cog'
                        className='Nav_linkIcons'
                    />
                </Link>
                <Link className='Nav_links' to='/'>
                    <FontAwesomeIcon
                        size='1x'
                        icon='home'
                        className='Nav_linkIcons'
                    />
                </Link>
                <Link className='Nav_links' to='/our-work'>
                    <FontAwesomeIcon
                        size='1x'
                        icon='images'
                        className='Nav_linkIcons'
                    />
                </Link>
                <Link className='Nav_links' to='/contact'>
                    <FontAwesomeIcon
                        size='1x'
                        icon='file-signature'
                        className='Nav_linkIcons'
                    />
                </Link>
                <Link className='Nav_links'>
                    <FontAwesomeIcon
                        size='1x'
                        icon='sign-in-alt'
                        className='Nav_linkIcons'
                    />
                </Link>
            </div>
      </nav>
    )
}