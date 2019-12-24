import React from 'react';
import { VerifiedBuyer, VerifiedReviewer, StaffReviewer } from '../../badge-icons';
import styles from './ReviewBadge.module.css';

const ReviewBadge = ({ badges }) => {
    let badge;
    if (badges.is_verified_buer) {
        badge = (
            <div className={ styles.badgeContainer }>
                <span>
                    <VerifiedBuyer />
                    Verified Buyer
                </span>
            </div>
        )
    } else if (badges.is_verified_reviewer) {
        badge = (
            <div className={ styles.badgeContainer }>
                <span>
                    <VerifiedReviewer />
                    Verified Reviewer
                </span>
            </div>
        )
    } else if (badges.is_staff_reviewer) {
        badge = (
            <div className={ styles.badgeContainer }>
                <StaffReviewer />
                <span>Staff Reviewer</span>
            </div>
        )
    }
    return (
        <div className={ styles.badgeElement }>
            { badge }
        </div>
    )
}

export default ReviewBadge;
