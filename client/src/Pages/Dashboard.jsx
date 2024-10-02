import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import useProfile from '../hooks/useProfile'
import BlogItem from '../Components/BlogItem';
import Button from '../Components/Button';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet-async'

const Dashboard = () => {
  const { user, isLogin } = useProfile();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!isLogin) {
      return <Navigate to='/' />
    }

    const fetchPost = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/posts/getPost', {
          withCredentials: true
        });
        setPosts(response.data.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchPost();

  }, [isLogin]);


  return (
    <>
    <Helmet>
    <title>Dashboard - Manage Your Posts on PixelStack</title>
<meta name="title" content="Dashboard - Manage Your Posts on PixelStack" />
<meta name="description" content="View and manage your posts on PixelStack. Edit, update, or delete your content and track engagement all in one place." />
            </Helmet>
      <Navbar isLogin={isLogin} />
      <hr />
      <div className="container">
        <div className="tw-flex tw-w-full md:tw-items-center md:tw-justify-between tw-justify-start tw-items-start tw-my-5 tw-flex-col md:tw-flex-row tw-gap-4 md:tw-gap-0 tw-px-2 md:tw-px-0">
          <h3 className='md:tw-text-3xl tw-text-xl tw-font-sans tw-tracking-tighter'>
            Welcome, {
              user.name
                ? (user.name).split(' ')[0]
                : 'user'
            }!
          </h3>
          <Button variant='dark'>
            <Link to='/create' className='tw-font-sans tw-tracking-tighter'>Create Post</Link>
          </Button>
        </div>
        <div className="tw-mt-10 tw-flex tw-justify-center tw-px-2 md:tw-px-0">
          <div className="md:tw-w-3/5 tw-w-full">
            {
              posts.length > 0 && posts.map(post => (
                <BlogItem key={post._id} {...post} />
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard