import "./PostItem.css"
import { deletePostThunk } from "../../store/post";
import { useDispatch, useSelector } from 'react-redux';
import { useState } from "react";
import Modal from "../Modal";
import { editPostThunk } from "../../store/post";


function PostItem (post) {
    const dispatch = useDispatch();
    const [isModalOpen, setModalOpen] = useState(false);
    const [body, setBody] = useState(post.post.body)
    const user = useSelector(state => state.users[post.post.posterId])
    const sessionUser = useSelector(state => state.session.user)


    const openModal = () => {
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }


    const handleEdit = (e) => {
        e.preventDefault();

        closeModal();

        const data = {
            posterId: post.post.posterId,
            posteeId: post.post.posteeId,
            body: body
        }

        return dispatch(editPostThunk(post.post.id, data))        
    }

    const handleDelete = (e) => {
        e.preventDefault();

        return dispatch(deletePostThunk(post.post.id))
    }

    return (
        <div className="postItemContainer">
            <div className="upperHalf">
                <div className="upperHalfLeft">
                    <img src={user?.profileImage} alt="posterProfileImage" className="posterIcon"></img>
                </div>
                <div className="upperHalfRight">
                    <p className="posterNames">{post.post.poster?.first_name} {post.post.poster?.last_name} {">"} {post.post.postee?.first_name} {post.post.postee?.last_name} </p>
                    <p>{post.post.createdAt?.slice(0, 10)}</p>
                </div>
            </div>
            <div className="body">
                <p>{post.post?.body}</p>
            </div>
            <div className="editDeletePost">
                { sessionUser.id === user.id ? (
                    <button className="editPost" onClick={openModal}>
                        Edit
                    </button>
                    ) :
                    "" }
                <Modal isOpen={isModalOpen} closeModal={closeModal}>
                    <form onSubmit={handleEdit}>
                        <div className="upperHalf">
                            <div className="upperHalfLeft">
                                <img src={user?.profileImage} alt="posterProfileImage" className="posterIcon"></img>
                            </div>
                            <div className="upperHalfRight">
                                <p className="posterNames">{post.post.poster?.first_name} {post.post.poster?.last_name} {">"} {post.post.postee?.first_name} {post.post.postee?.last_name} </p>
                                <p>{post.post.createdAt?.slice(0, 10)}</p>
                            </div>
                        </div>
                        <div className="body">
                            <input type="text" value={post.post?.body} className="updatedBody" onChange={(e) => setBody(e.target.value)}>
                            </input>
                        </div>
                        <button type="submit" className="editPostButton">Edit Post</button>
                    </form>
                </Modal>
                {sessionUser.id === user.id ? (
                    <button className="deletePost" onClick={handleDelete}>
                        Delete
                    </button> ) :
                    "" }
            </div>
        </div>
    )
}

export default PostItem;