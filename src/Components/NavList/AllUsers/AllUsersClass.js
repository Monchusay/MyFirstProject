import React, {useEffect} from "react";
import style from "./AllUsers.module.css"
import axios from "axios";
import UserClass from "./User/UserClass";

const AllUsersClass = (props) => {

    useEffect(() => {
        axios.get("https://my-json-server.typicode.com/Monchusay/MyFirstProject/UsersData")
            .then(response => {
            this.props.setUsers(response.data)
        })
    },[])

    let userElements = props.UsersData.map((user) => (
        <UserClass
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
export default AllUsersClass