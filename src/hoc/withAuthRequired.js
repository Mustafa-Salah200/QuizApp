import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export function withAuthRequired(Component) {
  return function ProtectComponent() {
    const navigate = useNavigate();
    const user = useSelector((store) => store.user.user);
    useEffect(() => {
      if (!user) {
        navigate("/signin");
      }
    }, [user]);
    return user && <Component />;
  };
}
