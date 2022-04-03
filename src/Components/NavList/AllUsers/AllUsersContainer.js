import React from "react";
import {connect} from "react-redux";
import {
    makeFollowActionCreator,
    makeUnfollowActionCreator, setCurrentUserPageActionCreator,
    setUsersActionCreator
} from "../../../Redux/AllUsersPageReducer";
import AllUsers from "./AllUsers";
import {toggleIsFetchingActionCreator} from "../../../Redux/AllUsersPageReducer";

let mapStateToProps = (state) => {
    return {
        UsersData: state.allUsersPage.UsersData,
        pageSize: state.allUsersPage.pageSize,
        totalUsersCount: state.allUsersPage.totalUsersCount,
        currentPage: state.allUsersPage.currentPage,
        isFetching: state.allUsersPage.isFetching
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
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentUserPageActionCreator(pageNumber))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingActionCreator(isFetching))
        }
    }
}


const AllUsersContainer = connect(mapStateToProps, mapDispatchToProps) (AllUsers);

export default AllUsersContainer