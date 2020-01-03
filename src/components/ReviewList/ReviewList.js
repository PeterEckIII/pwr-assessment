import React, { useState, useEffect } from 'react';
import Review from '../Review/Review';
import styles from './ReviewList.module.css';
import Filter from '../Filter/Filter';

const ReviewList = ({ fetchedReviews}) => {
    const [filter, setFilter] = useState('mostRecent')
    const [filteredReviews, setFilteredReviews] = useState(fetchedReviews);

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    }

    useEffect(() => {        
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
    }, [ fetchedReviews, filter ])

    return (
        <div>
            <div className={styles.title}>
                <span style={{ float: 'left' }}>Review Display</span>
            </div>
            <div className={styles.filterContainer}>
                <Filter
                    filter={filter}
                    handleFilterChange={handleFilterChange}
                />
            </div>
            <ul className={styles.list}>
                {filteredReviews.map(review => {
                    return (
                        <Review
                            key={review.review_id}
                            data-id={review.review_id}
                            review={review}
                        />
                    )
                })}
            </ul>
        </div>
    );
}

export default ReviewList;
