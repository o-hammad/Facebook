


function PostItem (post) {
    
    debugger
    return (
        <div>
            <p>{post.post.poster.first_name} {post.post.poster.last_name}</p>
            <p>{post.post.createdAt}</p>
            <p>{post.post.body}</p>
        </div>
    )
}

export default PostItem;