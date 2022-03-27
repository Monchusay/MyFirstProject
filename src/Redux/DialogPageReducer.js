let initialState = {
    dialogsData: []
}

const DialogPageReducer = (state =initialState,action) => {

    let stateCopy;
    stateCopy = {...state}
    stateCopy.dialogsData=[...state.dialogsData]

    switch (action.type) {
        case "SET_DIALOGS": {
            return {stateCopy, dialogsData: [...action.dialogsData]}
    }
    }
    return state;
}

export const setDialogsActionCreator = (dialogsData) => {
    return {
        type: "SET_DIALOGS",
        dialogsData: dialogsData
    };
};

export default DialogPageReducer