import React from 'react';
import styles from './Header.module.css';
import Filter from '../Filter/Filter';

const Header = ({ filter, handleFilterChange }) => (
    <div className={styles.headerContainer}>
        <div className={styles.title}>
            <div>
                <strong>Review Display</strong>
            </div>
        </div>
        <div className={styles.filterContainer}>
            <Filter
                filter={filter}
                handleFilterChange={handleFilterChange}
            />
        </div>
    </div>
)

export default Header;
