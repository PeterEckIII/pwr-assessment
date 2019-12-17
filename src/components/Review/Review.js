import React from 'react';
import styles from './Review.module.css';
import ReviewHeader from './ReviewHeader/ReviewHeader';
import ReviewAside from './ReviewAside/ReviewAside';
import ReviewSection from './ReviewSection/ReviewSection';
import ReviewFooter from './ReviewFooter/ReviewFooter';

const Review = ({ review }) => (
    <article className={ styles.container } >
        <ReviewHeader
            rating={ review.metrics.rating }
            headline={ review.details.headline }
        />
        <ReviewSection
            comment={ review.details.comments }
        />
        <ReviewAside
            location={ review.details.location }
            nickname={ review.details.nickname }
            created={ review.details.created_date }
        />
        <ReviewFooter />
    </article>
)

export default Review;
