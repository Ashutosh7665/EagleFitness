import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../sharedComp/Navbar';
import WorkOut from '../sharedComp/WorkOut';
import WhyUs from './WhyUs';
import HeroSection from '../sharedComp/HeroSection';
import Footer from './Footer';
import OwnerAndTrainer from '../sharedComp/OwnerAndTrainer';

const heroImage = 'https://c4.wallpaperflare.com/wallpaper/206/268/839/pose-muscle-muscle-rod-press-hd-wallpaper-preview.jpg';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Navbar />
            <div className="container mx-auto px-4 py-5 flex-grow select-none">
                {/* Hero Section */}
                <div className="relative mb-24 rounded-2xl overflow-hidden shadow-2xl">
                    <img src={heroImage} alt="Hero" className="w-full h-[79vh] delay-700 transition object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white px-4">
                        <h1 className="text-6xl md:text-7xl font-extrabold mb-8 text-center leading-tight">Welcome to Our Eagle Fitness</h1>
                        <p className="text-2xl md:text-3xl mb-12 text-center max-w-3xl font-light">Discover amazing products across all categories</p>
                        <Link
                            to="/products"
                            className="bg-white text-black px-10 py-4 rounded-full font-bold text-xl hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                        >
                            Buy Now
                        </Link>
                    </div>
                </div>
                <WhyUs />
                <WorkOut />
                <OwnerAndTrainer/>
                <HeroSection />
                <Footer/>
            </div>
        </div>
    );
};

export default Home;
