import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg p-md-4 px-md-0 px-2 tw-bg-amber-400">
                <div className="container">
                    <a className="navbar-brand tw-font-bold md:tw-text-3xl tw-text-2xl" href="#">PixelStack</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navLink" aria-controls="navLink" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navLink">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 tw-gap-2 tw-font-sans tw-tracking-tighter tw-font-medium">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Explore</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                            <li className="nav-item">
                                <button className='btn btn-outline-dark tw-rounded-full focus-ring focus-ring-dark tw-px-4' >Sign in</button>
                            </li>
                            <li className="nav-item">
                                <button className='btn btn-dark tw-rounded-full focus-ring focus-ring-dark tw-px-4' >Get started</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar