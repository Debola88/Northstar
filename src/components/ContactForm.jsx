import React, { useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import { SnackbarProvider, enqueueSnackbar } from 'notistack'



function ContactForm() {

    useEffect(() => {
        AOS.init()
    }, [])

    const [firstname, setFirstname] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleFirstnameChange = (event) => {
        setFirstname(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    }


    const handleClick = () => {
        // 👇️ clear input value
        setFirstname('');
        setEmail('');
        setMessage('');
    };


    return (
        <div>
            <SnackbarProvider variant="info" autoHideDuration={3000}/>
            <h2 className='text-3xl text-[#3A3939] font-bold sm:text-4xl'>We would love to hear from you.</h2>
            <h3 className='py-8'>If you have any query or any type of suggestion, you can contact us here. We would love to hear from you.</h3>
            <div className=" " data-aos="zoom-in-up">
                <form className='w-full space-y-4' id='message'>
                    <div className='flex flex-col min-[1024px]:flex-row gap-x-10 w-full'>
                        <div className='py-2 w-full'>
                            <input type="text" className='py-3 pl-2 w-full outline-none' placeholder='Name' id='name' onChange={handleFirstnameChange}
                                value={firstname} required />
                        </div>
                        <div className='py-2 w-full'>
                            <input type="email" className='py-3 w-full pl-2 outline-none' placeholder='Email' id='email' onChange={handleEmailChange}
                                value={email} required />
                        </div>
                    </div>
                    <div className='left-0'>
                        <label className='pr-4'>Message</label>
                        <textarea className='text-left w-full h-40 outline-none p-2' onChange={handleMessageChange}
                            value={message} required />
                    </div>
                    <div className='text-left py-10'>
                        <button type='button' className='text-xs bg-[#024E82] uppercase py-3 px-6 text-white hover:bg-[#025382]/90 border-2 hover:text-white transition' onClick={() => {
                            handleClick(); {
                                message === '' ?
                                enqueueSnackbar('Fill all information properly', { variant:"info" }) :
                                enqueueSnackbar('Message sent successfully!', { variant:"success" })
                            }
                        }}>
                            Send message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactForm