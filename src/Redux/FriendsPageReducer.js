let initialState = {
    shortcutData: []
}

const FriendsPageReducer = (state=initialState,action) => {

    let stateCopy;
    stateCopy = {...state}
    stateCopy.shortcutData = [...state.shortcutData]

    switch (action.type) {
        case "SET_FRIENDS": {
            return {stateCopy, shortcutData: [...action.shortcutData]}
        }
    }
    return state;
}

export const setFriendsActionCreator = (shortcutData) => {
    return {
        type: "SET_FRIENDS",
        shortcutData: shortcutData
    };
};

export default FriendsPageReducer