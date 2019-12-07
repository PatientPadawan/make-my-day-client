import React from 'react'
import './ContactForm.css'

export default function ContactForm() {
    return(
        <>
        <h3>Contact Us</h3>
        <form>
            <ul className='ContactForm_list'>
                <li>
                    <label>Full Name </label>
                    <input type='text' name='field1' className='field-divided' placeholder='First' />
                    <input type='text' name='field2' className='field-divided' placeholder='Last' />
                </li>
                <li>
                    <label>Email </label>
                    <input type='email' name='field3' className='field-long'/>
                </li>
                <li>
                    <label>Subject </label>
                    <select name='field4' className='field-select'>
                        <option value='Booking'>Booking</option>
                        <option value='Partnership'>Partnership</option>
                        <option value='General'>General</option>
                    </select>
                </li>
                <li>
                    <label>Your Message </label>
                    <textarea name='field5' id='field5' className='field-long field-textarea'></textarea>
                </li>
                <li>
                    <input type='submit' value='Submit' />
                </li>
            </ul>    
        </form>
        </>
    )
}