import React from 'react';
import downloadIcon from '../assets/icon-downloads.png'
import ratingIcon from '../assets/icon-ratings.png'
import reviewIcon from '../assets/icon-review.png'

const AppDetails = () => {
    return (
        <div className="card card-side bg-base-100 shadow-sm">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">SmPlan:ToDo List with Reminder</h2>
                <p>Developed by <span className='text-purple-600'>productive.io</span></p>
                <div className='flex gap-8'>
                    <div>
                        <img src={downloadIcon} alt="download icon" /> <p className='text-xs text-gray-500'>Downloads</p> <p className='font-extrabold text-2xl' > 8M </p>
                    </div>
                    <div>
                        <img src={ratingIcon} alt="download icon" /> <p className='text-xs text-gray-500'>Average Ratings</p> <p className='font-extrabold text-2xl' > 4.9 </p>
                    </div>
                    <div>
                        <img src={reviewIcon} alt="download icon" /> <p className='text-xs text-gray-500'>Total Reviews</p> <p className='font-extrabold text-2xl' > 54K </p>
                    </div>
                </div>
                <div className="card-actions">
                    <button className="btn bg-[#00d390]">Install Now <span>(201 MB)</span></button>
                </div>
            </div>
        </div>
    );
};

export default AppDetails;