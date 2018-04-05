import * as React from "react";
import { StarRating } from "./star-rating";
import { Thumb, VerifiedBuyer, VerifiedReviewer, StaffReviewer } from "./icons";
import distanceInWordsToNow from "date-fns/distance_in_words_to_now";
import classnames from "classnames";

const HELPFUL_VOTE = "+";
const NOT_HELPFUL_VOTE = "-";

const sorts = new Map([
  [
    1,
    {
      label: "Most Recent",
      fn: (a, b) => b.details.created_date - a.details.created_date
    }
  ],
  [
    2,
    {
      label: "Most Helpful",
      fn: (a, b) => b.metrics.helpful_score - a.metrics.helpful_score
    }
  ],
  [
    3,
    {
      label: "Lowest Rated",
      fn: (a, b) => a.metrics.rating - b.metrics.rating
    }
  ],
  [
    4,
    {
      label: "Highest Rated",
      fn: (a, b) => b.metrics.rating - a.metrics.rating
    }
  ],
  [
    5,
    {
      label: "Oldest",
      fn: (a, b) => a.details.created_date - b.details.created_date
    }
  ]
]);

class App extends React.Component {
  state = {
    data: null,
    sortOrder: 1,
    helpfulVotes: {} // reviewId => '+' | '-'
  };

  async componentDidMount() {
    try {
      const response = await fetch("/reviews");
      const data = await response.json();
      this.setState({
        data
      });
    } catch (err) {
      console.log(err);
    }
  }

  handleSortChange = e => {
    const sortOrder = +e.target.value;
    const { fn } = sorts.get(sortOrder);
    const { data } = this.state;

    this.setState(prevState => ({
      sortOrder,
      data: { ...data, reviews: prevState.data.reviews.sort(fn) }
    }));
  };

  handleVoteChange = (reviewId, vote) => {
    this.setState(prevState => ({
      helpfulVotes: { ...prevState.helpfulVotes, [reviewId]: vote }
    }));
  };

  render() {
    const { data, sortOrder, helpfulVotes } = this.state;

    if (!data) return null;

    return (
      <div>
        <div className="flex items-center ph3 ph4-ns">
          <h1 className="f2-ns f3 mv0 pv2 flex-auto">Review Display</h1>
          <span className="gray b nowrap f6">Sort by:&nbsp;&nbsp;</span>
          <select value={sortOrder} onChange={this.handleSortChange}>
            <option disabled>Sort Reviews by:</option>
            {[...sorts.entries()].map(([k, v]) => (
              <option key={k} value={k}>
                {v.label}
              </option>
            ))}
          </select>
        </div>
        {data.reviews.map(review => {
          const rating = review.metrics.rating;
          const { nickname, location, created_date } = review.details;
          const detailsItemClassname = "mr2 mr0-ns db nowrap";

          return (
            <section
              className="pv4 ph3 ph4-ns pr2 b1 bb bt b--moon-gray lh-copy"
              key={review.review_id}
              data-id={review.review_id}
              style={{ marginBottom: -1 }}
            >
              <header>
                <div className="flex items-stretch mb1">
                  <StarRating rating={rating} style={{ height: 26 }} />
                  <span className="ba br1 f6 gray b--moon-gray pv0 ph2 dib">
                    {rating}
                  </span>
                </div>
                <h2 className="f3-ns f4 mt0 mb1 lh-title">
                  {review.details.headline}
                </h2>
              </header>
              <div className="flex-ns flex-row-reverse">
                <ul className="w-20-ns w-30-m flex-none list ma0-ns mv2 mv0-ns pl0 gray f6 lh-copy">
                  <li className={detailsItemClassname}>
                    <span className="b pr1">Submitted</span>
                    {distanceInWordsToNow(created_date)} ago
                  </li>
                  <li className={detailsItemClassname}>
                    <span className="b pr1">By</span>
                    {nickname}
                  </li>
                  <li className={detailsItemClassname}>
                    <span className="b pr1">From</span>
                    {location}
                  </li>
                  <li className={detailsItemClassname}>
                    <Badge {...review.badges} />
                  </li>
                </ul>
                <div className="gray lh-copy flex-auto-ns pr4-ns">
                  <p className="mt0">{review.details.comments}</p>
                  <Helpful
                    {...review.metrics}
                    vote={helpfulVotes[review.review_id]}
                    onVote={vote =>
                      this.handleVoteChange(review.review_id, vote)
                    }
                  />
                </div>
              </div>
            </section>
          );
        })}
      </div>
    );
  }
}

function Helpful({ helpful_votes, not_helpful_votes, vote, onVote }) {
  const userHasVoted = vote != null;
  const helpfulVotes =
    vote === HELPFUL_VOTE ? helpful_votes + 1 : helpful_votes;
  const notHelpfulVotes =
    vote === NOT_HELPFUL_VOTE ? not_helpful_votes + 1 : not_helpful_votes;

  return (
    <div>
      <span className="dib b dark-gray mb1">
        Was this review helpful to you?
      </span>
      <div>
        <button
          className={classnames(
            "input-reset inline-flex justify-center items-center pv2 ph3 bg-animate nr1",
            {
              "bg-blue white": vote === HELPFUL_VOTE,
              "hover-blue": !userHasVoted
            }
          )}
          disabled={userHasVoted}
          onClick={() => onVote("+")}
        >
          <Thumb className="h1" />
          {helpfulVotes}
        </button>
        <button
          className={classnames(
            "input-reset inline-flex justify-center items-center bg-animate pv2 ph3",
            {
              "bg-blue white": vote === NOT_HELPFUL_VOTE,
              "hover-blue": !userHasVoted
            }
          )}
          disabled={userHasVoted}
          onClick={() => onVote("-")}
        >
          <Thumb className="h1" style={{ transform: "rotate(180deg)" }} />
          {notHelpfulVotes}
        </button>
      </div>
    </div>
  );
}

function Badge({ is_staff_reviewer, is_verified_buyer, is_verified_reviewer }) {
  if (is_staff_reviewer) {
    return (
      <div className="inline-flex items-center nowrap-ns">
        <StaffReviewer style={{ height: 20, width: 20 }} className="pr1" />{" "}
        <span className="nowrap">Staff Reviewer</span>
      </div>
    );
  }

  if (is_verified_buyer) {
    return (
      <div className="inline-flex items-center">
        <VerifiedBuyer style={{ height: 20, width: 20 }} className="pr1" />{" "}
        <span className="nowrap">Verified Buyer</span>
      </div>
    );
  }

  if (is_verified_reviewer) {
    return (
      <div className="inline-flex items-center nowrap-ns">
        <VerifiedReviewer style={{ height: 20, width: 20 }} className="pr1" />{" "}
        <span className="nowrap">Verified Reviewer</span>
      </div>
    );
  }

  return null;
}

export default App;
