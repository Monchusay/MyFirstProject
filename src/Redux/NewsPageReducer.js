let InitialState = {
  newsData: [
    {
      senderPic: "https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec",
      senderName: "Amogus",
      sendingPic: "https://setgis.net/images/amogus.png",
      sendingText: "I know who is impostor",
      id: 1,
      likesCount: 22,
    },
    {
      senderPic: "https://i.ytimg.com/vi/hQYhdHjP-gM/hqdefault.jpg",
      senderName: "Валера",
      sendingPic: "https://www.meme-arsenal.com/memes/708c5e2e5331183dd568a9ede42524f0.jpg",
      sendingText: "Я безумно хочу пиццу...",
      id: 2,
      likesCount: 41,
    },
    {
      senderPic: "https://avatars.mds.yandex.net/get-zen_doc/1532998/pub_5e2589553d008800b13fa22f_5e258d69f73d9d00af63d554/scale_1200",
      senderName: "Jaba",
      sendingPic: "https://cs12.pikabu.ru/images/big_size_comm/2021-10_1/1633373675290641873.jpg",
      sendingText: "За червя и двор стреляю в упор",
      id: 3,
      likesCount: 13,
    },
  ],
};

const NewsPageReducer = (state = InitialState, action) => {

  let stateCopy;
  stateCopy = {...state}
  stateCopy.newsData = [...state.newsData]

  switch (action.type) {
    case "ITEM_HAS_LIKED":
      let newsIndex = stateCopy.newsData.findIndex((news) => news.id === action.id);
      stateCopy.newsData[newsIndex].likesCount += 1;
      return stateCopy;
  }
  return state;
};

export const newsItemNasLikedActionCreator = (id) => {
  return {
    type: "ITEM_HAS_LIKED",
    id: id,
  };
}

export default NewsPageReducer;
