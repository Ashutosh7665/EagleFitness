import React, { useState } from 'react';
import axios from 'axios';

const JoinForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        gender: '',
        membershipType: '',
        address: '',
        termsAccepted: false,
    });
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URI}/forms/join`, formData);
            if (response.status === 201) {
                setSuccessMessage('Form submitted successfully!');
                setTimeout(() => {
                    // You can still show a success message or perform another action here if needed
                }, 2000); // Adjust the timeout as needed
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='h-screen flex justify-center items-center bg-gradient-to-r from-green-400 to-blue-500'>
            <div className='bg-white w-4/5 flex shadow-2xl rounded-xl'>
                <div className='w-full flex justify-center'>
                    <div className='w-full items-center flex flex-col justify-center'>
                        {successMessage && (
                            <div className='bg-green-100 text-green-700 border border-green-400 p-4 rounded mb-4 w-full text-center'>
                                {successMessage}
                            </div>
                        )}
                        <h1 className='text-center text-2xl font-semibold'>Join Eagle Fitness Gym</h1>
                        <form onSubmit={handleSubmit} className='w-auto'>
                            <div className='my-5 w-full grid grid-cols-2 gap-3'>
                                <div>
                                    <label htmlFor="name">Full Name</label>
                                    <input
                                        type="text"
                                        name='name'
                                        required
                                        placeholder='Full Name'
                                        className='block p-2 my-2 outline-none border rounded w-full'
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        type="email"
                                        name='email'
                                        required
                                        placeholder='Email Address'
                                        className='block p-2 my-2 outline-none border rounded w-full'
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone">Phone Number</label>
                                    <input
                                        type="tel"
                                        name='phone'
                                        required
                                        placeholder='Phone Number'
                                        className='block p-2 my-2 outline-none border rounded w-full'
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="gender">Gender</label>
                                    <select
                                        name="gender"
                                        required
                                        className='block p-2 my-2 outline-none border rounded w-full'
                                        value={formData.gender}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="membershipType">Membership Type</label>
                                    <select
                                        name="membershipType"
                                        required
                                        className='block p-2 my-2 outline-none border rounded w-full'
                                        value={formData.membershipType}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select Membership Type</option>
                                        <option value="basic">Basic</option>
                                        <option value="premium">Premium</option>
                                        <option value="vip">VIP</option>
                                    </select>
                                </div>
                                <div className='col-span-2'>
                                    <label htmlFor="address">Address</label>
                                    <textarea
                                        name='address'
                                        required
                                        placeholder='Address'
                                        className='block p-2 my-2 outline-none border rounded w-full'
                                        rows={3}
                                        value={formData.address}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className='col-span-2'>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name='termsAccepted'
                                            checked={formData.termsAccepted}
                                            onChange={handleChange}
                                            required
                                        />
                                        I accept the terms and conditions
                                    </label>
                                </div>
                            </div>
                            <div className='w-full'>
                                <button type='submit' className='p-2 bg-blue-600 w-full active:bg-blue-800 rounded text-white py-1 my-4'>Join</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinForm;
