import React from 'react'

const BlogItem = () => {
    return (
        <>
            <div className="tw-flex tw-font-sans tw-tracking-tighter mb-3">
                {/* Left Side */}
                <div className="tw-basis-3/4">
                    <div className="tw-flex tw-flex-col">
                        {/* First Row: User Image, Name, Time */}
                        <div className='tw-flex tw-gap-3 tw-text-[14px] tw-items-center'>
                            <span className='tw-rounded-full tw-shadow-sm'>
                                <img src="userImg.png" width={30} alt="User Profile Image" />
                            </span>
                            <p>Lorem ipsum dolor sit ·</p>
                            <span className='tw-text-gray-500'>
                                Nov 12, 2021
                            </span>
                        </div>
                        {/* Second Row: Heading */}
                        <h3 className='tw-font-semibold tw-text-xl tw-mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis.</h3>
                        {/* Third Row: Content in Short */}
                        <h5 className='tw-text-gray-500 tw-text-sm tw-mt-1'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nesciunt sint iste possimus perspiciatis rem.
                        </h5>
                        {/* Fourth Row: Tag, Read Time, CTA */}
                    </div>
                </div>
                <div className="tw-basis-1/4">
                    <img src="testImg-1.jpg" width={600} alt="Test Banner Image" />
                </div>
            </div>
        </>
    )
}

export default BlogItem