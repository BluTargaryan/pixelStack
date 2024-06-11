import React from 'react'
import { formatISO9075 } from 'date-fns'

const BlogItem = ({ _id, title, summary, cover, content, createdAt, author }) => {
    return (
        <>
            <div className="tw-flex tw-font-sans tw-tracking-tighter tw-mb-10 tw-items-center md:tw-gap-16 tw-gap-5 tw-cursor-pointer md:tw-flex-row tw-flex-col-reverse">
                {/* Left Side */}
                <div className="tw-basis-3/5">
                    <div className="tw-flex tw-flex-col">
                        {/* First Row: User Image, Name, Time */}
                        <div className='tw-flex tw-gap-3 tw-text-[14px] tw-items-center'>
                            <span className='tw-rounded-full tw-shadow-sm'>
                                <img src="userImg.png" width={30} alt="User Profile Image" />
                            </span>
                            <p>{author ? author.name : 'null'}</p>
                            <span className='tw-text-gray-500'>
                                {createdAt ? formatISO9075(new Date(createdAt)) : 'none'}
                            </span>
                        </div>
                        {/* Second Row: Heading */}
                        <h3 className='tw-font-semibold tw-text-xl tw-mt-4'>{title}</h3>
                        {/* Third Row: Content in Short */}
                        <h5 className='tw-text-gray-500 tw-text-sm tw-mt-1'>
                            {summary}
                        </h5>
                        {/* Fourth Row: Tag, Read Time, CTA */}
                    </div>
                </div>

                <div className="tw-basis-2/5">
                    <img className='tw-aspect-video tw-object-cover' src={'http://localhost:3000/' + cover} width={600} alt="Test Banner Image" />
                </div>

            </div>
        </>
    )
}

export default BlogItem