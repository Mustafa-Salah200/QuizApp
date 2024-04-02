import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setuser } from "../rtk/slice/User-slice";
import { AuthAPI } from "../api/auth-api";
import { toast } from "../service.js/sweetalert";

function Signup() {
  const [email, setEmail] = useState();
  const [password1, setPassword1] = useState();
  const [password2, setPassword2] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Submit = async (e) => {
    e.preventDefault();
    if (password1 === password2) {
      try {
        const user = await AuthAPI.signup(email, password1);
        dispatch(setuser(user));
        navigate("/signin");
        toast("success", "Created Succeed");
      } catch (error) {
        toast("error", "Invalid Input !");
      }
    }
  };
  return (
    <div className="signup">
      <h1>Signup</h1>
      <h1>to create new Account</h1>
      <form>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="gmail"
          placeholder="Email"
        />
        <input
          onChange={(e) => setPassword1(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <input
          onChange={(e) => setPassword2(e.target.value)}
          type="password"
          placeholder="Password (repeat)"
        />
        <button onClick={Submit} type="sumit">
          Sign un
        </button>
      </form>
      <p>
        Already have an account? <Link to="/signin">Signup</Link>
      </p>
    </div>
  );
}

export default Signup;
