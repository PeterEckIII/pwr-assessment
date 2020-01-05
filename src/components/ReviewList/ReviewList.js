import React from 'react';
import Review from '../Review/Review';
import styles from './ReviewList.module.css';

const ReviewList = ({ filteredReviews }) => (
    <div className={styles.reviewListContainer}>
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

export default ReviewList;
