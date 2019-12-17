import React from 'react';
import styles from './ReviewAside.module.css';
import { relativeTime } from '../../../relative-time';

const ReviewAside = ({ location, nickname, created_date }) => (
    <aside className={ styles.information }>
        <div>
            <span>Submitted: { relativeTime(created_date) }</span>
        </div>
        <div>
            <span>From:  </span>
            <span>
                { location }
            </span>
        </div>
        <br></br>
        <div>
            <span>By:  </span>
            <span>
                { nickname }
            </span>
        </div>
    </aside>
)

export default ReviewAside;
