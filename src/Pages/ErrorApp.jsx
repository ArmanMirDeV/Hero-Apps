import React from 'react';
import errorImg from '../assets/App-Error.png'

const ErrorApp = () => {
    return (
         <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 text-center">
        
           
                    <img
                        src={errorImg}
                        alt="404 illustration"
                        className="w-full max-w-md mb-8"
                    />
        
          
                    <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
                        OPPS!! APP NOT FOUND
                    </h1>
        
          
                    <p className="text-gray-600 mb-6">
                        The App you are requesting is not found on our system.  please try another apps.
                    </p>
        
        
                    <button
                        className="bg-gradient-to-r from-indigo-500 via-purple-600 to-purple-500 text-white px-6 py-2 rounded-md text-sm transition cursor-pointer"
                    >
                        Go Back!
                    </button>
                </div>
    );
};

export default ErrorApp;