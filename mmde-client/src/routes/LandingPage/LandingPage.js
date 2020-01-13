import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import Hero from '../../components/Hero/Hero';
import './LandingPage.css'

export default function LandingPage() {
    return (
        <>
            <NavBar />
            <Hero />
            <section className='Landing_underline Landing_underlineCenter' id='Landing_firstSection'>
                <h3 className='Landing_headers Landing_noMinorHeaders'>WHO WE ARE</h3>
                <p className='Landing_content'>Make My Day is changing the way people party! Founded by industry visionary Austin McBride, MMD takes pride in our attention to detail, incomparable customer service and over the top passion for what we do! Whether its fog machines, top of the line DJ equipment, photo booths or flat screen TV's, we have thought of everything to make your next event one that your guests will never forget!</p>
                <div className='link_Container'>   
                    <Link className='Section_links' to={'/contact'}>
                        MAKE MY DAY
                    </Link>
                </div>
            </section>
            <section className='Landing_underline Landing_underlineCenter'>
                <h3 className='Landing_headers Landing_noMinorHeaders'>WEDDINGS</h3>
                <p className='Landing_content Landing_spaceFix'>Your wedding day is one you will always remember and we are honored to help make it unforgettable! Make My Day offers a unique, custom wedding experience and our meticulous attention to detail ensures that your big day will go off without a hitch!</p>
            </section>
            <section className='Landing_underline Landing_underlineCenter'>
                <h3 className='Landing_headers Landing_noMinorHeaders'>INDUSTRY AND MARQUEE</h3>
                <p className='Landing_content Landing_spaceFix'>Whether it be a corporate event or a massive music festival, we have the equipment to make it happen! Fog machines, confetti launchers, laser light shows, photobooths, bubble machines and karaoke are just a few of the ways we can create the atmosphere you desire. With one of our world class DJ's keeping the dance floor full and the party bumping, we are guaranteed to make your day!</p>
            </section>
            <section className='Landing_underline Landing_underlineCenter'>
                <h3 className='Landing_headers Landing_noMinorHeaders'>PARTY WITH US</h3>
                <p className='Landing_content'>Check out a history of the events we've been a part of. Browse pictures and stories. From formal to fun it's all about making it your day!</p>
                <div className='link_Container'> 
                    <Link className='Section_links' to={'/our-work'}>
                        SEE OUR WORK
                    </Link>
                </div>
            </section>
            <section>
                <h3 className='Landing_headers Landing_noMinorHeaders'>HAVE AN UPCOMING EVENT?</h3>
                <p className='Landing_content'>Located in Oklahoma City, we work on projects across the state. Our expert technicians and staff are all local and we support other local businesses in the area. It's one of our core values.</p>
                <h4 className='Landing_contactHeader'>Give us a call at <br/>(450) 867-5309 <br/>or contact us here.</h4>
                <div className='link_Container'> 
                    <Link className='Section_links' to={'/contact'}>
                        CONTACT US
                    </Link>
                </div>
            </section>
        </>
    )
}