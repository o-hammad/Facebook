import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { userProfileView } from '../../store/user';
import { useDispatch, useSelector } from 'react-redux';
import "./UserProfile.css";
import { createPostThunk } from '../../store/post';
import PostsIndex from '../PostsIndex';
import FriendsIndex from '../FriendsIndex';
import { createFriendThunk } from '../../store/friend';
import { deleteFriendThunk } from '../../store/friend';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';


function UserProfile () {
    const { userId } = useParams();
    const dispatch = useDispatch();
    const user = useSelector(state => state.users[userId]);
    const sessionUser = useSelector(state => state.session.user);
    const friends = useSelector(state => state.friends);
    const [body, setBody] = useState("");
    
    
    debugger
    
    useEffect(() => {
        dispatch(userProfileView(userId))
    }, [dispatch, userId])
    
    if (!sessionUser) return <Redirect to="/login" />;
    
    if (!user) {
        return null;
    }

    const handlePost = (e) => {
        debugger
        
        e.preventDefault();
        
        const posterId = sessionUser.id;
        const posteeId = user.id;

        debugger
        if (sessionUser.id === user.id) {
            setBody(`What's on your mind?`)
        } else {
            setBody(`Write something to ${user.firstName}...`)
        }
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

    const handleUnFriend = (e) => {
        e.preventDefault();

        return(dispatch(deleteFriendThunk(user.id, sessionUser.id)))
    }

    const handleFriend = (e) => {
        e.preventDefault();

        const frienderId = sessionUser.id;
        const friendeeId = user.id

        return dispatch(createFriendThunk({frienderId: frienderId, friendeeId: friendeeId}))
    }

    return (
        <div className='background'>
            <div className='upperbackGround'>
                <div className='coverPhotoContainer'>
                    <div className='coverPhoto'>
                        <img src={user.coverPhoto} alt="coverPhoto" className='actualCoverPhoto'></img>
                    </div>
                </div>
                <div className='belowCoverPhoto'>
                    <div className='belowCoverPhotoLeft'>
                        <div className='profilePictureContainer'>
                            <img src={user.profileImage} alt="profilePicture" className='profilePicture'></img>
                        </div>
                        <div className='profileName'>
                            <h1>{`${user.firstName} ${user.lastName}`}</h1>
                        </div>
                    </div>
                    <div className='friendButtonContainer'>
                        {sessionUser.id in friends ? <button onClick={handleUnFriend} className='friendButton'>Unfriend</button> : <button onClick={handleFriend} className='friendButton'>Friend</button>}
                    </div>
                    <div className='belowCoverPhotoRight'>
                        
                    </div>
                </div>    
            </div>
            <div className='divider'>
                <div className='innerLine'>
        
                </div>
            </div>
            <div className='lowerbackGround'>
                <div className='leftColumn'>
                    <div className='friendsContainer'>
                        <h3>Friends</h3>
                        <div className='friendsThumbnails'>
                            <FriendsIndex />
                        </div>
                    </div>
                </div>
                <div className='rightColumn'>
                    <div className='postContainer'>
                        <img src={user.profileImage} alt="userProfilePic" className='commentIcon' /> 
                        <form onSubmit={handlePost} className='postForm'>
                            <input 
                                type="text"
                                onChange={(e) => setBody(e.target.value)}
                                placeholder={sessionUser.id === user.id ? 
                                    `What's on your mind?`:
                                    `Write something to ${user.firstName}...`} 
                                className='postText'
                                value = {body}
                            />
                            <button
                                type = "submit"
                                className='postButton'
                                >Post
                            </button>
                        </form>
                    </div>
                    <div className='postsHeader'>
                        <h3>Posts</h3>
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