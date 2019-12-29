import React from 'react';
import styles from './ReviewFooter.module.css';
import { ThumbIcon } from '../../thumb-icon';

const ReviewFooter = ({ helpful, notHelpful }) => (
    <footer className={styles.footer}>
        <div className={styles.helpfulText}>Was this review helpful to you?</div>
        <div className={styles.votes}>
            <div className={styles.thumbIcon}>
                <div className={styles.thumbContainer}>
                    <div className={styles.iconContainer}>
                        <ThumbIcon />
                    </div>
                    <span className={styles.helpful}>{helpful}</span>
                </div>
            </div>
            <div className={styles.thumbIcon}>
                <ThumbIcon className={styles.thumbDown}/>
                <span className={styles.notHelpful}>{notHelpful}</span>
            </div>
        </div>

    </footer>
);

export default ReviewFooter;


/*
    <div>
        
    </div>
*/
