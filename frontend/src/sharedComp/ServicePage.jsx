import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'; // Strength Training
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun'; // Cardio Workouts
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement'; // Yoga Classes (alternative)

const services = [
  { icon: <FitnessCenterIcon fontSize="inherit" />, title: 'Strength Training', description: 'Build muscle and strength with personalized workouts.' },
  { icon: <DirectionsRunIcon fontSize="inherit" />, title: 'Cardio Workouts', description: 'Improve endurance and heart health with our cardio programs.' },
  { icon: <SelfImprovementIcon fontSize="inherit" />, title: 'Yoga Classes', description: 'Enhance flexibility and balance with our yoga sessions.' }
];

const ServicePage = () => {
  return (
    <div className="relative bg-gray-100">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-[400px]" style={{ backgroundImage: "url('src/assets/gymer.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
          <Typography variant="h2" className="text-4xl font-bold mb-4">Our Services</Typography>
          <Typography variant="h5" className="text-xl">Discover the variety of fitness services we offer to help you reach your goals.</Typography>
        </div>
      </div>

      {/* Service Cards Section */}
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 ease-in-out">
              <CardContent className="flex flex-col items-center text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <Typography variant="h5" className="font-bold mb-2">{service.title}</Typography>
                <Typography variant="body2" color="textSecondary" className="mb-4">{service.description}</Typography>
                <Button variant="contained" color="primary">Learn More</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-200 py-12">
        <div className="container mx-auto text-center">
          <Typography variant="h4" className="font-bold mb-6">What Our Clients Say</Typography>
          {/* Add testimonials here */}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-primary py-12 text-white text-center">
        <Typography variant="h4" className="font-bold mb-4">Ready to Get Started?</Typography>
        <Button variant="contained" color="secondary" size="large">Contact Us</Button>
      </div>
    </div>
  );
};

export default ServicePage;
