import { useDispatch, useSelector } from "react-redux";
import {
  active_question,
  count_of_question,
  count_of_right,
} from "../rtk/slice/Quetion-slice";

function Question(props) {
  const active_type = props.active_type;
  const dispatch = useDispatch();
  //const user_ans = useSelector((store) => store.quetions.User_Answer);
  const question = props.question;
  const count_question = useSelector(
    (store) => store.quetions.Count_Of_question
  );
  let random = [];
  const array_values = [
    question.right_answer,
    question.wrong_answer1,
    question.wrong_answer2,
    question.wrong_answer3,
  ];
  const RandomChick = () => {
    if (random.length < 4) {
      const random_num = Math.floor(Math.random() * 4);
      if (!random.includes(random_num)) {
        random.push(random_num);
      }
      RandomChick();
    }
  };
  RandomChick();
  const set_user_answer = (e) => {
    if (count_question <= 10) {
      if (e.target.id === array_values[0]) {
        e.target.className = "right_answer";
        dispatch(count_of_right());
      } else {
        e.target.className = "wrong_answer";
        document.querySelectorAll(".question p").forEach((ele) => {
          if (ele.id === array_values[0]) {
            ele.className = "right_answer";
          }
        });
      }
      setTimeout(() => {
        document.querySelectorAll(".question p").forEach((ele) => {
          ele.classList.remove("right_answer");
          ele.classList.remove("wrong_answer");
        });
        dispatch(count_of_question());
        const random_num = Math.floor(Math.random() * active_type.length);
        dispatch(active_question(active_type[random_num]));
        console.log();
      }, 1000);
    }
  };
  return (
    <div className="question">
      {question && (
        <>
          <h1 className="q-title">{question.question}</h1>
          {array_values.map((ele, index) => {
            return (
              <p
                onClick={set_user_answer}
                key={ele}
                id={array_values[random[index]]}
              >
                {array_values[random[index]]}
              </p>
            );
          })}
        </>
      )}
    </div>
  );
}

export default Question;
