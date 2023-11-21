import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPostsThunk } from "../../store/post";
import PostsIndex from "../PostsIndex";
import "./NewsFeed.css"
// import { Redirect } from "react-router-dom";


function NewsFeed () {
    const dispatch = useDispatch();
    // const sessionUser = useSelector(state => state.session.user)
    
    useEffect(() => {
        dispatch(fetchAllPostsThunk())
    })
    
    // if (!sessionUser) return <Redirect to="/login" />;
    
    
    return (
        <div className="newsFeed">
            <div className="leftSide">

            </div>
            <div className="postsIndex">
                <PostsIndex />
            </div>
            <div className="rightSide">

            </div>
        </div>
    )
}

export default NewsFeed;