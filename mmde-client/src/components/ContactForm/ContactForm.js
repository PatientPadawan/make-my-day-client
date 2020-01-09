import React, { Component } from 'react'
import BlogContext from '../../contexts/BlogContext';
import BlogApiService from '../../services/blog-api-service';
import './ContactForm.css'

export default class ContactForm extends Component {
    static contextType = BlogContext
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          subject: 'Booking',
          message: '',
        }
    }

    onNameChange(event) {
        this.setState({name: event.target.value})
    }
    
    onEmailChange(event) {
        this.setState({email: event.target.value})
    }

    onSubjectChange(event) {
        this.setState({subject: event.target.value})
    }
    
    onMessageChange(event) {
        this.setState({message: event.target.value})
    }
    
    handleSubmit(event) {
        event.preventDefault();
        BlogApiService.postContactForm(this.state, this.context.accessToken)
        .then(window.alert('Message sent!'))
        .then(this.resetForm())
    }

    resetForm(){
        this.setState({name: '', email: '', subject: 'Booking', message: ''})
    }

    validateEmail() {
        const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return !(regExp.test(this.state.email))
    }

    render() {
        return(
            <>
                <h3>Contact Us</h3>
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
                                value={this.state.email} 
                                onChange={this.onEmailChange.bind(this)}
                            />
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