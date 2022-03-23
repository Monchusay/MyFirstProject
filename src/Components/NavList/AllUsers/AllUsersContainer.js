import React from "react";
import {connect} from "react-redux";
import AllUsers from "./AllUsers";
import {
    makeFollowActionCreator,
    makeUnfollowActionCreator,
    setUsersActionCreator
} from "../../../Redux/AllUsersPageReducer";

let mapStateToProps = (state) => {
    return {
        UsersData: state.allUsersPage.UsersData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        followUser: (id) => {
            dispatch(makeFollowActionCreator(id))
        },
        unfollowUser: (id) => {
            dispatch(makeUnfollowActionCreator(id))
        },
        setUsers: (UsersData) => {
            dispatch(setUsersActionCreator(UsersData))
        }
    }
}


const AllUsersContainer = connect(mapStateToProps, mapDispatchToProps) (AllUsers);

export default AllUsersContainer