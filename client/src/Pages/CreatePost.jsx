import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Input from '../Components/Input'
import Editor from '../Components/Editor'
import Button from '../Components/Button'
import axios from 'axios'

const CreatePost = () => {

    const [title, setTitle] = useState('')
    const [summary, setSummary] = useState('')
    const [cover, setCover] = useState('')
    const [loading, setLoading] = useState(false)

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const response = axios.post('http://localhost:3000/api/posts/create', {
            title: 'Title',
            summary: 'Summary',
            content: 'Content'
        })
        setLoading(true)
    }

    return (
        <div>
            <Navbar isLogin={true} />
            <hr />
            <div className="container tw-my-4 tw-w-2/4">
                <h3 className="tw-text-3xl tw-font-sans tw-mt-4 tw-tracking-tighter">
                    Create Post
                </h3>
                <form action="">
                    <Input
                        type={"text"}
                        label={"Title"}
                        align={"left"}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <Input
                        type={"text"}
                        label={"Summary"}
                        align={"left"}
                        value={summary}
                        onChange={(e) => setSummary(e.target.value)}
                    />

                    <Input
                        type={"file"}
                        label={"Cover Image"}
                        align={"left"}
                        value={cover}
                        onChange={(e) => setCover(e.target.value)}
                    />

                    <label className='tw-font-sans tw-text-gray-500 tw-text-sm'>Content</label>
                    <Editor />
                    <br />
                    <Button variant='dark' block={true} onClick={handleFormSubmit} disabled={loading}>
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default CreatePost