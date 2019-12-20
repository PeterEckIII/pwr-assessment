import React from 'react';
import styles from './ReviewHeader.module.css'
import StarRating from '../../star-rating';

const ReviewHeader = ({ rating, headline }) => (
    <header className={styles.container}>
        <span className={ styles.star_rating }>
            <StarRating
                rating={ rating }
            />
        </span><span className={styles.rating_indicator}>{rating}</span>
        <div className={ styles.review_headline }>
            <strong>{ headline }</strong>
        </div>
    </header>
);

export default ReviewHeader;
