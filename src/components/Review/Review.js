import React from 'react';
import styles from './Review.module.css';
import StarRating from '../star-rating';
import ReviewAside from './ReviewAside/ReviewAside';

const Review = ({ review }) => (
    <article className={ styles.container } >
        <header>
            <div className={ styles.star_rating }>
                <StarRating
                    rating={ review.metrics.rating }
                />
            </div>
            <div className={ styles.review_headline }>
                <strong>{ review.details.headline }</strong>
            </div>
        </header>
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
