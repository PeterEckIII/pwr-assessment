const sortReducer = (state, action) => {
    switch (action.type) {
        case 'RECENT':
            console.log(`Recent ${state}`)
            return state.reviews
                    .map(review => review)
                    .sort((a, b) => b.details.created_date - a.details.created_date)
        case 'OLDEST':
            console.log(`Oldest ${state}`)
            return state.reviews
                    .map(review => review)
                    .sort((a, b) => a.details.created_date - b.details.created_date)
        case 'MOST_HELPFUL':
            console.log(`Helpful ${state}`)
            return state.reviews
                    .map(review => review)
                    .sort((a, b) => b.metrics.helpful_votes - a.metrics.helpful_votes)
        case 'HIGHEST_RATED':
            console.log(`Highest-Rated ${state}`)
            return state.reviews
                    .map(review => review)
                    .sort((a, b) => b.metrics.rating - a.metrics.rating)
        case 'LOWEST_RATED':
            console.log(`Lowest-Rated ${state}`)
            return state.reviews
                    .map(review => review)
                    .sort((a, b) => a.metrics.rating - b.metrics.rating)
        default:
            return state;
    }
}


export default sortReducer;
