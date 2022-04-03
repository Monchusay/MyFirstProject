import React, { useEffect } from "react";
import style from "./AllUsers.module.css";
import axios from "axios";
import User from "./User/User";
import Preloader from "../../Common/Preloader";

const AllUsers = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 0; i < pagesCount; i++) {
    pages.push(i + 1);
  }

  useEffect(() => {
    props.toggleIsFetching(true);
    axios
      .get(
        `https://my-json-server.typicode.com/Monchusay/MyFirstProject/UsersData?_page=${props.currentPage}&_limit=${props.pageSize}`
      )
      .then((response) => {
        props.toggleIsFetching(false);
        props.setUsers(response.data);
      });
  }, []);

  let onPageChange = (pageNumber) => {
    props.toggleIsFetching(true);
    props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://my-json-server.typicode.com/Monchusay/MyFirstProject/UsersData?_page=${pageNumber}&_limit=${props.pageSize}`
      )
      .then((response) => {
        props.toggleIsFetching(false);
        props.setUsers(response.data);
      });
  };

  let userElements = props.UsersData.map((user) => (
    <User
      followUser={props.followUser}
      unfollowUser={props.unfollowUser}
      key={user.id}
      {...user}
    />
  ));

  return (
    <div>
      <div className={style.PageCount}>
          <div className={style.isFetching}>{props.isFetching ? <Preloader/> : null}</div>
        {pages.map((p) => {
          return (
            <button className={style.onPageChangeButton}
              onClick={(e) => {
                onPageChange(p);
              }}
              key={Math.random()}
            >
              {p}
            </button>
          );
        })}
      </div>
      <div className={style.userElements}>
          {userElements}
      </div>
    </div>
  );
};
export default AllUsers;
