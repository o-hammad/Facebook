import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPostsThunk } from "../../store/post";
import PostsIndex from "../PostsIndex";


function NewsFeed () {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)


    useEffect(() => {
        dispatch(fetchAllPostsThunk())
    })

    return (
        <div>
            <PostsIndex />
        </div>
    )
}

export default NewsFeed;