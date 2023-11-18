import { useSelector } from "react-redux";
import PostItem from "../PostItem";
import { useEffect } from "react";

function PostsIndex () {
    // const orderedPosts = useSelector(state => state.posts.postIds);
    // const postDetails = useSelector(state => state.posts);

    // debugger

    // return (
    //     <div className="postsContainer">
    //         {orderedPosts.map((postId) => { 
    //             return <PostItem post={postDetails[postId]} />
    //         })}
    //     </div>
    // )

    
    const rcvdPosts = useSelector(state => state.posts);
    const posts = Object.values(rcvdPosts);

    function compareByCreation(a, b) {
        return new Date(b.createdAt) - new Date(a.createdAt);
    }

    const sortedPosts = posts.sort(compareByCreation)

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