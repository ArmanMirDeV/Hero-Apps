import React from 'react';
import downloadIcon from '../assets/icon-downloads.png'
import ratingIcon from '../assets/icon-ratings.png'
const AppCard = () => {
    return (
        <div className="card  bg-base-100 shadow-sm w-[317px] h-[404px] border">
            <figure >
                <img className='p-4 rounded-4xl'
                    src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                    alt="Album" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">New album is released!</h2>
                <div className='flex justify-between items-center'>

                    <div className='flex text-xl gap-2 text-green-600 items-center font-semibold bg-[#f1f5e8] px-4 py-2 rounded-xl' >
                        <img className='h-4 w-4' src={downloadIcon} alt="download icon" /> 9M
                    </div>

                    <div className='flex text-xl gap-2 text-[#ff8811] items-center bg-[#f1f5e8] px-4 py-2 rounded-xl'>

                        <img className='h-4 w-4' src={ratingIcon} alt="rating icon" /> 5
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppCard;