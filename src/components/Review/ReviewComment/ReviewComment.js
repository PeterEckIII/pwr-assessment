import React from 'react';
import styles from './ReviewComment.module.css';

const ReviewComment = ({ comment }) => (
    <section className={ styles.review_comment }>
        <div className={ styles.review_comment }>
            { comment }
        </div>
    </section>
);

export default ReviewComment;
