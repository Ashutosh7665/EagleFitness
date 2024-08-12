import React from 'react';

const images = [
  { src: 'https://www.shutterstock.com/image-illustration/multi-functional-trainer-machine-power-260nw-2435265415.jpg', label: 'Machines' },
  { src: 'https://m.media-amazon.com/images/I/41pJbQ4-aWL.jpg', label: 'Simpler Product' },
  { src: 'https://e1.pxfuel.com/desktop-wallpaper/52/885/desktop-wallpaper-dumbbell-53135-dumbbells.jpg', label: 'Dumbbells' },
  { src: 'https://m.media-amazon.com/images/I/811bTtYEvgL._SL1500_.jpg', label: 'Gym Parts' },
  { src: 'https://m.media-amazon.com/images/I/71y63EDhvGL._SL1435_.jpg', label: 'Any Product' },
  { src: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-support/r/5/6/belly-belt-5-meter-waist-belly-belt-elastic-band-weight-loss-original-imagg8vgzuea4dcr.jpeg?q=70', label: 'Televisions' },
  { src: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-support/r/5/6/belly-belt-5-meter-waist-belly-belt-elastic-band-weight-loss-original-imagg8vgzuea4dcr.jpeg?q=70', label: 'Weight loss' },
  { src: 'https://c4.wallpaperflare.com/wallpaper/853/914/400/clocks-suits-men-time-wallpaper-preview.jpg', label: 'Clocks' },
  { src: 'src/assets/gymProtein.png', label: 'Health Product' }
];

const CircleImages = ({ onCategorySelect }) => {
  return (
    <div className="flex gap-6 flex-wrap justify-center mt-4">
      {images.map(({ src, label }, index) => (
        <div key={index} className="text-center">
          <img
            src={src}
            alt={`circle-${index}`}
            className="w-24 h-24 rounded-full cursor-pointer transform transition-transform duration-200 hover:scale-110"
            onClick={() => onCategorySelect(label)}
          />
          <p className="mt-2 text-sm font-medium">{label}</p>
        </div>
      ))}
    </div>
  );
};

export default CircleImages;
