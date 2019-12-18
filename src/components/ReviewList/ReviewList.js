import React from 'react'
import Review from '../Review/Review';
import styles from './ReviewList.module.css';

const ReviewList = ({ reviews }) => {
    return (
        <div>
            <div className={styles.title}>
                <span>Review Display</span>
            </div>
            <ul className={styles.list}>
                { reviews.map(review => {
                    return (
                        <Review 
                            key={review.review_id} 
                            data-id={review.review_id}
                            review={ review }
                        />
                    )
                })}
            </ul>
        </div>
    )
}

export default ReviewList;
