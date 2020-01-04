import React, { useState } from 'react';
import styles from './ReviewFooter.module.css';
import { ThumbIcon } from '../../thumb-icon';

const ReviewFooter = ({ helpful, notHelpful }) => {
    const [ helpfulVotes, setHelpfulVotes ] = useState(helpful)
    const [ unhelpfulVotes, setUnhelpfulVotes ] = useState(notHelpful);
    const [ helpfulDisabled, setHelpfulDisabled ] = useState(false);
    const [ notHelpfulDisabled, setNotHelpfulDisabled ] = useState(false);

    const handleAddHelpfulVote = () => {
        setHelpfulVotes(v => v + 1)
        setHelpfulDisabled(true)
    }

    const handleAddUnhelpfulVote = () => {
        setUnhelpfulVotes(v => v + 1)
        setNotHelpfulDisabled(true)
    }

    return (
        <footer className={styles.footer}>
            <div className={styles.helpfulText}>Was this review helpful to you?</div>
            <div className={styles.votes}>
                
                <button 
                    className={styles.thumbButton}
                    onClick={handleAddHelpfulVote}
                    disabled={helpfulDisabled}
                >
                    <div className={styles.upThumbIcon}>
                        <ThumbIcon />
                    </div>
                    &nbsp;
                    <span className={styles.voteText}>
                        { helpfulVotes }
                    </span>
                </button>

                <button
                    className={styles.thumbButton}
                    onClick={handleAddUnhelpfulVote}
                    disabled={notHelpfulDisabled}
                >
                    <div className={styles.downThumbIcon}>
                        <ThumbIcon />
                    </div>
                    &nbsp;
                    <span className={styles.voteText}>
                        {unhelpfulVotes}
                    </span>
                </button>
            </div>
        </footer>
    );
};

export default ReviewFooter;
