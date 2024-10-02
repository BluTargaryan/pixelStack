import React from 'react'
import Navbar from '../Components/Navbar'
import useProfile from '../hooks/useProfile'
import { Helmet } from 'react-helmet-async'

const About = () => {
    const { isLogin } = useProfile();
    return (
        <>
        <Helmet>
        <title>About Us - Meet the Team Behind PixelStack</title>
        <meta name="title" content="About Us - Meet the Team Behind PixelStack" />
<meta name="description" content="Learn about the creators of PixelStack, our journey, and the passion driving our content. Discover the stories behind the articles you love." />
            </Helmet>
            <Navbar isLogin={isLogin} />
            <hr />
            <div className="container">
                <h1 className='tw-text-2xl tw-mt-5'>About</h1>
            </div>
        </>
    )
}

export default About