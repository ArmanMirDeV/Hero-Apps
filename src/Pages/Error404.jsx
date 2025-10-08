import React from 'react';
import errorImg from '../assets/error-404.png'

const Error404 = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 text-center">

   
            <img
                src={errorImg}
                alt="404 illustration"
                className="w-full max-w-md mb-8"
            />

  
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
                Oops, page not found!
            </h1>

  
            <p className="text-gray-600 mb-6">
                The page you are looking for is not available.
            </p>


            <button
                className="bg-gradient-to-r from-indigo-500 via-purple-600 to-purple-500 text-white px-6 py-2 rounded-md text-sm transition cursor-pointer"
            >
                Go Back!
            </button>
        </div>
    );
};

export default Error404;