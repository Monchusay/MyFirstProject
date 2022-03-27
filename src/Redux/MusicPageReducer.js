let initialState = {
    songData: [
        {
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3S9f-aAWOmCopR_OK9lBFW0PqvaXF-y4xQw&usqp=CAU",
            singer: " Darude",
            songName: " - Sandstorm",
        },
        {
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3S9f-aAWOmCopR_OK9lBFW0PqvaXF-y4xQw&usqp=CAU",
            singer: " K.D.A",
            songName: " - Giants",
        },
        {
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3S9f-aAWOmCopR_OK9lBFW0PqvaXF-y4xQw&usqp=CAU",
            singer: " Malchik",
            songName: " - PiyPiy",
        },
        {
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3S9f-aAWOmCopR_OK9lBFW0PqvaXF-y4xQw&usqp=CAU",
            singer: " Eminem",
            songName: " - RapGod",
        },
        {
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3S9f-aAWOmCopR_OK9lBFW0PqvaXF-y4xQw&usqp=CAU",
            singer: " Jaba",
            songName: " - Kvakaet",
        },
    ]
}

const MusicPageReducer = (state=initialState,action) => {

    let stateCopy;
    stateCopy = {...state}
    stateCopy.songData = [...state.songData]

    switch (action.type) {
        case "SET_MUSIC": {
            return {stateCopy, songData: [...action.songData]}
        }
    }
    return state;
}

export const setMusicActionCreator = (songData) => {
    return {
        type: "SET_MUSIC",
        songData: songData
    };
};

export default MusicPageReducer