import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import '../styles/Contact.css';
import contact from '../assets/images/contact.jpeg';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_3zfp61k',
      'template_bbfy4ia',
      form.current,
      'PFcb1LzjcIuVRzoPS'
    );
    e.target.reset();
  };

  return (
    <section className='contact_section'>
      <div className='section__title'>
        <h1>CONTACT US</h1>
      </div>
      <div className='contact-image-container'>
        <img src={contact} alt='Contact' className='contact-image' />
      </div>
      <div className='container'>
        <div className='contactInfo'>
          <div className='box'>
            <div className='icon'>
              <i className='ri-map-pin-line'></i>
              <div className='text'>
                <h3>Address</h3>
                <p>Ab colony,<br/>Guntur,<br/>Andhra Pradesh, India</p>
              </div>
            </div>
          </div>
          <br />
          <br/>

          <div className='box'>
            <div className='icon'>
              <i className='ri-mail-line'></i>
              <div className='text'>
                <h3>Email</h3>
                <p>xyz@gmail.com</p>
              </div>
            </div>
          </div>
          <br />
          <br/>
          <div className='box'>
            <div className='icon'>
              <i className='ri-phone-line'></i>
              <div className='text'>
                <h3>Phone</h3>
                <p> 652-568-1234 </p>
              </div>
            </div>
          </div>
          <br />
          <br/>
        </div>
        <div className='contactForm'>
          <form>
            <h2>Send Message</h2>
            <br />
            <div className='inputBox'>
              <input type='text' name='' required='required'></input>
              <span>Full Name</span>
            </div>

            <div className='inputBox'>
              <input type='text' name='' required='required'></input>
              <span>Email</span>
            </div>
            <div className='inputBox'>
              <textarea required='required'></textarea>
              <span>Write Message Here</span>
            </div>
            <div className='inputBox'>
              <input type='submit' name='' value='Send'></input>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
