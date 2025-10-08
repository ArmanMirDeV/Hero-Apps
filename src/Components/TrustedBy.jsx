import React from 'react';

const TrustedBy = () => {
    return (
        <div className="bg-gradient-to-r from-[#9f62f2] to-[#632ee3] text-white py-20 px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
                <span className='md:text-6xl'>Trusted By Millions,</span><br className="block md:hidden" />
                <span className="hidden md:inline"> </span>
                Built For You
            </h2>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                <div>
                    <p className="mt-2 text-sm text-white/80">Total Downloads</p>
                    <p className="text-6xl font-bold mt-4">29.6M</p>
                    <p className="mt-1 text-sm text-white/60">21% More Than Last Month</p>
                </div>
                <div>
                    <p className="mt-2 text-sm text-white/80">Total Reviews</p>
                    <p className="text-6xl font-bold mt-4 ">906K</p>
                    <p className="mt-1 text-sm text-white/60">46% More Than Last Month</p>
                </div>
                <div>
                    <p className="mt-2 text-sm text-white/80">Active Apps</p>
                    <p className="text-6xl font-bold mt-4">132+</p>
                    <p className="mt-1 text-sm text-white/60">31 More Will Launch</p>
                </div>
            </div>
        </div>

    );
};

export default TrustedBy;