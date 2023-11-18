import "./PostItem.css"
import { deletePostThunk } from "../../store/post";
import { useDispatch } from 'react-redux';


function PostItem (post) {
    const dispatch = useDispatch();

    const handleEdit = (e) => {
        e.preventDefault();


    }

    const handleDelete = (e) => {
        e.preventDefault();

        debugger

        return dispatch(deletePostThunk(post.post.id))
    }



    debugger
    return (
        <div className="postItemContainer">
            <div className="upperHalf">
                <div className="upperHalfLeft">
                    <img src="https://facebook85-seeds.s3.amazonaws.com/blank-head-profile-pic-for-a-man.jpg" alt="posterProfileImage" className="posterIcon"></img>
                </div>
                <div className="upperHalfRight">
                    <p className="posterNames">{post.post.poster.first_name} {post.post.poster.last_name} {">"} {post.post.postee.first_name} {post.post.postee.last_name} </p>
                    <p>{post.post.createdAt.slice(0, 10)}</p>
                </div>
            </div>
            <div className="body">
                <p>{post.post.body}</p>
            </div>
            <div className="editDeletePost">
                <button className="editPost" onClick={handleEdit}>
                    Edit
                </button>
                <button className="deletePost" onClick={handleDelete}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default PostItem;