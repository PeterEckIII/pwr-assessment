import React, { useState, useEffect } from "react";
import axios from 'axios';
import ReviewList from './components/ReviewList/ReviewList';

const App = () => {
    const [ reviews, setReviews ] = useState([]);

    const fetchReviews = async () => {
        try {
            const result = await axios.get('/reviews');
            setReviews(result.data.reviews);            
        } catch (error) {
            console.log(`Error: ${error}`)
        }
    }

    useEffect(() => {    
        fetchReviews()
    }, [])

    return (
        <div>
            <ReviewList reviews={reviews} />
        </div>
    )
}

export default App;
