let initialState = {
  UsersData: [],
  pageSize: 3,
  totalUsersCount: 8,
  currentPage: 1,
  isFetching: true,
};

const AllUsersPageReducer = (state = initialState, action) => {
  let stateCopy;
  stateCopy = { ...state };
  stateCopy.UsersData = [...state.UsersData];

  switch (action.type) {
    case "FOLLOW":
      let userIndex = stateCopy.UsersData.findIndex(
        (user) => user.id === action.id
      );
      stateCopy.UsersData[userIndex].followed = false;
      return stateCopy;
    case "UNFOLLOW":
      let userIndex1 = stateCopy.UsersData.findIndex(
        (user) => user.id === action.id
      );
      stateCopy.UsersData[userIndex1].followed = true;
      return stateCopy;
    case "SET_USERS": {
      return { ...state, UsersData: [...action.UsersData] };
    }
    case "SET_CURRENT_PAGE": {
      return { ...state, currentPage: action.currentPage };
    }
    case "TOGGLE_IS_FETCHING": {
      return { ...state, isFetching: action.isFetching };
    }
  }
  return state;
};

export const toggleIsFetchingActionCreator = (isFetching) => {
  return {
    type: "TOGGLE_IS_FETCHING",
    isFetching: isFetching,
  };
};

export const setCurrentUserPageActionCreator = (currentPage) => {
  return {
    type: "SET_CURRENT_PAGE",
    currentPage: currentPage,
  };
};

export const makeFollowActionCreator = (id) => {
  return {
    type: "FOLLOW",
    id: id,
  };
};
export const makeUnfollowActionCreator = (id) => {
  return {
    type: "UNFOLLOW",
    id: id,
  };
};
export const setUsersActionCreator = (UsersData) => {
  return {
    type: "SET_USERS",
    UsersData: UsersData,
  };
};

export default AllUsersPageReducer;
