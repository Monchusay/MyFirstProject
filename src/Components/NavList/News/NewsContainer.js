import {connect} from "react-redux";
import News from "./News";

let mapStateToProps = (state) => {
    return {
        newsData: state.newsPage.newsData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const NewsContainer = connect (mapStateToProps, mapDispatchToProps) (News)

export default NewsContainer