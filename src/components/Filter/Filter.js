import React from 'react';

const Filter = ({ filter, handleFilterChange }) => (
    <div>
        <select
            name="filter"
            id="filter"
            value={filter}
            onChange={handleFilterChange}
        >
            <option value="mostRecent">
                Most Recent
                    </option>
            <option value="oldest">
                Oldest
                    </option>
            <option value="mostHelpful">
                Most Helpful
                    </option>
            <option value="highestRating">
                Highest Rating
                    </option>
            <option value="lowestRating">
                Lowest Rating
                    </option>
        </select>
    </div>
);


export default Filter;
