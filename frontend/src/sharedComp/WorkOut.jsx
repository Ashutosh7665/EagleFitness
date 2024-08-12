import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ backgroundColor, title, description, onViewMore }) => {
  return (
    <div
      className="relative rounded-lg shadow-lg overflow-hidden w-full h-[350px]"
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-between p-4">
        <div>
          <h1 className="text-white text-4xl font-bold mb-2">{title}</h1>
          <p className="text-gray-300 text-xl mb-4">{description}</p>
        </div>
        <div className="border-t border-gray-500 pt-4">
          <button
            onClick={onViewMore}
            className="text-white bg-red-300 hover:bg-blue-600 px-4 py-2 rounded transition w-full"
          >
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

const WorkOut = () => {
  const navigate = useNavigate();

  const handleViewMore = (url) => {
    navigate(url);
  };

  const cardsData = [
    {
      id: 1,
      backgroundColor: 'bg-white bg-opacity-60', // Use a bright color
      title: 'Strength Training',
      description: 'Durable, ergonomic, and easily adjustable - our lines of strength equipment are designed with the best biomechanics to deliver optimal results.',
      url: '/strengthtraining',
    },
    {
      id: 2,
      backgroundColor: 'bg-white bg-opacity-60', // Use a different bright color
      title: 'Cardio Workouts',
      description: 'Technologically superior & ergonomically designed, our cardio range has been created with the highest quality components to deliver guaranteed delight to your members.',
      url: '/cardioworkout',
    },
    {
      id: 3,
      backgroundColor: 'bg-white bg-opacity-60', // Another bright color
      title: 'Full-Body Workouts',
      description: 'Choose from our large collection of free weights and accessories specially designed for all forms of low, mid, and heavy workouts.',
      url: '/bodyworkout',
    },
  ];

  return (
    <div
      className="min-h-screen p-8"
      style={{
        backgroundImage: 'url(https://e0.pxfuel.com/wallpapers/262/114/desktop-wallpaper-woman-men-fitness-bodybuilders-bodybuilder-men-and-women-women-gym.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1 className="text-5xl font-bold text-center text-white mb-8">Our Gym Programs</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cardsData.map((card) => (
          <Card
            key={card.id}
            backgroundColor={card.backgroundColor}
            title={card.title}
            description={card.description}
            onViewMore={() => handleViewMore(card.url)}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkOut;
