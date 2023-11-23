import React from 'react'
import {
    FiFacebook,
    FiLinkedin,
    FiInstagram,
    FiGithub,
    FiTwitter,
    FiYoutube
} from 'react-icons/fi';
import { Link } from "react-router-dom"

const Footer = () => {
    const footer = [
        {
            id: 1,
            icon: <FiLinkedin size={25} />,
            href: "https://www.linkedin.com/in/wasim-haider-559721244/",
        },
        {
            id: 2,
            icon: <FiGithub size={25} />,
            href: "https://github.com/wasimhaider55",
        },
        {
            id: 3,
            icon: <FiInstagram size={25} />,
            href: "https://instagram.com/wasimhaider14379?igshid=ZGUzMzM3NWJiOQ==",
        },
        {
            id: 4,
            icon: <FiFacebook size={25} />,
            href: "https://www.facebook.com/engrWasimKhan55/",
        },
        {
            id: 5,
            icon: <FiTwitter size={25} />,
            href: "https://twitter.com/WasimHa35327652?t=41PKrWnQOYBWJVaPeseNOw&s=09",
        },
        {
            id: 6,
            icon: <FiYoutube size={25} />,
            href: "https://www.youtube.com/@wmhshorts4943",
        }
    ];
    return (
        <main className='bg-black/90 text-white'>
            <div className=' font-bold pl-10 py-5 text-2xl'>
                Uber Eats
            </div>

            {/* Footer links */}

            <div className=' flex justify-between  py-5 px-6  sm:px-10  sm:text-lg text-sm gap-3'>
                <ul>
                    <h1 class=" font-bold">Company</h1>
                    <li>About Us</li>
                    <li>Newsroom</li>
                    <li>Investors</li>
                    <li>Blogs</li>
                    <li>Carres</li>
                </ul>
                <div>
                    <ul>
                        <h1 class=" font-bold">Products</h1>
                        <li>Ride</li>
                        <li>Drive</li>
                        <li>Eat</li>
                        <li>Uber  business</li>
                        <li>uber freight</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <h1 class=" font-bold">Global Citizenship</h1>
                        <li>Safety</li>
                        <li>Diversity</li>
                        <li>Transparency</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <h1 class=" font-bold">Innovation</h1>
                        <li>Ai</li>
                        <li>Elevate</li>
                        <li>Transparency</li>
                    </ul>
                </div>
            </div>

            <hr className=' border border-gray-700' />

            {/* Social media links */}

            <div>
                <div className='container mx-auto py-5'>
                    <div className='flex flex-col sm:flex-row items-center justify-around'>
                        <div className='flex space-x-6 items-center justify-center'>
                            {
                                footer.map(({ id, icon, href }) => (
                                    <Link
                                        key={id}
                                        className=' text-white hover:text-rose-600 hover:scale-125 duration-300'
                                        to={href} >
                                        {icon}
                                    </Link>

                                ))}
                        </div>

                        {/* Copyright */}

                        <p className='text-white text-md pt-3 sm:pt-0'>
                            &copy;2023 Uber Technologies inc.
                        </p>
                    </div>
                </div>

            </div>

        </main>
    )
}

export default Footer