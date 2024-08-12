import React from 'react';

const ContactUs = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-5">
            <h1 className="text-4xl font-bold text-center text-blue-800 mb-10">Contact Us</h1>
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8 text-center">Have any questions or concerns? Feel free to reach out to us, and we’ll get back to you as soon as possible.</p>
                
                <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-gray-700">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            className="block w-full p-2 mt-2 border border-gray-300 rounded focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-700">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="johndoe@example.com"
                            className="block w-full p-2 mt-2 border border-gray-300 rounded focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-gray-700">Your Message</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Your message here..."
                            className="block w-full p-2 mt-2 border border-gray-300 rounded focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"
                            rows="4"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
                    >
                        Send Message
                    </button>
                </form>
                
                <div className="mt-10 text-center">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Address</h2>
                    <p className="text-gray-600">Eagle Fitness Gym</p>
                    <p className="text-gray-600">123 Fitness Lane</p>
                    <p className="text-gray-600">Wellness City, WC 12345</p>
                    <p className="text-gray-600">Phone: (123) 456-7890</p>
                    <p className="text-gray-600">Email: info@eaglefitnessgym.com</p>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
