import {connect} from "react-redux";
import News from "./News";
import {newsItemNasLikedActionCreator} from "../../../Redux/NewsPageReducer";

let mapStateToProps = (state) => {
    return {
        newsData: state.newsPage.newsData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        newsItemHasLiked: (id) => {
            dispatch(newsItemNasLikedActionCreator(id))
        }
    }
}

const NewsContainer = connect (mapStateToProps, mapDispatchToProps) (News)

export default NewsContainer