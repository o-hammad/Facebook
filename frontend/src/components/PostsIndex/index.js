import { useSelector } from "react-redux";
import PostItem from "../PostItem";

function PostsIndex () {
    const rcvdPosts = useSelector(state => state.posts);
    const posts = Object.values(rcvdPosts);

    function compareByCreation(a, b) {
        debugger
        return new Date(b.createdAt) - new Date(a.createdAt);
    }

    const sortedPosts = posts.sort(compareByCreation)
    debugger

    return (
        <div className="postsContainer">
            {sortedPosts.map((postInfo) => {
                debugger
                return <PostItem post={postInfo} />
            })}
        </div>
    )
}

export default PostsIndex;