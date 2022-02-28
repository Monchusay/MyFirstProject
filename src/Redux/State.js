import {RerenderTree} from "../Render";

let state = {
    profilePage: {
        postData: [
            {
                id: 1,
                message: "aaaaaa",
                likesCount: "Likes: 69",
                image: "https://thedb.ru/upload/image/toad.png",
            },
            {
                id: 2,
                message: "Go on then Lol",
                likesCount: "Likes: 20",
                image:
                    "https://static8.depositphotos.com/1156926/1012/i/600/depositphotos_10120856-stock-photo-toad-isolated-on-white-background.jpg",
            },
        ],
        newPostText: 'BLYAAAAAA'
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
        messagesData: [
            {id: 1, message: "Pizdos"},
            {id: 2, message: "aaaaa"},
            {id: 3, message: "bbbbb"},
            {id: 4, message: "ccccc"},
        ],
        dialogsData: [
            {image: "https://www.meme-arsenal.com/memes/b5b6a757d1bd204196272992a74ebec3.jpg", id: 1, name: "Puris"},
            {image: "https://upload.wikimedia.org/wikipedia/ru/thumb/4/4d/Wojak.png/200px-Wojak.png",id: 2, name: "HeheXD"},
            {image: "https://ichef.bbci.co.uk/news/640/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg",id: 3, name: "OmegaPepega"},
            {image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHhAfBIMazKzEVP8Sej8X6xPU6JCIZtQIwHA&usqp=CAU",id: 4, name: "Bogdan"},
            {image: "https://i.kym-cdn.com/entries/icons/original/000/026/152/gigachad.jpg",id: 5, name: "KekW"},
        ]
    },
    friendsPage: {
        shortcutData: [
            {image:"https://www.meme-arsenal.com/memes/b5b6a757d1bd204196272992a74ebec3.jpg", friendName: "Puris"},
            {image:"https://upload.wikimedia.org/wikipedia/ru/thumb/4/4d/Wojak.png/200px-Wojak.png", friendName: "HeheXD"},
            {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHhAfBIMazKzEVP8Sej8X6xPU6JCIZtQIwHA&usqp=CAU", friendName: "Bogdan"},
        ]
    }
}

export let addPost = () => {
    let newPost = {
        id:3,
        message: state.profilePage.newPostText,
        likesCount: 0,
        image: "https://vologdamarafon.ru/static/img/no-photo.png"
    }
    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText = '';
    RerenderTree(state);
}
export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    RerenderTree(state);
}
export default state;