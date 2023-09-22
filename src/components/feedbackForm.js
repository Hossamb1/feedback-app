import React, { useContext, useEffect, useState } from "react";
import Card from "./shared/card";
import Button from "./shared/button";
import RatingSelect from "./rating";
import FeedbackContext from "./feedbackContext";
import { v4 as uuidv4 } from "uuid";

const FeedbackForm = () => {
  const [text, setText] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [rating, setRating] = useState(5);
  const [message, setMessage] = useState("");

  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);
  useEffect(() => {
    if (feedbackEdit.edit) {
      setIsDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  function handleChange(e) {
    if (text === "") {
      setIsDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
      setMessage(null);
    }
    setText(e.target.value);
  }

  function handleBtn() {
    if (text !== undefined && text.trim().length <= 10) {
      setMessage("Text must be more than 10 characters");
      setIsDisabled(true);
    }
  }

  function onMouseLeaving() {
    setMessage(null);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newFeedback = {
      text,
      rating,
    };
    if (feedbackEdit.edit) {
      updateFeedback(feedbackEdit.item.id, newFeedback);
    } else {
      addFeedback(newFeedback);
    }
    setIsDisabled(true);
    setText("");
  }
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>What Would You Like To Rate Us?</h2>
        <RatingSelect Rating={setRating} />
        <div className="input-group">
          <input
            onChange={handleChange}
            type="text"
            placeholder="Write a Review"
            value={text}
          />
          <Button
            type="submit"
            isDisabled={isDisabled}
            onClick={handleBtn}
            onMouseLeaving={onMouseLeaving}
          >
            send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
