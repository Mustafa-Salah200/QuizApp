import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearuser } from "../rtk/slice/User-slice";
import { BsBoxArrowInRight } from "react-icons/bs";
import { AuthAPI } from "../api/auth-api";
import { Clear_count, Clear_right } from "../rtk/slice/Quetion-slice";

function Navbar() {
  const user = useSelector((store) => store.user.user);
  const dispatch = useDispatch();
  const SignOut = () => {
    dispatch(clearuser());
    AuthAPI.signout();
  };
  return (
    <nav>
      <div className="logo">
        <Link
          to="/"
          onClick={() => {
            dispatch(Clear_right());
            dispatch(Clear_count());
          }}
        >
          <h1>Quize App</h1>
        </Link>
      </div>
      <ul>
        <div className="profile">
          <div>
            <h3>{user.email}</h3>
          </div>
          <Link to="#" onClick={SignOut}>
            SignOut
            <BsBoxArrowInRight />
          </Link>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
