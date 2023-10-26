import React from 'react'

import MiniNavBar from './MiniNavBar'
import ContactForm from './ContactForm'
import VisitUs from './VisitUs'

function ContactUs() {
    return (
        <div>
            <MiniNavBar title="Contact Us" />
            <div className="px-5 sm:px-16 py-32">
                <div className='flex flex-col min-[900px]:flex-row gap-10 justify-between text-left basis-[62%] overflow-hidden text-[#555555]'>
                    <ContactForm />
                    <VisitUs />
                </div>
            </div>
            {/* <GetInTouch /> */}
        </div >
    )
}

export default ContactUs