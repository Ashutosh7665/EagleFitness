import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen mt-4"
      style={{
        backgroundImage: 'url(https://t3.ftcdn.net/jpg/00/90/21/22/360_F_90212267_soThMAr7ZpdkWSN4fjoW6wLR6zDjc4kK.jpg)', // Replace with your hero image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ background: 'rgba(0, 0, 0, 0.3)' }} // Adjust opacity for better image visibility
      >
        <div className="text-center text-white p-8 pt-24"> {/* Added pt-24 to move content down */}
          <h1 className="text-5xl font-bold mb-4">Transform Your Fitness Journey</h1>
          <p className="text-xl mb-6">
            Join Eagle Gym and reach your health and wellness goals with our state-of-the-art facilities and expert trainers.
          </p>
          <Link
            to="/joinform"
            className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition"
          >
            Join Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
