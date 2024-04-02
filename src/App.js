import { Route, Routes } from "react-router-dom";
import BoxQuestion from "./component/BoxQuestion";
import Navbar from "./component/Navbar";
import { withAuthRequired } from "./hoc/withAuthRequired";
import Home from "./component/Home";
import { useSelector } from "react-redux";
import Finish from "./component/Finish";

function App() {
  const count_question = useSelector(
    (store) => store.quetions.Count_Of_question
  );
  //console.log(count_question);
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/question" element={<BoxQuestion />} /> */}
          {count_question <= 10 && (
            <Route path="/question" element={<BoxQuestion />} />
          )}
          {count_question === 11 && (
            <Route path="/question" element={<Finish />} />
          )}
        </Routes>
      </div>
    </div>
  );
}

export const ProtectApp = withAuthRequired(App);
