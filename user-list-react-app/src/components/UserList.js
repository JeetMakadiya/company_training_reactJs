import React from "react";
import "../styles/UserList.css";
import * as Icon from "react-feather";
import { owner, users } from "../userDetails";

const UserList = () => {
  return (
    <section>
      <div className="container">
        <div className="userListWrapper">
          <div className="userList">
            {/* heading divs */}
            <div className="userNameHeading">Name</div>
            <div className="userStatusHeading">Status</div>
            <div className="userAccessHeading">Access</div>
            <div></div>
            {/* Owner details row */}
            <div className="userDetailsWrapper">
              <img className="profileImg" src={owner.ownerAvatar} alt="owner_avatar" />
              <div className="userName">{owner.ownerName}</div>
              <div className="userEmail">{owner.ownerEmail}</div>
            </div>
            <div className="userStatus" style={{color: "#04AA6D",fontWeight: "700"}}>{owner.ownerStatus}</div>
            <div className="userAccess">{owner.ownerAccess}</div>
            <div className="actionIcon">
              <Icon.Lock size={18} style={{color: "rgba(0, 0, 0, 0.6)"}} />
            </div>
            {/* user details row */}
            {
              users.map((user) => {
                {/* let {avatar, name, email, status, access} = user; */}
                return(
                  <>
                    <div className="userDetailsWrapper">
                      <img className="profileImg" src={user.userAvatar} alt="user_avatar"/>
                      <div className="userName">{user.userName}</div>
                      <div className="userEmail">{user.userEmail}</div>
                    </div>
                    <div className="userStatus">
                      <select className="selectMenu" value={user.userStatus}>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                      </select>
                    </div>
                    <div className="userAccess">
                      <select className="selectMenu" value={user.userAccess}>
                        <option value="Manager">Manager</option>
                        <option value="Read">Read</option>
                      </select>
                    </div>
                    <div className="actionIcon">
                      <Icon.Trash2 size={18} style={{color: "rgba(0, 0, 0, 0.6)"}}/>
                    </div>
                  </>
                );
              }) 
            }
            {/* User Details Card */}
          </div>
          <div className="userDetailsCard">
            <img src="images/profile.png" alt="user_avatar" />
            <p className="cardUserName">Leon Hunt</p>
            <p className="cardUserEmail">utrich.owen@kristin.bi</p>
            <p className="cardUserPlan">Your Plan: Standard</p>
            <button>Active User</button>
            <label className="cardUserPlanUsage">Plan Uses<br/>
            <input type="range" />
            </label>
            <div className="clicksNumWrapper">
              <div className="clicksReviewed">
                <div className="clicksNum1">2,450</div>
                <div className="clicksNumText1">clicks reviewed</div>
              </div>
              <div className="monthlyClicks">
                <div className="clicksNum2">5000</div>
                <div className="clicksNumText2">Monthly clicks</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserList;
