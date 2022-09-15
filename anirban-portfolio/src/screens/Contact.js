import React from 'react';
import Contactform from '../components/Contactform';
import '../styles/Contact.css'

function Contact() {
    return(
        <div className='Ccontainer'>
            <div className="top-welcome">
                <label  id="top-label">Want to get in touch?</label>
                <label id="top-label">Drop me a letter!</label>
            </div>
            <Contactform/>
        </div>
    )
}

export default Contact;
