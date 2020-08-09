import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    
    function handleChange(e) {
        setFormState({...formState, name: e.target.value })
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);

            // isValid conditional statement
            if (!isValid) {
             setErrorMessage('Your email is invalid.');
            } else {
            setErrorMessage('');
             }
            } else {
                if (!e.target.value.length) {
                  setErrorMessage(`${e.target.name} is required.`);
                } else {
                  setErrorMessage('');
                }
              }
              if (!errorMessage) {
                setFormState({ ...formState, [e.target.name]: e.target.value });
              }
          }  
      
      // console.log(formState);

      function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
      }
    // JSX
    return (
      <section id="contact-section">
          <h1 className="contact">Contact</h1>
          <hr></hr>
          <form class="justify-content-center" id="contact-form">
              <div>
                  <label htmlFor="name">name:</label>
                  <input class="form-control" type="text" name="name"  defaultValue={name} onBlur={handleChange}/>
              </div>
              <div >
                  <label htmlFor="email">email:</label>
                  <input class="form-control" type="email"  name="email" defaultValue={email} onBlur={handleChange} />
              </div>
              <div>
                  <label htmlFor="message">message:</label>
                  <textarea class="form-control" name="message" defaultValue={message} onBlur={handleChange} rows="7" />
              </div> 
              {errorMessage && (
              <div>
                  <p className="error-text">{errorMessage}</p>
              </div>
              )}
  
              <div>
              <button data-testid='button' class="btn btn-outline-dark mt-2" type="submit" onSubmit={handleSubmit}>Submit</button>
              </div>
          </form>
      </section>
      );
    }
    
    export default ContactForm;