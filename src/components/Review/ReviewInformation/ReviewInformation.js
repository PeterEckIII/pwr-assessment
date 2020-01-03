import React from 'react';
import styles from './ReviewInformation.module.css';
import { relativeTime } from '../../../relative-time';
import ReviewBadge from '../ReviewBadge/ReviewBadge';

const ReviewInformation = ({ location, nickname, created, badges }) => {
    const formattedNickname = nickname.charAt(0).toUpperCase() + nickname.slice(1).toLowerCase();
    return (
        <aside className={ styles.information }>
            <div>
                <span><strong>Submitted: </strong>{ relativeTime(created) }</span>
            </div>

            <div>
                <span><strong>By:  </strong></span>
                <span>
                    { formattedNickname }
                </span>
            </div>
            <div>
                <span><strong>From:  </strong></span>
                <span>
                    { location }
                </span>
            </div>
            <ReviewBadge badges={ badges } />
        </aside>
    );
}

export default ReviewInformation;
