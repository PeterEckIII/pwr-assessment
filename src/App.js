import React, { useState, useEffect } from "react";
import axios from 'axios';
import ReviewList from './components/ReviewList/ReviewList';
import Header from './components/Header/Header';

const App = () => {
    const [fetchedReviews, setFetchedReviews] = useState([]);
    const [filter, setFilter] = useState('mostRecent')
    const [filteredReviews, setFilteredReviews] = useState(fetchedReviews);

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    }

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
        const filterReviews = (filter, reviewsToFilter) => {
            let filteredResults;
            switch (filter) {
                case 'mostRecent':
                    filteredResults = reviewsToFilter
                        .map(review => review)
                        .sort((a, b) => b.details.created_date - a.details.created_date)
                    setFilteredReviews(filteredResults)
                    break;
                case 'oldest':
                    filteredResults = reviewsToFilter
                        .map(review => review)
                        .sort((a, b) => a.details.created_date - b.details.created_date)
                    setFilteredReviews(filteredResults)
                    break;
                case 'mostHelpful':
                    filteredResults = reviewsToFilter
                        .map(review => review)
                        .sort((a, b) => b.metrics.helpful_votes - a.metrics.helpful_votes)
                    setFilteredReviews(filteredResults)
                    break;
                case 'highestRating':
                    filteredResults = reviewsToFilter
                        .map(review => review)
                        .sort((a, b) => b.metrics.rating - a.metrics.rating)
                    setFilteredReviews(filteredResults)
                    break;
                case 'lowestRating':
                    filteredResults = reviewsToFilter
                        .map(review => review)
                        .sort((a, b) => a.metrics.rating - b.metrics.rating)
                    setFilteredReviews(filteredResults)
                    break;
                default:
                    setFilteredReviews(reviewsToFilter)
            }
        }
        filterReviews(filter, fetchedReviews)
    }, [filter, fetchedReviews])

    return (
        <div>
            <Header
                filter={filter}
                handleFilterChange={handleFilterChange}
            />
            <ReviewList filteredReviews={filteredReviews} />
        </div>
    )
}

export default App;
