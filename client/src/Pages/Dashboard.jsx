import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import useProfile from '../hooks/useProfile'
import BlogItem from '../Components/BlogItem';
import Button from '../Components/Button';

const Dashboard = () => {
  const { user, isLogin } = useProfile();
  useEffect(() => {
    console.log(user)
  }, [user])
  return (
    <>
      <Navbar isLogin={isLogin} />
      <hr />
      <div className="container">
        <div className="tw-flex tw-w-full tw-items-center tw-justify-between tw-my-5">
          <h3 className='tw-text-3xl tw-font-sans tw-mt-4 tw-tracking-tighter'>
            Welcome {
              user.name
                ? user.name
                : user.email
            }
          </h3>
          <Button variant='dark' onClick={() => { window.location.href = '/create' }}>
            Create Post
          </Button>
        </div>
        <div className="tw-mt-3">
          <div className="row">
            <div className="col-md-6">
              <BlogItem />
              <BlogItem />
            </div>
            <div className="col-md-6">

            </div>
          </div>
        </div>
        <Button variant='dark'>
          Click me
        </Button>
      </div>
    </>
  )
}

export default Dashboard