import React, { useState } from "react";
import "./UserListCardWrapper.css";
import { UserList } from "../UserList/UserList";
import UserProfileCard from "../UserProfileCard/UserProfileCard";
import { users } from "../userDetails";

export const UserListCardWrapper = () => {
  // this hook hold the user details object while hover over respective user
  const [user, setUser] = useState(null);
  return (
    <section>
      <div className="container">
        <div className="userListCardWrapper">
        {/* <UserList/> component which contain user list */}
          <UserList
            users={users}
            handleHover={(user) => {
              setUser(user);
            }}
          />
          {/* <UserProfileCard /> component which contain user details in card */}
          <UserProfileCard user={user} />
        </div>
      </div>
    </section>
  );
};
