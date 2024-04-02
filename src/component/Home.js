import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { active_type } from "../rtk/slice/Quetion-slice";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const questions2 = useSelector((store) => store.quetions.Type);

  const Getquestion = (e) => {
    dispatch(active_type(questions2[e.target.id]));
    navigate("/question");
  };
  return (
    <div className="home">
      <h1>Select One Type</h1>
      <div className="boxs">
        <div id="0" className="box" onClick={Getquestion}>
          Different Questions
        </div>
        <div id="1" className="box" onClick={Getquestion}>
          Countries Questions
        </div>
        <div id="2" className="box" onClick={Getquestion}>
          FootBall Questions
        </div>
        <div id="3" className="box" onClick={Getquestion}>
          Programming Questions
        </div>
        <div id="4" className="box" onClick={Getquestion}>
          Math Questions
        </div>
        <div id="5" className="box" onClick={Getquestion}>
          English Questions
        </div>
      </div>
    </div>
  );
}

export default Home;
