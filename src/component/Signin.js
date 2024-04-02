import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setuser } from "../rtk/slice/User-slice";
import { AuthAPI } from "../api/auth-api";
import { toast } from "../service.js/sweetalert";

function Signin() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Submit = async (e) => {
    e.preventDefault();
    try {
      const user = await AuthAPI.signin(email, password);
      dispatch(setuser(user));
      navigate("/");
      toast("success", "Auth Succeed");
    } catch (error) {
      toast("error", "Invalid Credentials");
    }
  };
  return (
    <div className="signin">
      <h1>Signin</h1>
      <h1>to acssess your Account</h1>
      <form>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="gmail"
          placeholder="Email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <button type="sumit" onClick={Submit}>
          Sign in
        </button>
      </form>
      <p>
        Don't have account yet? <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
}

export default Signin;
