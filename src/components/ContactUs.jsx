import React from 'react'

import MiniNavBar from './MiniNavBar'
import GetInTouch from './GetInTouch'
import ContactForm from './ContactForm'

function ContactUs() {
    return (
        <div>
            <MiniNavBar title="Contact Us" />
            <ContactForm />
            {/* <GetInTouch /> */}
        </div>
    )
}

export default ContactUs