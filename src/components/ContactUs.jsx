import React from 'react'
import NavBar from './NavBar'
import MiniNavBar from './MiniNavBar'
import GetInTouch from './GetInTouch'
import Footer from './Footer'
import ContactForm from './ContactForm'

function ContactUs() {
    return (
        <div>
            <NavBar />
            <MiniNavBar title="Contact Us" />
            <ContactForm />
            {/* <GetInTouch /> */}
            <Footer />
        </div>
    )
}

export default ContactUs