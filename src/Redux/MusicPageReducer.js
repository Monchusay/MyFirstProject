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
        case "SET_CURRENT_PAGE": {
            return {...state, currentPage: action.currentPage }
        }
    }
    return state;
}

export const setCurrentPageActionCreator = (currentPage) => {
    return {
        type: "SET_CURRENT_PAGE",
        currentPage: currentPage
    };
};

export const setMusicActionCreator = (songData) => {
    return {
        type: "SET_MUSIC",
        songData: songData
    };
};

export default MusicPageReducer