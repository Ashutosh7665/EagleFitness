import React from 'react';

const CardioWorkout = () => {
    const equipment = [
        {
            name: 'Treadmill CSW900',
            image: 'https://assets-global.website-files.com/64faf4a5e79a6f225824ad25/64faf4a5e79a6f225824ae9d_FM900-removebg-preview.png', // replace with actual image URL
        },
        {
            name: 'Shoulder Press - CSV5006',
            image: 'https://assets-global.website-files.com/64faf4a5e79a6f225824ad25/64faf4a5e79a6f225824ae5b_63998ec74cdf481a5cd5ace3_Curved_Treadmill_SH-T901Z_-0090_copy-removebg-preview.png', // replace with actual image URL
        },
        {
            name: 'Curved Treadmill-SH-T901Z',
            image: 'https://assets-global.website-files.com/64faf4a5e79a6f225824ad25/64faf4a5e79a6f225824ae8a_63998b4ee1a389ec0fd9ef3f_Core_Mill_-0356_copy-removebg-preview-p-500.png', // replace with actual image URL
        },
        {
            name: 'Coremill - CS-M560',
            image: 'https://assets-global.website-files.com/64faf4a5e79a6f225824ad25/64faf4a5e79a6f225824aee3_Screenshot-2022-12-22-at-180138-transformed-p-500.png', // replace with actual image URL
        },
        {
            name: 'Treadmill - CS550L',
            image: 'https://assets-global.website-files.com/64faf4a5e79a6f225824ad25/64faf4a5e79a6f225824aee4_Screenshot-2022-12-22-at-180239-transformed-p-500.png', // replace with actual image URL
        },
        {
            name: 'Elliptical CSW7150',
            image: 'https://assets-global.website-files.com/64faf4a5e79a6f225824ad25/64faf4a5e79a6f225824aea4_WC7150F-removebg-preview.png', // replace with actual image URL
        },
    ];

    return (
        <div className="bg-gray-100 min-h-screen py-12 px-6">
            <div className="container mx-auto max-w-6xl">
                <h1 className="text-4xl font-bold text-center mb-10">Cardio Workout Equipment</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {equipment.map((item, index) => (
                        <div key={index} className="relative bg-white rounded-lg overflow-hidden shadow-lg h-80">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-3/4 object-cover"
                            />
                            <div className="absolute bottom-0 inset-x-0 bg-black bg-opacity-50 p-4">
                                <h2 className="text-2xl font-bold text-white">{item.name}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CardioWorkout;
