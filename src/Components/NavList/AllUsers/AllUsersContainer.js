import React from "react";
import {connect} from "react-redux";
import AllUsers from "./AllUsers";
import {makeFollowActionCreator, makeUnfollowActionCreator} from "../../../Redux/AllUsersPageReducer";

let mapStateToProps = (state) => {
    return {
        followed: state.allUsersPage.UsersData.followed,
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
        }
    }
}


const AllUsersContainer = connect(mapStateToProps, mapDispatchToProps) (AllUsers);

export default AllUsersContainer