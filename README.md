# Review Display

The goal of this excercise is to build a simple version of a review display widget commonly found on retailer product detail pages.

The widget will primarily fetch and render a list of reviews. It will allow users to sort reviews, and vote for helpful or unhelpful reviews. The widget must be implemented using [React](https://reactjs.org/), but you are free to use any other dependencies.

The starter project was bootstrapped with [create-react-app](https://github.com/facebook/create-react-app), usage details can be found [here](CREATE_REACT_APP_README.md). The starter project includes a webservice that returns review data, as well as some helpful components.

## Notes

* While we've given you a week to complete this project, we estimate that you will not need more than 8 hours of work to achieve all of the requirements.
* Perfect is the enemy of good. Don't try too hard to impress us, you can always leave notes detailing improvements/extensions.
* We appreciate your time commitment and we promise to provide feedback on your submission.

## Required functionality

### Review Listing

Use the data returned by the service to render a list of reviews similar to the attached mockup. Each review container should have a `data-id` attribute set to the `review_id` property.

<details>
<summary>View Mockup</summary>
<img src="mockups/review-display.png" />
</details>

### Sorting

Support client side sorting by

* Most Recent (default)
* Most Helpful (based on `helpful_score`)
* Lowest Rated
* Highest Rated
* Oldest

### Reviewer Badges

Badges relay authenticity information about the review author. For example a review by verified buyer will likely be given stronger consideration than a review with no badging. Badges should be prioritized in the following order:

* Staff Reviewer
* Verified Buyer
* Verified Reviewer

Badges icons can be found in [src/icons/badges](src/icons/badges.js).

### Helpful voting

Users can indicate if a review was helpful or not. Voting should be captured and confirmed on the client side. A user may only cast one vote per review. There is no service endpoint to capture votes. Votes do not need to persist through page reloads.

<details>
<summary>View Mockup</summary>
<img src="mockups/voting.gif" style="padding:20px 10px 10px;background-color:white;box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.24);"/>
</video>
</details>
