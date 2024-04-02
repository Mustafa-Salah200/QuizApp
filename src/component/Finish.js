import { useSelector } from "react-redux";

function Finish() {
  const count_right = useSelector((store) => store.quetions.Count_Of_right);
  return (
    <div className="finish">
      <h1>Good Job!</h1>
      <p>
        your score is : <span>{count_right}</span>
      </p>
    </div>
  );
}
export default Finish;
