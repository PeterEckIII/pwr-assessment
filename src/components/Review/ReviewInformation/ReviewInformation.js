import React from 'react';
import styles from './ReviewInformation.module.css';
import { relativeTime } from '../../../relative-time';

const ReviewInformation = ({ location, nickname, created_date }) => (
    <aside className={ styles.information }>
        <div>
            <span>Submitted: { relativeTime(created_date) }</span>
        </div>

        <div>
            <span>By:  </span>
            <span>
                { nickname }
            </span>
        </div>
        <div>
            <span>From:  </span>
            <span>
                { location }
            </span>
        </div>
    </aside>
)

export default ReviewInformation;
