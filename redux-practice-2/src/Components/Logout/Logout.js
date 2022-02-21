import React from "react";
import "./Logout.css";
import { logout } from "../../features/actions/action";
import { useDispatch, useSelector } from "react-redux";

export const Logout = () => {
  const dispatch = useDispatch();
  let userData = useSelector((state) => state.reducer.userProfile);
  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <div className="nav">
      <div className="userDetails">
        Welcome,
        <span>{userData.email}</span>
      </div>
      <div>
        <button className="logoutBtn" onClick={logoutHandler}>
          Logout
        </button>
      </div>
    </div>
  );
};
