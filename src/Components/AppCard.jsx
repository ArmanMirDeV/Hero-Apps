import React from 'react';
import downloadIcon from '../assets/icon-downloads.png'
import ratingIcon from '../assets/icon-ratings.png'
const AppCard = ({appData}) => {

    
    const {image, title, ratingAvg, downloads} = appData;



    return (
        <div className="card  bg-base-100  md:w-[317px] md:h-[404px]  shadow-2xl hover:scale-105 transition ease-in-out ">
            <figure className='mt-2 h-72 overflow-hidden rounded-3xl' >
                <img className='p-4 w-full object-cover '
                    src={image}
                    alt="Album" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-semibold text-blue-700 font-mono flex justify-center">{title}</h2>
                <div className='flex justify-between items-center'>

                    <div className='flex text-xl gap-2 text-green-600 items-center font-semibold bg-[#f1f5e8] px-4 py-2 rounded-xl' >
                        <img className='h-4 w-4' src={downloadIcon} alt="download icon" /> {downloads }
                    </div>

                    <div className='flex text-xl gap-2 text-[#ff8811] items-center bg-[#f1f5e8] px-4 py-2 rounded-xl'>

                        <img className='h-4 w-4' src={ratingIcon} alt="rating icon" />  {ratingAvg}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppCard;