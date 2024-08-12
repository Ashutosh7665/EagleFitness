import React from 'react';

const StrengthTraining = () => {
    const equipment = [
        {
            name: 'Lat Pulldown - CSV5035',
            image: 'https://assets-global.website-files.com/64faf4a5e79a6f225824ad25/64faf4a5e79a6f225824aeaa_Screenshot-2022-12-22-at-160817-transformed-p-500.png', // replace with actual image URL
        },
        {
            name: 'Shoulder Press - CSV5006',
            image: 'https://assets-global.website-files.com/64faf4a5e79a6f225824ad25/64faf4a5e79a6f225824aec1_Screenshot-2022-12-22-at-160830-9SJxMWRZS-transformed-p-500.png', // replace with actual image URL
        },
        {
            name: 'Smith Machine - CSV3063',
            image: 'https://assets-global.website-files.com/64faf4a5e79a6f225824ad25/64faf4a5e79a6f225824aec4_Screenshot-2022-12-22-at-160932-transformed-p-800.png', // replace with actual image URL
        },
        {
            name: 'Bicep / Tricep - CSV5087',
            image: 'https://assets-global.website-files.com/64faf4a5e79a6f225824ad25/64faf4a5e79a6f225824aeb0_Screenshot-2022-12-22-at-160847-transformed-p-800.png', // replace with actual image URL
        },
        {
            name: 'Seated Leg Curl - CSV5023',
            image: 'https://assets-global.website-files.com/64faf4a5e79a6f225824ad25/64faf4a5e79a6f225824aeb6_Screenshot-2022-12-22-at-160836-transformed-p-500.png', // replace with actual image URL
        },
        {
            name: 'Plate Loaded Leg Press CSV3056',
            image: 'https://assets-global.website-files.com/64faf4a5e79a6f225824ad25/64faf4a5e79a6f225824aea0_Screenshot-2022-12-13-at-112319-transformed-p-500.png', // replace with actual image URL
        },
    ];

    return (
        <div className="bg-gray-100 min-h-screen py-12 px-6">
            <div className="container mx-auto max-w-6xl">
                <h1 className="text-4xl font-bold text-center mb-10">Strength Training Equipment</h1>
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

export default StrengthTraining;
