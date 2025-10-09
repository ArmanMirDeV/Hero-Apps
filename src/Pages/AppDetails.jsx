import React, { useEffect, useState } from 'react';
import downloadIcon from '../assets/icon-downloads.png'
import ratingIcon from '../assets/icon-ratings.png'
import reviewIcon from '../assets/icon-review.png'
import { useParams } from 'react-router';
import useAppDetails from '../Hooks/useAppDetails';
import ChartData from '../Components/ChartData';
import Loading from '../Components/Loading';

const AppDetails = () => {

    const { id } = useParams()
    const { appData, loading } = useAppDetails();
    const singleAppData = appData.find(p => (p.id) === Number(id))

    const [isInstalled, setIsInstalled] = useState(false);

    useEffect(() => {
        const existingApp = JSON.parse(localStorage.getItem('app')) || [];
        const installed = existingApp.some(app => app.id === Number(id));
        setIsInstalled(installed);
    }, [id]);


    if (loading) return <Loading />

    const { image, title, companyName, description, size, reviews, ratingAvg, downloads } = singleAppData || {}



    const handleInstallNow = () => {
        const existingApp = JSON.parse(localStorage.getItem('app')) || [];

        const isDuplicate = existingApp.some(app => app.id === singleAppData.id);


        if (isDuplicate) {
            alert("Already installed.");
            return;
        }

        const updatedApp = [...existingApp, singleAppData];
        localStorage.setItem('app', JSON.stringify(updatedApp));
        setIsInstalled(true);
    };

    return (
        <div className='card card-body' >
            <div className="card card-side bg-base-100 shadow-sm">
                <figure className='h-84 overflow-hidden' >
                    <img className='w-full object-cover'
                        src={image}
                        alt={title} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-bold text-3xl">{title}</h2>
                    <p className='text-xl font-mono' >Developed by <span className='text-purple-600'>{companyName}</span></p>
                    <div className='flex gap-8'>
                        <div>
                            <img src={downloadIcon} alt="download icon" /> <p className='text-xs text-gray-500'>Downloads</p> <p className='font-extrabold text-2xl' > {downloads} </p>
                        </div>
                        <div>
                            <img src={ratingIcon} alt="download icon" /> <p className='text-xs text-gray-500'>Average Ratings</p> <p className='font-extrabold text-2xl' > {ratingAvg} </p>
                        </div>
                        <div>
                            <img src={reviewIcon} alt="download icon" /> <p className='text-xs text-gray-500'>Total Reviews</p> <p className='font-extrabold text-2xl' > {reviews} </p>
                        </div>
                    </div>
                    <div className="card-actions ">
                        <button
                            onClick={handleInstallNow}
                            className={`btn text-white ${isInstalled
                                ? 'bg-green-500 cursor-not-allowed'
                                : 'bg-gradient-to-r from-[#632ee3] to-[#9f62f2]'
                                }`}
                            disabled={isInstalled}
                        >
                            {isInstalled ? 'Installed' : 'Install Now'} <span>({size} MB)</span>
                        </button>

                    </div>
                </div>




            </div>

            <div>
                <ChartData />
            </div>
            <div>
                <h2 className='text-3xl font-semibold text-purple-800' >Description</h2>
                <p>{description}</p>
            </div>

        </div>

    );
};

export default AppDetails;