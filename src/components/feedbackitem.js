import { FaEdit, FaTimes } from "react-icons/fa";
import Card from "./shared/card";
import { useContext } from "react";
import FeedbackContext from "./feedbackContext";

const Feedbackitem = ({ item }) => {
  const { handleClick, editFeedback } = useContext(FeedbackContext);
  return (
    <>
      <Card reverse={true}>
        <div className="num-display">{item.rating}</div>
        <button className="edit" onClick={() => editFeedback(item)}>
          <FaEdit color="purple" />
        </button>
        <button onClick={() => handleClick(item.id)} className="close">
          <FaTimes color="purple" />
        </button>
        <div className="text-display">{item.text}</div>
      </Card>
    </>
  );
};

export default Feedbackitem;
