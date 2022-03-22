import React from "react";
import User from "./User/User";
import style from "./AllUsers.module.css"

const AllUsers = (props) => {

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