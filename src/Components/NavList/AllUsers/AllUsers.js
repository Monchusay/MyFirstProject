import React, {useEffect} from "react";
import style from "./AllUsers.module.css"
import axios from "axios";
import User from "./User/User";

const AllUsers = (props) => {

    useEffect(() => {
        axios.get("https://my-json-server.typicode.com/Monchusay/MyFirstProject/UsersData")
            .then(response => {
            this.props.setUsers(response.data)
        })
    },[])

    let userElements = props.UsersData.map((user) => (
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