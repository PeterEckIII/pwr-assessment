import React from 'react';
import styles from './ReviewFooter.module.css';
import { ThumbIcon } from '../../thumb-icon';

const ReviewFooter = ({ helpful, notHelpful }) => (
    <footer className={styles.footer}>
        <div className={styles.helpfulText}><strong>Was this review helpful to you?</strong></div>
        <div className={styles.helpfulVotes}>
            <div className={styles.upThumbIcon}>
                <ThumbIcon />
                <span className={helpful}>{helpful}</span>
            </div>
            <div className={styles.downThumbIcon}>
                <ThumbIcon />
                <span className={styles.notHelpful}>{notHelpful}</span>
            </div>
        </div>

    </footer>
);

export default ReviewFooter;
