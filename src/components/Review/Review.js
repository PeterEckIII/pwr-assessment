import React from 'react';
import styles from './Review.module.css';
import ReviewHeader from './ReviewHeader/ReviewHeader';
import ReviewInformation from './ReviewInformation/ReviewInformation';
import ReviewComment from './ReviewComment/ReviewComment';
import ReviewFooter from './ReviewFooter/ReviewFooter';

const Review = ({ review }) => (
    <article className={ styles.container } >
        <ReviewHeader
            rating={ review.metrics.rating }
            headline={ review.details.headline }
        />
        <ReviewComment
            comment={ review.details.comments }
        />
        <ReviewInformation
            location={ review.details.location }
            nickname={ review.details.nickname }
            created={ review.details.created_date }
            badges={review.badges}
        />
        <ReviewFooter />
    </article>
)

export default Review;
