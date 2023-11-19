import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { userProfileView } from '../../store/user';
import { useDispatch, useSelector } from 'react-redux';
import "./UserProfile.css";
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
                    <div className='coverPhoto'>
                        <img src="https://facebook85-seeds.s3.amazonaws.com/pexels-leah-kelley-3935703.jpg" alt="coverPhoto" className='actualCoverPhoto'></img>
                    </div>
                </div>
                <div className='belowCoverPhoto'>
                    <div className='belowCoverPhotoLeft'>
                        <div className='profilePictureContainer'>
                            <img src="https://facebook85-seeds.s3.amazonaws.com/blank-head-profile-pic-for-a-man.jpg" alt="profilePicture" className='profilePicture'></img>
                        </div>
                        <div className='profileName'>
                            <h1>{`${user.firstName} ${user.lastName}`}</h1>
                        </div>
                    </div>
                    <div className='belowCoverPhotoRight'>
                        
                    </div>
                </div>
            </div>
            <div className='lowerbackGround'>
                <div className='leftColumn'>
                    <div className='friendsContainer'>
                        <div className='friendsThumbnails'>
                            <h3>Friends</h3>
                            <h1>Friends Thumbnail Holder</h1>
                        </div>
                    </div>
                </div>
                <div className='rightColumn'>
                    <div className='postContainer'>
                        <img src={sessionUser.profileImage} alt="userProfilePic" className='commentIcon' /> 
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