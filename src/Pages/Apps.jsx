import React, { useState } from 'react';
import useAppDetails from '../Hooks/useAppDetails';
import { NavLink } from 'react-router';
import AppCard from '../Components/AppCard';
import ErrorApp from './ErrorApp'

const Apps = () => {

    const { appData } = useAppDetails()

    const [search, setSearch] = useState('');
    const term = search.trim().toLowerCase()

    const searchedApp = term ? appData.filter(app => app.title.toLowerCase().includes(term)) : appData ;

    return (
        <div className='flex justify-center'>
            <div className="bg-gray-50 min-h-screen py-10 px-4 md:px-12">
                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Our All Applications
                    </h2>

                </div>

                <div className='flex justify-between gap-72' >
                    <p className=' font-bold text-2xl p-2 mb-3'>({searchedApp.length}) Apps Found</p>

                    <label className="input">
                        <input
                        value={search}
                         onChange={e => setSearch(e.target.value)}
                            type={'search'}
                            placeholder="Search App" />
                    </label>
                </div>


                {/* Grid of Apps */}
                {
                    searchedApp.length> 0 ? (
                        <div className="grid grid-cols-1 items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
                    {
                        searchedApp.map(appData => (
                            <AppCard key={appData.id} appData={appData} />
                        ))
                    }
                </div>
                    ) :
                    <div className='flex justify-center mt-10'>
                            <ErrorApp/>
                    </div>
                }
            </div>
        </div>
    );
};

export default Apps;