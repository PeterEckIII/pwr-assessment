import React, { useState, useEffect } from "react";
import axios from 'axios';
import ReviewList from './components/ReviewList/ReviewList';

const App = () => {
    const [fetchedReviews, setFetchedReviews] = useState([]);
    const fetchReviews = async () => {
        try {
            const result = await axios.get('/reviews');
            setFetchedReviews(result.data.reviews);
        } catch (error) {
            console.log(`Error: ${error}`)
        }
    }
    useEffect(() => {
        fetchReviews();
    })

    return (
        <div>
            <ReviewList fetchedReviews={fetchedReviews} />
        </div>
    )
}

export default App;
