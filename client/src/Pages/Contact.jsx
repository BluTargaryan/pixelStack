import React from 'react'
import Navbar from '../Components/Navbar'
import useProfile from '../hooks/useProfile'
import { Helmet } from 'react-helmet-async'

const Contact = () => {
    const { isLogin } = useProfile();
    return (
        <>
         <Helmet>
         <title>Contact Us - Get in Touch with PixelStack</title>
         <meta name="title" content="Contact Us - Get in Touch with PixelStack" />
         <meta name="description" content="Reach out to the PixelStack team via email, phone, or social media. We're here to answer your questions and provide assistance." />
            </Helmet>
            <Navbar isLogin={isLogin} />
            <hr />
            <div className="container">
                <h1 className='tw-text-2xl tw-mt-5'>Contact</h1>
            </div>
        </>
    )
}

export default Contact