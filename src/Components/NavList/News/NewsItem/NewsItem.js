const NewsItem = (props) => {
    return (
        <div>
            <div>
                <img src={props.senderPic}/>
            </div>
            <div>
                {props.senderName}
            </div>
            <div>
                {props.sendingPic}
            </div>
            <div>
                {props.sendingText}
            </div>
            <div>
                Likes:
            </div>
            <div>
                <button>
                    Like
                </button>
            </div>
        </div>
    )
}

export default NewsItem