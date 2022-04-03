let initialState = {
UsersData : [
]
}

const AllUsersPageReducer = (state =initialState,action) => {

    let stateCopy;
    stateCopy = {...state}
    stateCopy.UsersData = [...state.UsersData]

    switch (action.type) {
        case "FOLLOW":
            let userIndex = stateCopy.UsersData.findIndex((user) => user.id === action.id);
            stateCopy.UsersData[userIndex].followed = false;
            return stateCopy;
        case "UNFOLLOW":
            let userIndex1 = stateCopy.UsersData.findIndex((user) => user.id === action.id);
            stateCopy.UsersData[userIndex1].followed = true;
            return stateCopy;
        case "SET_USERS": {
            return {...state, UsersData: [...action.UsersData]}
        }
    }
    return state;
}

export const makeFollowActionCreator = (id) => {
    return {
        type: "FOLLOW",
        id: id
    };
};
export const makeUnfollowActionCreator = (id) => {
    return {
        type: "UNFOLLOW",
        id: id
    };
};
export const setUsersActionCreator = (UsersData) => {
    return {
        type: "SET_USERS",
        UsersData: UsersData
    };
};

export default AllUsersPageReducer