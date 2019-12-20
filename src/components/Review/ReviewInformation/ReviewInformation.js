import React from 'react';
import styles from './ReviewInformation.module.css';
import { relativeTime } from '../../../relative-time';
import * as Badges from '../../badge-icons';

const ReviewInformation = ({ location, nickname, created_date, badges }) => (
    <aside className={ styles.information }>
        <div>
            <span><strong>Submitted: </strong>{ relativeTime(created_date) }</span>
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
    </aside>
)

export default ReviewInformation;
