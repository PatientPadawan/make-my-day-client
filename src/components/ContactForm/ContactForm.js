import React, { Component } from 'react';
import BlogContext from '../../contexts/BlogContext';
import ContactApiService from '../../services/contact-api-service';
import ValidationError from '../ValidationError/ValidationError';
import './ContactForm.css';

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: {
        value: '',
        touched: false,
      },
      subject: 'Booking',
      message: '',
    };
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: { value: event.target.value, touched: true } });
  }

  onSubjectChange(event) {
    this.setState({ subject: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(event) {
    const {
      name,
      email,
      subject,
      message,
    } = this.state;
    const { accessToken } = this.context;
    event.preventDefault();
    const contactInfo = {
      name,
      email: email.value,
      subject,
      message,
    };
    ContactApiService.postContactForm(contactInfo, accessToken)
      .then(window.alert('Message sent!'))
      .then(this.resetForm());
  }

  resetForm() {
    this.setState({ name: '', email: { value: '' }, message: '' });
  }

  validateEmail() {
    const { email } = this.state;
    const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regExp.test(email.value)) {
      return 'Enter valid email';
    }
    return null;
  }

  static contextType = BlogContext

  render() {
    const emailError = this.validateEmail();
    const { name, email, message } = this.state;
    return (
      <>
        <h3 id="ContactForm_header">GET IN TOUCH</h3>
        <form>
          <ul className="ContactForm_list">
            <li>
              <label htmlFor="name">
                Name
                <input
                  id="name"
                  type="text"
                  name="field1"
                  className="field-long"
                  value={name}
                  onChange={this.onNameChange.bind(this)}
                />
              </label>
            </li>
            <li>
              <label htmlFor="email">
                Email
                <input
                  id="email"
                  type="email"
                  name="field3"
                  className="field-long"
                  value={email.value}
                  onChange={this.onEmailChange.bind(this)}
                />
              </label>
              {email.touched && <ValidationError message={emailError} />}
            </li>
            <li>
              <label htmlFor="eventType">
                Event Type
                <select
                  id="eventType"
                  name="field4"
                  className="field-select"
                  onChange={this.onSubjectChange.bind(this)}
                >
                  <option value="Wedding">Wedding</option>
                  <option value="Marquee">Marquee</option>
                  <option value="Private">Private</option>
                  <option value="Other">Other</option>
                </select>
              </label>
            </li>
            <li>
              <label htmlFor="yourMessage">
                Your Message
                <textarea
                  id="yourMessage"
                  name="field5"
                  className="field-long field-textarea"
                  value={message}
                  onChange={this.onMessageChange.bind(this)}
                />
              </label>
            </li>
            <li>
              <button
                onClick={this.handleSubmit.bind(this)}
                type="submit"
                className="addNoteButton"
                disabled={this.validateEmail()}
              >
                Submit
              </button>
            </li>
          </ul>
        </form>
      </>
    );
  }
}
