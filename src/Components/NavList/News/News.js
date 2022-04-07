import NewsItem from "./NewsItem/NewsItem";


const News = (props) => {

    let newsElement = props.newsData.map((news, index) => (
        <NewsItem
            key={news.id}
            senderPic={news.senderPic}
            senderName={news.senderName}
            sendingPic={news.sendingPic}
            sendingText={news.sendingText}
            likesCount={news.likesCount}
            newsItemHasLiked={props.newsItemHasLiked}
            id={news.id}
        />
    ))

    return (
        <div>
            {newsElement}
        </div>
    )
}

export default News;