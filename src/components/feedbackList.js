import React, { useContext } from "react";
import Feedbackitem from "./feedbackitem";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackContext from "./feedbackContext";
import Spinner from "./shared/spinner";

const FeedbackList = ({ handleClick }) => {
  const { feedback, isLoading } = useContext(FeedbackContext);

  if (!isLoading && (feedback.length === 0 || !feedback)) {
    return (
      <div className="feedback-list">
        <p>no feedback available.</p>
      </div>
    );
  }

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Feedbackitem
              key={item.id}
              item={item}
              handleDelete={handleClick}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FeedbackList;
