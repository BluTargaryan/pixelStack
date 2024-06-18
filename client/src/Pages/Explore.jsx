import React from 'react'
import Navbar from '../Components/Navbar'
import useProfile from '../hooks/useProfile'

const Explore = () => {
    const { isLogin } = useProfile();
    return (
        <>
            <Navbar isLogin={isLogin} />
            <hr />
            <div className="container">
                <h1 className='tw-text-2xl tw-mt-5'>Explore</h1>
            </div>
        </>
    )
}

export default Explore