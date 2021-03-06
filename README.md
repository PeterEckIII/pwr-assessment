# Review Display

The goal of this exercise is to build a simple version of a review display widget commonly found on retailer product detail pages.

The widget will primarily fetch and render a list of reviews. It will allow users to sort reviews and vote for helpful or unhelpful reviews. The widget must be implemented using [React](https://reactjs.org/), but you are free to use almost\* any dependencies.

The starter project was bootstrapped with [create-react-app](https://github.com/facebook/create-react-app), usage details can be found [here](CREATE_REACT_APP_README.md). The starter project includes a web service that returns review data, as well as some useful components.

## Demo

See [demo.mp4](demo.mp4) or https://media.powerreviews.com/video/upload/v1561066786/take-home-challenge_uy31zs.mp4

## Requirements

- Node JS >= 4 https://nodejs.org/en/
- Yarn >= 1 https://yarnpkg.com/en/

## Usage

Run `yarn` inside the project to install all dependencies.

```
yarn
```

Add additional dependencies by running:

```
yarn add ${pkg-name}
```

### Available Commands

| Command   | Description                                                                                                |
| --------- | ---------------------------------------------------------------------------------------------------------- |
| `start`   | Concurrently starts dev server and review service. **Your solution will be evaluated using this command.** |
| `app`     | Starts webpack dev server on port 3000                                                                     |
| `service` | Starts review service on port 5000                                                                         |

## Submitting your solution

- Change the `name` field in the `package.json` to `${first-name}-${lastname}`. For example, if your name is Jane Doe your package.json will look like the following:

```js
{
  name: "jane-doe",
  version: "1.0.0"
}
```

- Run `yarn pack` inside the package to generate a zipped tarball. This tarball is the file you will be submitting. In the case of the example above, the file generated will be `jane-doe-v1.0.0.tgz`.

To evaluate your solution, we will unzip the tarball and then run `yarn && yarn start` inside the folder.

## Notes

- While we've given you a week to complete this project, we estimate that you will not need more than 8 hours of work to achieve all of the requirements.
- Examine the provided assets; they are essential for the successful completion of this project.
- Perfect is the enemy of good. Don't try too hard to impress us; you can always leave notes detailing improvements/extensions.
- We appreciate your time commitment, and we promise to provide feedback on your submission.

### Restricted Dependencies

The following class of dependencies is **restricted** because, they are unnecessary given the size of the project, or circumvent proficiencies we hope to assess.

| Type                         | Examples                                    |
| ---------------------------- | ------------------------------------------- |
| State Management             | Redux, Unstated, Mobx, etc.                 |
| CSS-in-JS                    | Styled-components, emotion, styletron, etc. |
| UI Toolkits                  | react-bootstrap, react-material-ui, etc.    |
| JavaScript Utility libraries | Lodash, Underscore, etc.                    |

## Required functionality

### Fetch review data

This project includes a web service `/reviews` that returns a list of reviews.

### Review Listing

Use the data returned by the service to render a list of reviews similar to the attached mockup. Each review container should have a `data-id` attribute set to the `review_id` property.

Use the star rating icon in [src/components/star-rating.js](src/components/star-rating.js).

### Sorting

Support client-side sorting by

- Most Recent (default)
- Most Helpful (based on `helpful_score`)
- Lowest Rated
- Highest Rated
- Oldest

### Reviewer Badges

Badges relay authenticity information about the review author; for example, a review by a verified buyer will likely be given stronger consideration than a review with no badging.

A review should include most one badge, if multiple badges are available use the following order to determine what to render.

- Staff Reviewer
- Verified Buyer
- Verified Reviewer

Badges icons can be found in [src/components/badge-icons.js](src/components/badge-icons.js).

### Helpful voting

Users can indicate if a review was helpful or not. Voting should be captured and confirmed on the client side. A user may only cast one vote per review. There is no service endpoint to capture votes.
