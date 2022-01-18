import React, { useEffect, useState } from "react";
import "./UserListCardWrapper.css";
import { UserList } from "../UserList/UserList";
import UserProfileCard from "../UserProfileCard/UserProfileCard";
// import { users } from "../userDetails";

export const UserListCardWrapper = () => {
  // this hook hold the user details object while hover over respective user
  const [user, setUser] = useState(null);

  // Hooks for Pagination
  const [users,setUsers] = useState([]);
  const [totalUsers,setTotalUsers] = useState(null);
  const [perPage,setPerPage] = useState(null);
  const [currentPage,setCurrentPage] = useState(null);

  const makeHttpRequestWithPage = async (pageNumber) => {
    let response = await fetch(`https://reqres.in/api/users?page=${pageNumber}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });

    const userData = await response.json();

    setUsers(userData.data);
    setTotalUsers(userData.total);
    setPerPage(userData.per_page);
    setCurrentPage(userData.page);
  }

  useEffect(() => {
    makeHttpRequestWithPage(1);
  },[]);

  const pageNumbers = [];
  for(let i = 1; i <= Math.ceil(totalUsers/perPage); i++){
    pageNumbers.push(i);
  }

  const paginationItems = pageNumbers.map((number) => {
    let activeClass = (currentPage === number) ? 'active' : '';
    return(
      <span key={number} className={activeClass} onClick={() => {makeHttpRequestWithPage(number)}}>{number}</span>
    );
  });

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
            paginationItems={paginationItems}
          />
          {/* <UserProfileCard /> component which contain user details in card */}
          <UserProfileCard user={user} />
        </div>
      </div>
    </section>
  );
};
