import React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'

export default function LandingPage() {
    return (
        <>
            <section>
                <h3>Experience Exquisite Events</h3>
                <p>We believe in moments that create lasting memories and impressions. We also understand managing the production can be a hassle. Let us handle behind the scenes work while you revel in your moment.</p>
                <Link className='Section_links' to={'/contact'}>
                    Make my day
                </Link>
            </section>
            <section>
                <h3>Weddings. Live performances. Festivals. Corporate events. Private parties.</h3>
                <p>We provide production design services, including lighting, sound, staging, as well as party planning and decorating. Let our professional artisans and technicians make your next event one not to forget.</p>
            </section>
            <section>
                <h3>Party With Us</h3>
                <p>Check out a history of the events we've been a part of. Browse pictures and stories. From formal to fun it's all about making it your day!</p>
                <Link className='Section_links' to={'/our-work'}>
                    See our work
                </Link>
            </section>
            <section>
                <h3>Have an upcoming event?</h3>
                <p>Located in Oklahoma City, we work on projects across the state. Our expert technicians and staff are all local and we support other local businesses in the area. It's one of our core values.</p>
                <h4>Give us a call at (450) 867-5309 or contact us here.</h4>
                <Link className='Section_links' to={'/contact'}>
                    Contact us
                </Link>
            </section>
        </>
    )
}