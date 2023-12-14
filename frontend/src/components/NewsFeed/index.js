import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPostsThunk } from "../../store/post";
import PostsIndex from "../PostsIndex";
import "./NewsFeed.css"
import Navigation from "../Navigation";
import { userProfileView } from '../../store/user';
import FriendsList from "../FriendsList";

// import { Redirect } from "react-router-dom";


function NewsFeed () {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const userId = sessionUser.id;
    // const sessionUser = useSelector(state => state.session.user)
    
    useEffect(() => {
        dispatch(userProfileView(userId))
        dispatch(fetchAllPostsThunk())
    }, [dispatch])
    
    // if (!sessionUser) return <Redirect to="/login" />;
    
    
    return (
        <div className="newsFeed">
            <Navigation />
            <div className="leftSide">
                <FriendsList />
            </div>
            <div className="postsIndex">
                <div className="postsHeader">
                    <h3>Wall Posts</h3>
                </div>
                <PostsIndex />
            </div>
            <div className="rightSide">

            </div>
        </div>
    )
}

export default NewsFeed;