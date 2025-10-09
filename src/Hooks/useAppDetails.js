import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useAppDetails = () => {
    
    const [appData, setAppData] = useState([]);
    const [loading , setLoading] = useState(true);
    const [error, setError] =  useState(null);


    useEffect(() => {
        setLoading(true)
        axios('../appsData.json')
        .then(data => setAppData(data.data))
        .catch(err => setError(err))
        .finally(() => setLoading(false))

    
        
    },[])
    
    return {appData, loading, error}
   

};

export default useAppDetails;