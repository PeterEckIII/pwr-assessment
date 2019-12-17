import React from 'react';
import styles from './ReviewSection.module.css';

const ReviewSection = ({ comments }) => (
    <section class={ styles.review_comment }>
        <div className={ styles.review_comment }>
            { comments }
        </div>
    </section>
);

export default ReviewSection;
