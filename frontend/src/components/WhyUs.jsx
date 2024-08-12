import React from 'react';

const WhyUs = () => {
  return (
    <div
      className="min-h-screen p-8 bg-cover bg-center relative"
      style={{
        backgroundImage: 'url(https://w0.peakpx.com/wallpaper/315/293/HD-wallpaper-sports-weightlifting-bodybuilder-gym-man-muscle.jpg)', // Replace with your image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30"></div> {/* Semi-transparent overlay */}
      <div className="relative z-10 p-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Why Choose Eagle Gym?</h1>
          <p className="text-lg text-gray-200">
            Discover why Eagle Gym stands out as the best fitness center for your health and wellness journey.
          </p>
        </header>
        
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white bg-opacity-60 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">State-of-the-Art Equipment</h2>
            <p className="text-gray-700">
              Our gym is equipped with the latest and greatest fitness technology to help you achieve your goals efficiently and effectively.
            </p>
          </div>
          
          <div className="bg-white bg-opacity-60 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Expert Trainers</h2>
            <p className="text-gray-700">
              Our certified trainers are dedicated to providing personalized guidance and support to help you reach your fitness milestones.
            </p>
          </div>
          
          <div className="bg-white bg-opacity-60 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Flexible Membership Plans</h2>
            <p className="text-gray-700">
              We offer a range of membership plans to fit every budget and lifestyle, ensuring you get the best value for your investment.
            </p>
          </div>
          
          <div className="bg-white bg-opacity-60 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Clean and Comfortable Environment</h2>
            <p className="text-gray-700">
              Our gym prioritizes cleanliness and comfort, providing a welcoming atmosphere for all members.
            </p>
          </div>
          
          <div className="bg-white bg-opacity-60 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Diverse Classes and Programs</h2>
            <p className="text-gray-700">
              We offer a variety of classes and programs to cater to different fitness levels and interests, from yoga to high-intensity training.
            </p>
          </div>
          
          <div className="bg-white bg-opacity-60 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Community and Support</h2>
            <p className="text-gray-700">
              Join a supportive community of fitness enthusiasts who motivate and inspire each other to reach new heights.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WhyUs;
