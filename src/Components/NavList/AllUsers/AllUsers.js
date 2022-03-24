import React from "react";
import User from "./User/User";
import style from "./AllUsers.module.css"
import axios from "axios";

const AllUsers = (props) => {

    if (props.UsersData.length === 0) {
        axios.get("https://my-json-server.typicode.com/Monchusay/MyFirstProject/UserData").then(response => {
            props.setUsers(response.data)
        })
    }

    let userElements =  props.UsersData.map((user)  => (
        <User
            followUser={props.followUser}
            unfollowUser={props.unfollowUser}
            key={user.id}
            {...user}
        />
        ));

    return (
        <div className={style.userElements}>
            {userElements}
        </div>
    )
}

export default AllUsers