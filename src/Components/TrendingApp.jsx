import React from 'react';
import AppCard from './AppCard';
import useAppDetails from '../Hooks/useAppDetails.js'
import { Link, NavLink } from 'react-router';


const TrendingApp = () => {

    const { appData } = useAppDetails()
    const featuredAppsData = appData.slice(0, 8)

    return (
        <div className='flex justify-center'>
            <div className="bg-gray-50 min-h-screen py-10 px-4 md:px-12">
                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Trending Apps
                    </h2>
                    <p className="text-gray-500 mt-2">
                        Explore All Trending Apps on the Market developed by us
                    </p>
                </div>

                {/* Grid of Apps */}
                <div className="grid grid-cols-1 items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
                    {
                        featuredAppsData.map(appData => (
                            <Link key={appData.id} to={`/apps/${appData.id}`} ><AppCard appData={appData} /></Link>
                        ))

                    }
                </div>

                {/* Show All Button */}
                <div className="text-center mt-10">
                    <NavLink to='/apps' className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white   px-6 py-2 rounded  transition">
                        Show All
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default TrendingApp;