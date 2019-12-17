import React from 'react';
import styles from './Review.module.css';
import StarRating from '../star-rating';
import ReviewHeader from './ReviewHeader/ReviewHeader';
import ReviewAside from './ReviewAside/ReviewAside';

const Review = ({ review }) => (
    <article className={ styles.container } >
        <ReviewHeader
            rating={ review.metrics.rating }
            headline={ review.details.headline }
        />
        <section class={ styles.review_comment }>
            <div className={ styles.review_comment }>
                { review.details.comments }
            </div>
        </section>
        <ReviewAside
            location={ review.details.location }
            nickname={ review.details.nickname }
            created={ review.details.created_date }
        />
        <footer>
            <div>Was this helpful (thumb up / down)</div>
        </footer>
        <hr></hr>
    </article>
)

export default Review;
