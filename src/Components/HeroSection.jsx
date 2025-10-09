import React from 'react';
import { FaApple, FaCheckCircle, FaClock, FaGooglePlay, FaTrello } from 'react-icons/fa';
import { FaPowerOff } from 'react-icons/fa6';
import phoneMockup from '../assets/hero.png'

const HeroSection = () => {
    return (
        <section className="bg-gray-50 text-center pt-20 px-6 relative overflow-hidden">
            {/* Headline */}
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 flex-row font-mono ">
                <span>We Build </span> <br />
                <span className="bg-gradient-to-r from-indigo-500 via-pink-400 to-purple-500 bg-clip-text text-transparent">
                    Productive
                </span>
                <span className='text-purple-900' > Apps</span>
            </h1>

            {/* Subtext */}
            <p className="max-w-2xl mx-auto text-gray-600 mb-8">
                At <span className="font-semibold text-gray-800">HERO.IO</span>, we craft innovative apps
                designed to make everyday life simpler, smarter, and more exciting.
                Our goal is to turn your ideas into digital experiences that truly make an impact.
            </p>

          
            <div className="flex justify-center gap-4 mb-16 ">
                <a target='_blank' href="https://play.google.com/store/games?hl=en">
                    <button className="flex items-center gap-2 bg-white border border-pink-800 px-5 py-2 rounded-lg shadow-sm hover:shadow-md transition hover:bg-pink-200 cursor-pointer">
                    <FaGooglePlay className="text-green-500 text-xl" />
                    <span className="font-medium">Google Play</span>
                </button>
                </a>

                <a target='_blank' href="https://www.apple.com/app-store/">
                    <button className="flex items-center gap-2 bg-white border border-pink-800 px-5 py-2 rounded-lg shadow-sm hover:shadow-md transition hover:bg-pink-200 cursor-pointer">
                    <FaApple className="text-black text-xl" />
                    <span className="font-medium">App Store</span>
                </button>
                </a>
            </div>

        
            <div className="relative flex justify-center">
                <img
                    src={phoneMockup}
                    alt="App Mockup"
                    className=" z-10"
                />
               
            </div>
        </section>
    );
};

export default HeroSection;