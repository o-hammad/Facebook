import "./PostItem.css"
import { deletePostThunk } from "../../store/post";
import { useDispatch } from 'react-redux';
import { useState } from "react";
import Modal from "../Modal";
import { editPostThunk } from "../../store/post";


function PostItem (post) {
    const dispatch = useDispatch();
    const [isModalOpen, setModalOpen] = useState(false);
    const [body, setBody] = useState(post.post.body)

    const openModal = () => {
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }


    const handleEdit = (e) => {
        e.preventDefault();

        debugger

        closeModal();

        const data = {
            posterId: post.post.posterId,
            posteeId: post.post.posteeId,
            body: body
        }

        debugger

        return dispatch(editPostThunk(post.post.id, data))        
    }

    const handleDelete = (e) => {
        e.preventDefault();

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
                    <p className="posterNames">{post.post.poster?.first_name} {post.post.poster?.last_name} {">"} {post.post.postee?.first_name} {post.post.postee?.last_name} </p>
                    <p>{post.post.createdAt?.slice(0, 10)}</p>
                </div>
            </div>
            <div className="body">
                <p>{post.post?.body}</p>
            </div>
            <div className="editDeletePost">
                <button className="editPost" onClick={openModal}>
                    Edit
                </button>
                <Modal isOpen={isModalOpen} closeModal={closeModal}>
                    <form onSubmit={handleEdit}>
                        <div className="upperHalf">
                            <div className="upperHalfLeft">
                                <img src="https://facebook85-seeds.s3.amazonaws.com/blank-head-profile-pic-for-a-man.jpg" alt="posterProfileImage" className="posterIcon"></img>
                            </div>
                            <div className="upperHalfRight">
                                <p className="posterNames">{post.post.poster?.first_name} {post.post.poster?.last_name} {">"} {post.post.postee?.first_name} {post.post.postee?.last_name} </p>
                                <p>{post.post.createdAt?.slice(0, 10)}</p>
                            </div>
                        </div>
                        <div className="body">
                            <input type="text" placeholder={post.post?.body} className="updatedBody" onChange={(e) => setBody(e.target.value)}>
                            </input>
                        </div>
                        <button type="submit" className="editPostButton">Edit Post</button>
                    </form>
                </Modal>
                <button className="deletePost" onClick={handleDelete}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default PostItem;