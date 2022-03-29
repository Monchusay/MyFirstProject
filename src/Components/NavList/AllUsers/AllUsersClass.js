import React from "react";
import style from "./AllUsers.module.css"
import axios from "axios";
import UserClass from "./User/UserClass";

class AllUsersClass extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.get("https://my-json-server.typicode.com/Monchusay/MyFirstProject/UsersData").then(response => {
            this.props.setUsers(response.data)
        })
    }

    userElements = this.props.UsersData.map((user) => (
        <UserClass
            followUser={this.props.followUser}
            unfollowUser={this.props.unfollowUser}
            key={user.id}
            {...user}
        />
    ));

    render() {
        return (
            <div className={style.userElements}>
                {this.userElements}
            </div>
        )
    }
}
export default AllUsersClass