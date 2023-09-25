import React from 'react'
import AboutSecTwo from './AboutSecTwo'
import Founders from './Founders'
import Testimonials from './Testimonials'
import MiniNavBar from './MiniNavBar'


function About() {
    return (
        <div>
            <MiniNavBar title="about northtar"/>
            <AboutSecTwo />
            <Founders />
            <Testimonials />
        </div>
    )
}

export default About