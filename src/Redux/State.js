const ADD_POST='ADD-POST';
const UPDATE_NEW_POST_TEXT='UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE='SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT='UPDATE-NEW-MESSAGE-TEXT';
const POST_HAS_LIKED='POST-HAS-LIKED'
const POST_HAS_DISLIKED='POST-HAS-DISLIKED'

let store = {
    _state: {
        messagesPage: {
            messageData: [
                {
                    image: "https://vologdamarafon.ru/static/img/no-photo.png",
                    message: "Privet Dima"
                },
                {
                    image: "https://www.meme-arsenal.com/memes/b5b6a757d1bd204196272992a74ebec3.jpg",
                    message: "Ny privet"
                }
            ],
            newMessageText: '<type here>'
        },
        profilePage: {
            postData: [
                {
                    id: 1,
                    message: "I wanna commit suicide",
                    likesCount: 69,
                    DislikesCount: 11,
                    image: "https://thedb.ru/upload/image/toad.png",
                },
                {
                    id: 2,
                    message: "Go on then Lol",
                    likesCount: 20,
                    DislikesCount: 42,
                    image:
                        "https://static8.depositphotos.com/1156926/1012/i/600/depositphotos_10120856-stock-photo-toad-isolated-on-white-background.jpg",
                },
            ],
            newPostText: '<type here>'
        },
        musicPage: {
            songData: [
                {
                    image:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3S9f-aAWOmCopR_OK9lBFW0PqvaXF-y4xQw&usqp=CAU",
                    singer: " Darude",
                    songname: " - Sandstorm",
                },
                {
                    image:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3S9f-aAWOmCopR_OK9lBFW0PqvaXF-y4xQw&usqp=CAU",
                    singer: " K.D.A",
                    songname: " - Giants",
                },
                {
                    image:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3S9f-aAWOmCopR_OK9lBFW0PqvaXF-y4xQw&usqp=CAU",
                    singer: " Malchik",
                    songname: " - PiyPiy",
                },
                {
                    image:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3S9f-aAWOmCopR_OK9lBFW0PqvaXF-y4xQw&usqp=CAU",
                    singer: " Eminem",
                    songname: " - RapGod",
                },
                {
                    image:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3S9f-aAWOmCopR_OK9lBFW0PqvaXF-y4xQw&usqp=CAU",
                    singer: " Jaba",
                    songname: " - Kvakaet",
                },
            ],
        },
        dialogPage: {
            dialogsData: [
                {
                    image: "https://www.meme-arsenal.com/memes/b5b6a757d1bd204196272992a74ebec3.jpg",
                    id: 1,
                    name: "Puris"
                },
                {
                    image: "https://upload.wikimedia.org/wikipedia/ru/thumb/4/4d/Wojak.png/200px-Wojak.png",
                    id: 2,
                    name: "HeheXD"
                },
                {
                    image: "https://ichef.bbci.co.uk/news/640/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg",
                    id: 3,
                    name: "OmegaPepega"
                },
                {
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHhAfBIMazKzEVP8Sej8X6xPU6JCIZtQIwHA&usqp=CAU",
                    id: 4,
                    name: "Bogdan"
                },
                {image: "https://i.kym-cdn.com/entries/icons/original/000/026/152/gigachad.jpg", id: 5, name: "KekW"},
            ]
        },
        friendsPage: {
            shortcutData: [
                {image: "https://www.meme-arsenal.com/memes/b5b6a757d1bd204196272992a74ebec3.jpg", friendName: "Puris"},
                {
                    image: "https://upload.wikimedia.org/wikipedia/ru/thumb/4/4d/Wojak.png/200px-Wojak.png",
                    friendName: "HeheXD"
                },
                {
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHhAfBIMazKzEVP8Sej8X6xPU6JCIZtQIwHA&usqp=CAU",
                    friendName: "Bogdan"
                },
            ]
        }
    },
    _callSubscriber() {
        console.log('State has changed');
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === 'ADD_POST') {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
                DislikesCount: 0,
                image: "https://vologdamarafon.ru/static/img/no-photo.png"
            }
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE_NEW_POST_TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'SEND_MESSAGE') {
            let newMessage = {
                image: "https://vologdamarafon.ru/static/img/no-photo.png",
                message: this._state.messagesPage.newMessageText
            }
            this._state.messagesPage.messageData.push(newMessage);
            this._state.messagesPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE_NEW_MESSAGE_TEXT') {
            this._state.messagesPage.newMessageText = action.newMText;
            this._callSubscriber(this._state);
        } else if (action.type === 'POST_HAS_LIKED') {
            let postIndex = this._state.profilePage.postData.findIndex(post => post.id === action.id)
            this._state.profilePage.postData[postIndex].likesCount += 1
            this._callSubscriber(this._state);
        } else if (action.type === 'POST_HAS_DISLIKED') {
            let postIndex = this._state.profilePage.postData.findIndex(post => post.id === action.id)
            this._state.profilePage.postData[postIndex].DislikesCount += 1
            this._callSubscriber(this._state);
        }
    }
}

export const postHasDisLikedActionCreator = (id) => {
    return{
        type: 'POST_HAS_DISLIKED',
        id:id
    }
}

export const postHasLikedActionCreator = (id) => {
    return{
        type: 'POST_HAS_LIKED',
        id:id
    }
}

export const updateNewMessageTextActionCreator =(messageText)=> {
    return {
        type: 'UPDATE_NEW_MESSAGE_TEXT',
        newMText:messageText
    }
}

export const sendMessageActionCreator = () => {
    return {
        type: 'SEND_MESSAGE'
    }
}

export const addPostActionCreator = () => {
    return {
        type: 'ADD_POST'
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: 'UPDATE_NEW_POST_TEXT',
        newText: text
    }
}

export default store;