import React, { useState } from 'react';
import styles from './ReviewFooter.module.css';
import { ThumbIcon } from '../../thumb-icon';

const ReviewFooter = ({ helpful, notHelpful }) => {
    const [ helpfulVotes, setHelpfulVotes ] = useState(helpful)
    const [ unhelpfulVotes, setUnhelpfulVotes ] = useState(notHelpful);
    return (
        <footer className={styles.footer}>
            <div className={styles.helpfulText}>Was this review helpful to you?</div>
            <div className={styles.votes}>
                
                <div className={styles.thumbContainer}>
                    <div className={styles.upThumbIcon}>
                        <ThumbIcon />
                    </div>
                    &nbsp;
                    <span className={styles.voteText}>{ helpful }</span>
                </div>

                <div className={styles.thumbContainer}>
                    <div className={styles.downThumbIcon}>
                        <ThumbIcon />
                    </div>
                    &nbsp;
                    <span className={styles.voteText}>{notHelpful}</span>
                </div>
            </div>
        </footer>
    );
};

export default ReviewFooter;
