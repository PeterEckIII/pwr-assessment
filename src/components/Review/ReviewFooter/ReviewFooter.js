import React from 'react';
import styles from './ReviewFooter.module.css';
import { ThumbIcon } from '../../thumb-icon';

const ReviewFooter = ({ helpful, notHelpful }) => (
    <footer className={styles.footer}>
        <div className={styles.helpfulText}><strong>Was this review helpful to you?</strong></div>
        <div className={styles.thumbIcon}>
        <span><ThumbIcon /> { helpful }</span>
        </div>
    </footer>
);

export default ReviewFooter;
