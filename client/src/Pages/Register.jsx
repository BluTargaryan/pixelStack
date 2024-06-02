import React, { useState } from 'react'
import Input from '../Components/Input'
import Button from '../Components/Button'
import axios from 'axios'

const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleClick = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/api/auth/register', {
            name: name,
            email: email,
            password: password
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <React.Fragment>
            <div className='tw-w-full tw-my-5 tw-mb-16'>
                <div className='tw-flex tw-flex-col tw-justify-center tw-items-center'>
                    <div className='tw-mx-0 tw-text-center tw-flex tw-flex-col tw-justify-center tw-items-center tw-w-full tw-gap-3'>
                        <h3 className='tw-font-serif tw-text-2xl tw-tracking-normal'>Join PixelStack.</h3>
                        <h5 className='tw-font-normal tw-text-sm'>
                            Register with your email and get started.
                        </h5>
                    </div>
                    <div className='tw-mt-5'>
                        <form>
                            <div className='tw-flex tw-flex-col'>
                                <Input
                                    label={"Name"}
                                    type={"text"}
                                    id={"name"}
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <Input
                                    label={"Email"}
                                    type={"email"}
                                    id={"email"}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <Input
                                    label={"Password"}
                                    type={"password"}
                                    id={"password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <Button variant={"dark"} type={"submit"} onClick={handleClick}>
                                    Register
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Register