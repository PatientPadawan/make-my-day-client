import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import NavBar from '../../components/NavBar/NavBar';
import './ContactPage.css';

export default function ContactPage() {
  return (
    <>
      <NavBar />
      <section>
        <ContactForm />
      </section>
    </>
  );
}
