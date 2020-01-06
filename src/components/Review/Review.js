import React from 'react';
import styles from './Review.module.css';
import ReviewHeader from './ReviewHeader/ReviewHeader';
import ReviewInformation from './ReviewInformation/ReviewInformation';
import ReviewComment from './ReviewComment/ReviewComment';
import ReviewFooter from './ReviewFooter/ReviewFooter';

const Review = ({ review }) => (
    <div>
        <div className={styles.line}></div>
        <article className={styles.container} >
            <ReviewHeader
                rating={review.metrics.rating}
                headline={review.details.headline}
            />
            <ReviewInformation
                location={review.details.location}
                nickname={review.details.nickname}
                created={review.details.created_date}
                badges={review.badges}
            />
            <ReviewComment
                comment={review.details.comments}
            />
            <ReviewFooter
                helpful={review.metrics.helpful_votes}
                notHelpful={review.metrics.not_helpful_votes}
            />
        </article>
    </div>
)

export default Review;
