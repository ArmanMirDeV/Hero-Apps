import React, { useEffect, useState } from 'react';
import ratingIcon from '../assets/icon-ratings.png'
import downloadIcon from '../assets/icon-downloads.png'
import useAppDetails from '../Hooks/useAppDetails';
import Loading from '../Components/Loading';
 import { ToastContainer, toast } from 'react-toastify';

const Installation = () => {

    
const {  loading } = useAppDetails();

    const [apps, setApps] = useState([]);

    const [sortOrder, setSortOrder] = useState('none')



    useEffect(() => {
        const savedApp = JSON.parse(localStorage.getItem('app'));

        if (savedApp) setApps(savedApp)
    }, [])
        ;


    const sortedItem = (() => {
        if (sortOrder === 'size-asc') {
            return [...apps].sort((a, b) => a.size - b.size)
        }
        else if (sortOrder === 'size-desc') {
            return [...apps].sort((a, b) => b.size - a.size)
        }
        else {
            return apps
        }
    })()



    const handleRemove = id =>{
        const existingApp = JSON.parse(localStorage.getItem('app'))
        let updatedApp = existingApp.filter( app => app.id !== id)

        setApps(updatedApp)

        localStorage.setItem('app', JSON.stringify(updatedApp))

        toast("Uninstalled")
    }

    if (loading) return <Loading />


    return (
        <div>
            <div className="min-h-screen bg-gray-50 p-8">
                <div className=" mx-auto bg-white p-6 rounded-lg shadow-md">
                    {/* Header */}
                    <h1 className="text-4xl text-purple-700 font-mono font-semibold text-center mb-1">Your Installed Apps</h1>
                    <p className="text-center text-gray-500 mb-6 text-lg">
                        Explore All Trending Apps on the Market developed by us
                    </p>

                    {/* Top bar */}
                    <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
                        <p className='text-xl' >{sortedItem.length} Apps Found</p>
                        <div className="flex items-center space-x-2">
                            <label className="text-gray-500"><select value={sortOrder}
                                onChange={e => setSortOrder(e.target.value)}
                                id="sort" className="border rounded px-2 py-1 text-sm">
                                <option value='none'>Sort By</option>
                                <option value='size-asc' >Low-&gt;High</option>
                                <option value='size-desc' >High-&gt;Low</option>

                            </select></label>

                        </div>
                    </div>

                    {/* App List */}
                    <div className="space-y-4">
                        {sortedItem.map((app, index) => (
                            <div
                                key={index}
                                className=" md:flex  items-center justify-between p-4 bg-gray-100 rounded-md shadow-sm"
                            >
                                {/* Left side - App Info */}
                                <div className="flex items-center space-x-4">
                                    {/* Placeholder image */}
                                    <div className="w-12 h-12 ">
                                        <img className='rounded-2xl' src={app.image} alt={app.title} />
                                    </div>
                                    {/* App Details */}
                                    <div>
                                        <p className="font-medium text-purple-800 font-mono text-xl">{app.title}</p>
                                        <div className="text-sm text-gray-500 flex space-x-9 mt-1">
                                            <span className='flex gap-2' >
                                                <img className='h-4 w-4' src={downloadIcon} alt="" /> {app.downloads}</span>

                                            <span className='flex gap-2'>
                                                <img className='h-4 w-4' src={ratingIcon} alt="" />
                                                {app.ratingAvg}
                                            </span>


                                            <span>{app.size} MB</span>

                                        </div>
                                    </div>
                                </div>

                                {/* Uninstall button */}
                                <button
                                onClick={() => handleRemove(app.id) }
                                 className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded">
                                    Uninstall
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Installation;