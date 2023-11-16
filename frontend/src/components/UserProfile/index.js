import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { userProfileView } from '../../store/user';
import { useDispatch, useSelector } from 'react-redux';
import "./UserProfile.css";
import Icon from "../../assets/images/blank_user icon.jpg";
import { createPostThunk } from '../../store/post';
import PostsIndex from '../PostsIndex';


function UserProfile () {
    const { userId } = useParams();
    const dispatch = useDispatch();
    const user = useSelector(state => state.users[userId]);
    const sessionUser = useSelector(state => state.session.user);
    let body;
    
    useEffect(() => {
        dispatch(userProfileView(userId))
    }, [dispatch, userId])

    
    if (!user) {
        return null;
    }

    const handlePost = (e) => {
        debugger
        
        e.preventDefault();
        
        const posterId = sessionUser.id;
        const posteeId = user.id;
        
        debugger

        return dispatch(createPostThunk({ posterId, posteeId, body }))
            // .catch(async (res) => {
            //     let data;
            //     try {
            //         // .clone() essentially allows you to read the response body twice
            //         data = await res.clone().json();
            //     } catch {
            //         data = await res.text(); // Will hit this case if the server is down
            //     }
            //     if (data?.errors) setErrors(data.errors);
            //     else if (data) setErrors([data]);
            //     else setErrors([res.statusText]);
            // });
    }

    return (
        <div className='background'>
            <div className='upperbackGround'>
                <div className='coverPhotoContainer'>

                </div>
                <div className='belowCoverPhoto'>
                    <div className='belowCoverPhotoLeft'>
                        <div className='profilePicture'>

                        </div>
                        <div className='profileName'>
                            <p>{`${user.firstName} ${user.lastName}`}</p>
                        </div>
                    </div>
                    <div className='belowCoverPhotoRight'>
                        
                    </div>
                </div>
            </div>
            <div className='lowerbackGround'>
                <div className='leftColumn'>
                    <div className='friendsContainer'>
                        <div className='friendsHeader'>
                            <h1>Friends</h1>
                        </div>
                        <div className='friendsThumbnails'>
                            <h1>Friends Thumbnail Holder</h1>
                        </div>
                    </div>
                </div>
                <div className='rightColumn'>
                    <div className='postContainer'>
                        <img src={Icon} alt="userProfilePic" className='commentIcon' /> 
                        <form onSubmit={handlePost} className='postForm'>
                            <input 
                                type="text"
                                onChange={(e) => body = e.target.value}
                                placeholder={sessionUser.id === user.id ? 
                                    `What's on your mind?`:
                                    `Write something to ${user.firstName}`} 
                                className='postText'
                            />
                            <button
                                type = "submit"
                                className='postButton'
                                >Post
                            </button>
                        </form>
                    </div>
                    <div className='postsContainer'>
                        <PostsIndex />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile;