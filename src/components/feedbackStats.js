import React, { useContext } from "react";
import FeedbackContext from "./feedbackContext";

const FeedbackStats = () => {
  const { feedback } = useContext(FeedbackContext);
  const average = (
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length
  )
    .toFixed(1)
    .replace(/[.,]0$/, "");

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} feedbacks</h4>
      <h4>average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
};

export default FeedbackStats;
