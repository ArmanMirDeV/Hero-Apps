import React, { useState, useEffect } from 'react';
import useAppDetails from '../Hooks/useAppDetails';
import { Link } from 'react-router';
import AppCard from '../Components/AppCard';
import ErrorApp from './ErrorApp';
import Loading from '../Components/Loading';

const Apps = () => {
    const { appData, loading } = useAppDetails();

    const [search, setSearch] = useState('');
    const [searching, setSearching] = useState(false);

    const term = search.trim().toLowerCase();

    // Debounce search
    useEffect(() => {
        if (!search) {
            setSearching(false);
            return;
        }

        setSearching(true);
        const timer = setTimeout(() => {
            setSearching(false);
        }, 400); 

        return () => clearTimeout(timer);
    }, [search]);

    const searchedApp = term
        ? appData.filter(app => app.title.toLowerCase().includes(term))
        : appData;

  
    if (loading) return <Loading />;

   
    if (searching) return <Loading />;

    return (
        <div className='flex justify-center'>
            <div className="bg-gray-50 min-h-screen py-10 px-4 md:px-12">
              
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-5xl font-bold font-mono text-purple-700">
                        Our All Applications
                    </h2>
                    <p className='mt-2 text-xl'>Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>

                <div className='flex justify-between'>
                    <p className='font-bold text-2xl p-2 mb-3'>
                        ({searchedApp.length}) Apps Found
                    </p>

                    <label className="input ">
                        <input
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            type="search"
                            placeholder="Search App"
                        />
                    </label>
                </div>

                {
                    searchedApp.length > 0 ? (
                        <div className="grid grid-cols-1 items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
                            {
                                searchedApp.map(app => (
                                    <Link key={app.id} to={`/apps/${app.id}`}>
                                        <AppCard appData={app} />
                                    </Link>
                                ))
                            }
                        </div>
                    ) : (
                        <div className='flex justify-center mt-10'>
                            <ErrorApp />
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Apps;
