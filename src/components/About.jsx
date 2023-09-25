import React from 'react'
import NavBar from './NavBar'
import AboutSecTwo from './AboutSecTwo'
import Founders from './Founders'
import Testimonials from './Testimonials'
import Footer from './Footer'
import MiniNavBar from './MiniNavBar'


function About() {
    return (
        <div>
            <NavBar />
            <MiniNavBar title="about northtar"/>
            <AboutSecTwo />
            <Founders />
            <Testimonials />
            <Footer />
        </div>
    )
}

export default About