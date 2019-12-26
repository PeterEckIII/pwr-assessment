import React from 'react';
import { VerifiedBuyer, VerifiedReviewer, StaffReviewer } from '../../badge-icons';
import styles from './ReviewBadge.module.css';

const ReviewBadge = ({ badges }) => {
    let badge;
    if (badges.is_verified_buyer) {
        badge = (
            <div className={ styles.badgeContainer }>
                <div className={styles.badgeElement}>
                    <VerifiedBuyer />
                </div>
                <span className={styles.badgeText}>Verified Buyer</span>
            </div>
        )
    } else if (badges.is_verified_reviewer) {
        badge = (
            <div className={styles.badgeContainer}>
                <div className={styles.badgeElement}>
                    <VerifiedReviewer />
                </div>
                <span className={styles.badgeText}>Verified Review</span>
            </div>
        )
    } else if (badges.is_staff_reviewer) {
        badge = (
            <div className={styles.badgeContainer}>
                <div className={styles.badgeElement}>
                    <StaffReviewer />
                </div>
                <span className={styles.badgeText}> Staff Reviewer</span>
            </div>
        )
    }
    return (
        <div>
            { badge }
        </div>
    )
}

export default ReviewBadge;
