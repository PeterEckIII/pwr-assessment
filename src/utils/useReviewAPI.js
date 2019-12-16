import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useReviewAPI = () => {
    const [ result, setResult ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(false);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                setError(false);
                setLoading(true);
                const payload = axios.get('/reviews');
                const reviews = payload.data.reviews
                setResult(reviews);    
            } catch (error) {
                setError(true)
            }
            setLoading(false);
            
        }
        fetchReviews();
    }, [])
    return [ { result, loading, error } ]
}

export default useReviewAPI;
