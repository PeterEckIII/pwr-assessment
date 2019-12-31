import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Review from '../Review/Review';
import styles from './ReviewList.module.css';
import Filter from '../Filter/Filter';

const ReviewList = () => {
    const [filter, setFilter] = useState('mostRecent')
    const [reviews, setReviews] = useState([]);
    const [filteredReviews, setFilteredReviews] = useState(reviews);

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    }

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
        
        const filterReviews = (filter, reviews) => {
            switch (filter) {
                case 'mostRecent':
                    setFilteredReviews(reviews
                        .map(review => review)
                        .sort((a, b) => b.details.created_date - a.details.created_date)
                    )
                    break;
                case 'oldest':
                    setFilteredReviews(reviews
                        .map(review => review)
                        .sort((a, b) => a.details.created_date - b.details.created_date)
                    )
                    break;
                case 'mostHelpful':
                    setFilteredReviews(reviews
                        .map(review => review)
                        .sort((a, b) => b.metrics.helpful_votes - a.metrics.helpful_votes)
                    )
                    break;
                case 'highestRated':
                    setFilteredReviews(reviews
                        .map(review => review)
                        .sort((a, b) => b.metrics.rating - a.metrics.rating)
                    )
                    break;
                case 'lowestRated':
                    setFilteredReviews(reviews
                        .map(review => review)
                        .sort((a, b) => a.metrics.rating - b.metrics.rating)
                    )
                    break;
                default:
                    setReviews(filteredReviews)
            }
        }
        filterReviews(filter, reviews);
    }, [filter, reviews, filteredReviews])

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
                {reviews.map(review => {
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
