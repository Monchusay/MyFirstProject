let initialState = {
    shortcutData: [
        {
            image: "https://www.meme-arsenal.com/memes/b5b6a757d1bd204196272992a74ebec3.jpg",
            friendName: "Puris"
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/ru/thumb/4/4d/Wojak.png/200px-Wojak.png",
            friendName: "HeheXD"
        },
        {
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHhAfBIMazKzEVP8Sej8X6xPU6JCIZtQIwHA&usqp=CAU",
            friendName: "Bogdan"
        }
    ]
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