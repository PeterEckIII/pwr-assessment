import distanceInWordsToNow from "date-fns/distance_in_words_to_now";

export function relativeTime(timestamp) {
  return distanceInWordsToNow(timestamp, { addSuffix: true });
}
