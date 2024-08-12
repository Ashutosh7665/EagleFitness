import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const AboutUs = () => {
    return (
        <div className='min-h-screen py-12 px-6'>
            <div 
                className='relative container mx-auto max-w-4xl p-8 rounded-lg shadow-lg bg-cover bg-center'
                style={{ backgroundImage: "url('https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/05/24/10/istock-478624695.jpg')" }}
            >
                {/* Overlay */}
                <div className='absolute inset-0 bg-black opacity-50 rounded-lg'></div>

                {/* Content */}
                <div className='relative text-gray-100'>
                    <h1 className='text-3xl font-bold text-center mb-6'>About Eagle Fitness Gym</h1>

                    {/* Introduction Section */}
                    <div className='text-center mb-8'>
                        <p className='text-lg'>
                            Welcome to Eagle Fitness Gym, where we are dedicated to helping you achieve your fitness goals with state-of-the-art facilities and expert trainers. Our mission is to provide a welcoming and motivating environment for everyone, regardless of their fitness level.
                        </p>
                    </div>

                    {/* Our Story Section */}
                    <div className='mb-12'>
                        <h2 className='text-2xl font-semibold mb-4'>Our Story</h2>
                        <p className='leading-relaxed'>
                            Eagle Fitness Gym was founded with the vision of creating a fitness community where members feel inspired and supported. Over the years, we have grown from a small local gym into a leading fitness center, thanks to our dedicated staff and loyal members.
                        </p>
                    </div>

                    {/* Core Values Section */}
                    <div className='mb-12'>
                        <h2 className='text-2xl font-semibold mb-4'>Our Core Values</h2>
                        <ul className='list-disc list-inside space-y-2'>
                            <li>Commitment to Excellence</li>
                            <li>Empowerment Through Fitness</li>
                            <li>Inclusivity and Community</li>
                            <li>Integrity and Respect</li>
                        </ul>
                    </div>

                    {/* Testimonials Section */}
                    <div className='mb-12'>
                        <h2 className='text-2xl font-semibold mb-4'>What Our Members Say</h2>
                        <div className='flex flex-col md:flex-row md:space-x-8'>
                            <div className='bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-md mb-6 md:mb-0'>
                                <div className='flex items-center mb-4'>
                                    <FaQuoteLeft size={24} className='text-gray-400' />
                                    <p className='ml-2'>
                                        "Eagle Fitness Gym has transformed my life. The trainers are incredibly supportive, and the community is fantastic. I’ve never felt more motivated to reach my fitness goals!"
                                    </p>
                                </div>
                                <div className='flex items-center'>
                                    <FaQuoteRight size={24} className='text-gray-400' />
                                    <p className='ml-2 font-semibold'>- Jane Doe</p>
                                </div>
                            </div>
                            <div className='bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-md'>
                                <div className='flex items-center mb-4'>
                                    <FaQuoteLeft size={24} className='text-gray-400' />
                                    <p className='ml-2'>
                                        "The facilities at Eagle Fitness Gym are top-notch, and the staff always go the extra mile to make sure you’re achieving your best. Highly recommend!"
                                    </p>
                                </div>
                                <div className='flex items-center'>
                                    <FaQuoteRight size={24} className='text-gray-400' />
                                    <p className='ml-2 font-semibold'>- John Smith</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Information Section */}
                    <div className='text-center'>
                        <h2 className='text-2xl font-semibold mb-4'>Get in Touch</h2>
                        <p className='mb-2'>123 Fitness St, Gym City, XY 12345</p>
                        <p className='mb-2'>Phone: (123) 456-7890</p>
                        <p>Email: info@eaglefitnessgym.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
