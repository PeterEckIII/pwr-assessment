import React from 'react';
import styles from './Review.module.css';
import StarRating from '../star-rating';
import { relativeTime } from '../../relative-time';
import classes from './Review.module.css';

const Review = ({ review }) => (
    <div className={styles.container} >
        <div className={styles.star_rating}>
            <StarRating
                rating={review.metrics.rating}
            />
        </div>
        <div className={styles.review_headline}>
            <strong>{review.details.headline}</strong>
        </div>
        <div>
            <div className={styles.review_comment}>
                {review.details.comments}
            </div>
        </div>
        <div className={classes.information}>
            <div>
                <span>Submitted: {relativeTime(review.details.created_date)}</span>
            </div>
            <div>
                <span>From:  </span>
                <span className='review-location'>
                    {review.details.location}
                </span>
            </div>
            <br></br>
            <div>
                <span>By:  </span>
                <span className="review-nickname">
                    {review.details.nickname}
                </span>
            </div>
        </div>
        
        <hr></hr>
    </div>
)

export default Review;
