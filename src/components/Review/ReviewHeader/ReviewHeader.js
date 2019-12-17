import React from 'react';
import styles from './ReviewHeader.module.css'
import StarRating from '../../star-rating';

const ReviewHeader = ({ rating, headline }) => (
    <header>
        <div className={ styles.star_rating }>
            <StarRating
                rating={ rating }
            />
        </div>
        <div className={ styles.review_headline }>
            <strong>{ headline }</strong>
        </div>
    </header>
);

export default ReviewHeader;
