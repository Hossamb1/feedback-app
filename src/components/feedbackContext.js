import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedbackData] = useState([
    {
      id: 2,
      text: "This application is looking good, Keep it up!",
      rating: 10,
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  function handleClick(id) {
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      setFeedbackData(feedback.filter((item) => item.id !== id));
    }
  }

  function addFeedback(newFeedback) {
    setFeedbackData([newFeedback, ...feedback]);
  }

  function editFeedback(item) {
    console.log(feedbackEdit);
    setFeedbackEdit({
      item,
      edit: true,
    });
  }

  function updateFeedback(id, updItem) {
    setFeedbackData(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        updateFeedback,
        handleClick,
        addFeedback,
        editFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
