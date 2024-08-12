import React from 'react';

const BodyWorkout = () => {
    const equipment = [
        {
            name: 'Hex Dumbbell - CS',
            image: 'https://assets-global.website-files.com/64faf4a5e79a6f225824ad25/64faf4a5e79a6f225824aef7_Hex-DB-transformed-p-500.webp', // replace with actual image URL
        },
        {
            name: 'Yoga Strap - CS',
            image: 'https://assets-global.website-files.com/64faf4a5e79a6f225824ad25/64faf4a5e79a6f225824aefe_yoga-strap-transformed-p-500.png', // replace with actual image URL
        },
        {
            name: 'Non Slip Adjustable Aerobic Stepper',
            image: 'https://assets-global.website-files.com/64faf4a5e79a6f225824ad25/64faf4a5e79a6f225824aef1_stepper-transformed-p-500.webp', // replace with actual image URL
        },
        {
            name: 'Round Dumbbell - CS',
            image: 'https://assets-global.website-files.com/64faf4a5e79a6f225824ad25/64faf4a5e79a6f225824aee6_round-DB-transformed-p-500.webp', // replace with actual image URL
        },
        {
            name: 'Fixed Barbell Rack - CS',
            image: 'https://assets-global.website-files.com/64faf4a5e79a6f225824ad25/64faf4a5e79a6f225824aedb_Fixed_Barbell_Rack_-0384_copy-removebg-preview.png', // replace with actual image URL
        },
        {
            name: 'Boxing Gloves - CS',
            image: 'https://assets-global.website-files.com/64faf4a5e79a6f225824ad25/64faf4a5e79a6f225824aee9_boxing-gloves-transformed-p-500.png', // replace with actual image URL
        },
    ];

    return (
        <div className="bg-gray-100 min-h-screen py-12 px-6">
            <div className="container mx-auto max-w-6xl">
                <h1 className="text-4xl font-bold text-center mb-10">Body Workout Equipment</h1>
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

export default BodyWorkout;
