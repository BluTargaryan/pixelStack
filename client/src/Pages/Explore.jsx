import React from 'react'
import Navbar from '../Components/Navbar'
import useProfile from '../hooks/useProfile'
import { Helmet } from 'react-helmet-async'

const Explore = () => {
    const { isLogin } = useProfile();
    return (
        <>
        <Helmet>
        <title>Explore Page - PixelStack</title>
         <meta name="title" content="Explore Page - PixelStack" />
         <meta name="description" content="Discover stories, thinking, and expertise from writers on any topic." />
            </Helmet>
            <Navbar isLogin={isLogin} />
            <hr />
            <div className="container">
                <h1 className='tw-text-2xl tw-mt-5'>Explore</h1>
            </div>
        </>
    )
}

export default Explore