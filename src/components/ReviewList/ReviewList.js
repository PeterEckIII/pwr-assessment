import React from 'react'
import Review from '../Review/Review';
import styles from './ReviewList.module.css';
import Filter from '../Filter/Filter';

const ReviewList = ({ reviews }) => (
    <div>
        <div className={styles.title}>
            <span style={{ float: 'left' }}>Review Display</span>
        </div>
        <div className={styles.filterContainer}>
            <Filter reviews={reviews} />
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
)

export default ReviewList;
