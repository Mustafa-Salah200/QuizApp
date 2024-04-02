import { useSelector } from "react-redux";

function BoxQuestionHeader() {
  const right = useSelector((store) => store.quetions.Count_Of_right);
  return (
    <div className="title">
      <h3>Awesome Quiz Application</h3>
      <div className="timer">
        Right Answer
        <span>{right}</span>
      </div>
    </div>
  );
}

export default BoxQuestionHeader;
