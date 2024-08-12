import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    const navigate = useNavigate();

    const handleNavigateToAbout = () => {
        navigate('/aboutus'); // Adjust this path based on your routing setup
    };

    return (
        <footer className='bg-gray-800 text-white py-8'>
            <div className='container mx-auto px-4'>
                <div className='flex flex-col md:flex-row justify-between'>
                    {/* About Section */}
                    <div className='mb-8 md:mb-0'>
                        <h2 className='text-xl font-bold mb-4'>Eagle Fitness Gym</h2>
                        <p className='text-gray-400'>
                            Transform your life with our top-notch facilities and dedicated trainers.
                        </p>
                        <p className='text-gray-400'>
                            Join us to achieve your fitness goals!
                        </p>
                        
                    </div>

                    {/* Navigation Links */}
                    <div className='mb-8 md:mb-0'>
                        <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
                        <ul>
                            <li>
                                <a href='/' className='hover:text-yellow-400'>Home</a>
                            </li>
                            <li>
                            <a href='/AboutUs' className='hover:text-yellow-400'>About Us</a>
                            </li>
                            <li>
                                <a href='/ServicePage' className='hover:text-yellow-400'>Services</a>
                            </li>
                            <li>
                                <a href='/ContactUs' className='hover:text-yellow-400'>Contact</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h3 className='text-lg font-semibold mb-4'>Contact Us</h3>
                        <p className='mb-2'>123 Fitness St, Gym City, XY 12345</p>
                        <p className='mb-2'>Phone: (123) 456-7890</p>
                        <p className='mb-2'>Email: info@eaglefitnessgym.com</p>
                    </div>
                </div>

                {/* Social Media Links */}
                <div className='mt-8 flex justify-center space-x-4'>
                    <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-white'>
                        <FaFacebookF size={20} />
                    </a>
                    <a href='https://twitter.com' target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-white'>
                        <FaTwitter size={20} />
                    </a>
                    <a href='https://instagram.com' target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-white'>
                        <FaInstagram size={20} />
                    </a>
                    <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-white'>
                        <FaLinkedinIn size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
