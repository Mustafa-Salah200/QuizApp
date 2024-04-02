import { useSelector } from "react-redux";

function BoxQuetionFooter() {
  const count_question = useSelector(
    (store) => store.quetions.Count_Of_question
  );

  return (
    <div className="boxquestionfooter">
      <p>
        <span>{count_question}</span> of <span>10</span> Questions
      </p>
    </div>
  );
}

export default BoxQuetionFooter;
