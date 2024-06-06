import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import useProfile from '../hooks/useProfile'

const Dashboard = () => {
  const { user, isLogin } = useProfile();
  useEffect(() => {
    document.title = `Welcome ${user.name
        ? user.name
        : user.email
      }`
  }, [user])
  return (
    <>
      <Navbar isLogin={isLogin} />
      <hr />
      <div className="container">
        <h3 className='tw-text-3xl tw-font-sans tw-mt-4 tw-tracking-tighter'>
          Welcome {
            user.name
              ? user.name
              : user.email
          }
        </h3>
      </div>
    </>
  )
}

export default Dashboard