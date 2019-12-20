import React from 'react'

const Filter = () => (
    <div>
        <select name="filter-type" id="filter">
            <option value="most-helpful">
                Most Helpful
            </option>
            <option value="most-recent">
                Most Recent
            </option>
            <option value="oldest">
                Oldest
            </option>
            <option value="highest-rating">
                Highest Rating
            </option>
            <option value="lowest-rating">
                Lowest Rating
            </option>
        </select>
    </div>
)

export default Filter;
