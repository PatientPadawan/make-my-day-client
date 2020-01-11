import React, { Component } from 'react';
import BlogContext from '../../contexts/BlogContext';
import BlogApiService from '../../services/blog-api-service';
import ValidationError from '../ValidationError/ValidationError';
import './ContactForm.css'

export default class ContactForm extends Component {
    static contextType = BlogContext
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: {
              value: '',
              touched: false
          },
          subject: 'Booking',
          message: '',
        }
    }

    onNameChange(event) {
        this.setState({ name: event.target.value })
    }
    
    onEmailChange(event) {
        this.setState({ email: { value: event.target.value, touched: true }})
    }

    onSubjectChange(event) {
        this.setState({ subject: event.target.value })
    }
    
    onMessageChange(event) {
        this.setState({ message: event.target.value })
    }
    
    handleSubmit(event) {
        event.preventDefault();
        const contactInfo = {
            name: this.state.name,
            email: this.state.email.value,
            subject: this.state.subject,
            message: this.state.message
        }
        BlogApiService.postContactForm(contactInfo, this.context.accessToken)
        .then(window.alert('Message sent!'))
        .then(this.resetForm())
    }

    resetForm(){
        this.setState({name: '', email: { value: '' }, message: ''})
    }

    validateEmail() {
        const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!regExp.test(this.state.email.value)) {
            return 'Enter valid email'
        }
    }

    render() {
        const emailError = this.validateEmail();
        return(
            <>
                <h3>Get in touch</h3>
                <form>
                    <ul className='ContactForm_list'>
                        <li>
                            <label>Name </label>
                            <input 
                                type='text' 
                                name='field1' 
                                className='field-long' 
                                value={this.state.name} 
                                onChange={this.onNameChange.bind(this)} 
                            />
                        </li>
                        <li>
                            <label>Email </label>
                            <input 
                                type='email' 
                                name='field3' 
                                className='field-long'
                                value={this.state.email.value} 
                                onChange={this.onEmailChange.bind(this)}
                            />
                            {this.state.email.touched && <ValidationError message={emailError}/>}
                        </li>
                        <li>
                            <label>Subject </label>
                            <select name='field4' className='field-select' onChange={this.onSubjectChange.bind(this)}>
                                <option value='Booking'>Booking</option>
                                <option value='Partnership'>Partnership</option>
                                <option value='General'>General</option>
                            </select>
                        </li>
                        <li>
                            <label>Your Message </label>
                            <textarea 
                                name='field5' 
                                id='field5' 
                                className='field-long field-textarea'
                                value={this.state.message} 
                                onChange={this.onMessageChange.bind(this)}
                            />
                        </li>
                        <li>
                            <button 
                                onClick={this.handleSubmit.bind(this)}
                                type='submit'
                                className='addNoteButton'
                                disabled={this.validateEmail()}
                            >
                                Submit
                            </button>
                        </li>
                    </ul>    
                </form>
            </>
        )
    }
}