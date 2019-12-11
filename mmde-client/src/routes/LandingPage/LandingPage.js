import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import './LandingPage.css'

export default function LandingPage() {
    return (
        <>
            <NavBar />
            <section>
                <h3 className='Landing_headers'>Experience Exquisite Events</h3>
                <p className='Landing_content'>We believe in moments that create lasting memories and impressions. We also understand managing the production can be a hassle. Let us handle behind the scenes work while you revel in your moment.</p>
                <Link className='Section_links' to={'/contact'}>
                    Make my day
                </Link>
            </section>
            <section>
                <h3 className='Landing_headers'>Weddings. Festivals. Live performances. Corporate events. Private parties.</h3>
                <p className='Landing_content'>We provide production design services, including lighting, sound, staging, as well as party planning and decorating. Let our professional artisans and technicians make your next event one not to forget.</p>
            </section>
            <section>
                <h3 className='Landing_headers'>Party With Us</h3>
                <p className='Landing_content'>Check out a history of the events we've been a part of. Browse pictures and stories. From formal to fun it's all about making it your day!</p>
                <Link className='Section_links' to={'/our-work'}>
                    See our work
                </Link>
            </section>
            <section>
                <h3 className='Landing_headers'>Have an upcoming event?</h3>
                <p className='Landing_content'>Located in Oklahoma City, we work on projects across the state. Our expert technicians and staff are all local and we support other local businesses in the area. It's one of our core values.</p>
                <h4>Give us a call at <br/>(450) 867-5309 <br/>or contact us here.</h4>
                <Link className='Section_links' to={'/contact'}>
                    Contact us
                </Link>
            </section>
        </>
    )
}