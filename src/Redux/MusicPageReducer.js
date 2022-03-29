import React from "react";

let initialState = {
    songData: [],
    pageSize: 5,
    totalSongsCount: 21,
    currentPage: 1
}

const MusicPageReducer = (state=initialState,action) => {

    switch (action.type) {
        case "SET_MUSIC": {
            return {...state, songData: [...action.songData]}
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