import React from 'react';
import styles from './ReviewInformation.module.css';
import { relativeTime } from '../../../relative-time';
import ReviewBadge from '../ReviewBadge/ReviewBadge';

const ReviewInformation = ({ location, nickname, created, badges }) => {
    return (
        <aside className={ styles.information }>
            <div>
                <span><strong>Submitted: </strong>{ relativeTime(created) }</span>
            </div>

            <div>
                <span><strong>By:  </strong></span>
                <span>
                    { nickname }
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
