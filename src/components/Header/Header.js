import React from 'react';
import styles from './Header.module.css';
import Filter from '../Filter/Filter';

const Header = ({ filter, handleFilterChange }) => (
    <div className={styles.headerContainer}>
        <div className={styles.title}>
            <div className={styles.headerText}>
                <strong>Review Display</strong>
            </div>
        </div>
        <div className={styles.filterContainer}>
            <span className={styles.filterText}>
                Sort By: 
            </span>
            <div className={styles.filter}>
                <Filter
                    filter={filter}
                    handleFilterChange={handleFilterChange}
                />
            </div>
        </div>
    </div>
)

export default Header;
