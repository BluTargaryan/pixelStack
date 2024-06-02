import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../Components/Input'
import Button from '../Components/Button'


const Login = () => {
  return (
    <React.Fragment>
      <div className='tw-w-full tw-my-5 tw-mb-16'>
        <div className='tw-flex tw-flex-col tw-justify-center tw-items-center'>
          <div className='tw-mx-0 tw-text-center tw-flex tw-flex-col tw-justify-center tw-items-center tw-w-full tw-gap-3'>
            <h3 className='tw-font-serif tw-text-2xl tw-tracking-normal'>Welcome Back.</h3>
          </div>
          <div className='tw-mt-12'>
            <form action="">
              <div className='tw-flex tw-flex-col'>
                <Input
                  label={"Email"}
                  type={"email"}
                />
                <Input
                  label={"Password"}
                  type={"password"}
                />
                <span className='tw-w-full tw-text-center tw-my-4'>
                  <h5>
                    No account? <Link to="/register" className='tw-text-blue-500'>Register</Link>
                  </h5>
                </span>
                <Button variant={"dark"}>
                  Continue
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Login