import { useEffect } from "react";
import {
  Clear_count,
  Clear_right,
  active_question,
} from "../rtk/slice/Quetion-slice";
import BoxQuestionFooter from "./BoxQuestionFooter";
import BoxQuestionHeader from "./BoxQuestionHeader";
import Question from "./Question";
import { useDispatch, useSelector } from "react-redux";

function BoxQuestion() {
  const dispatch = useDispatch();
  let questions2 = useSelector((store) => store.quetions.Active_Type);
  const active = useSelector((store) => store.quetions.Active_Question);
  const count_question = useSelector(
    (store) => store.quetions.Count_Of_question
  );

  useEffect(() => {
    const random_num = Math.floor(Math.random() * questions2.length);
    dispatch(active_question(questions2[random_num]));
    dispatch(Clear_count());
    dispatch(Clear_right());
  }, []);
  return (
    <div className="boxquestion">
      <BoxQuestionHeader />
      {active && <Question question={active} active_type={questions2} />}
      {active && <BoxQuestionFooter />}
      {count_question === 10 && <div></div>}
    </div>
  );
}

export default BoxQuestion;
