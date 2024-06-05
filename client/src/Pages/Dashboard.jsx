import React, { useEffect } from 'react'
import Button from '../Components/Button'
import Navbar from '../Components/Navbar'

const Dashboard = ({ user }) => {
  useEffect(() => {
    console.log(user)
  }, [user])
  return (
    <>
      <Navbar isLogin={true} />
      {user.name.split(' ')[0]}
    </>
  )
}

export default Dashboard