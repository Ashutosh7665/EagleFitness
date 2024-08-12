import React from 'react';
import Owner from "../assets/Owner.jpg";
import vikas from "../assets/vikas.jpg";
import gymer from "../assets/gymer.jpg"
const OwnerAndTrainer = () => {
    const profiles = [
        {
            name: "Ashutosh Tiwari",
            role: "Gym Owner",
            image: Owner,
            bio: "Ashutosh is the visionary behind Eagle Fitness Gym. With over 20 years of experience in the fitness industry, he is dedicated to helping people achieve their fitness goals."
        },
        {
            name: "Vikas Sharma",
            role: "Head Trainer",
            image: vikas,
            bio: "Vikas is an expert in strength training and nutrition. His personalized training programs have helped countless members transform their lives."
        },
        {
            name: "Mike Johnson",
            role: "Personal Trainer",
            image: gymer,
            bio: "Mike specializes in high-intensity interval training (HIIT) and functional fitness. He is passionate about helping clients push their limits."
        }
    ];

    return (
        <div
            className="min-h-screen p-5"
            style={{
                background: 'linear-gradient(to right, #ff6f61, #ffbb00, #00bfae, #00c6ff)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
            }}
        >
            <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-90 p-5">
                <h1 className="text-5xl font-bold text-center text-white mb-10">Owner and Trainers</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {profiles.map((profile, index) => (
                        <div key={index} className="bg-white bg-opacity-80 rounded-lg shadow-lg p-6 flex flex-col items-center">
                            <img src={profile.image} alt={profile.name} className="w-40 h-40 rounded-full object-cover mb-4" />
                            <h2 className="text-2xl font-semibold mb-2 text-gray-800">{profile.name}</h2>
                            <h3 className="text-xl text-blue-600 mb-4">{profile.role}</h3>
                            <p className="text-gray-600 text-center">{profile.bio}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default OwnerAndTrainer;
