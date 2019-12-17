import React from 'react';
import styles from './ReviewComment.module.css';

const ReviewComment = ({ comment }) => (
    <section className={ styles.section }>
        <div className={ styles.review_comment }>
            { comment }
        </div>
    </section>
);

export default ReviewComment;
