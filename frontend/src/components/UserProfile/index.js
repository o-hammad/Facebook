import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { userProfileView } from '../../store/user';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import "./UserProfile.css";
import Icon from "../../assets/images/blank_user icon.jpg";
import CreateWallPost from '../CreateWallPost';

function UserProfile () {
    const { userId } = useParams();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user[userId]);
    const sessionUser = useSelector(state => state.session.user);
    
    useEffect(() => {
        dispatch(userProfileView(userId))
    }, [dispatch, userId])

    
    if (!user) {
        return null;
    }

    const handlePost = (e) => {
        e.preventDefault();

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
                            <p>{`${user.user.firstName} ${user.user.lastName}`}</p>
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
                        <input 
                            type='text' 
                            placeholder={sessionUser.id === user.id ? 
                                `What's on your mind?`:
                                `Write something to ${user.user.firstName}`} 
                            className='postText'
                        />
                        <button
                            onSubmit={handlePost}
                            className='postButton'
                            >Post
                        </button>
                    </div>
                    <div className='postsContainer'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile;