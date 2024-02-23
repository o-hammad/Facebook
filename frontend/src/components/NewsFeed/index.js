import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPostsThunk } from "../../store/post";
import PostsIndex from "../PostsIndex";
import "./NewsFeed.css"
import Navigation from "../Navigation";
import { userProfileView } from '../../store/user';
import FriendsList from "../FriendsList";
import { useState } from "react";
import { createPostThunk } from "../../store/post";
import OHHeadshot from "../../assets/images/headshot - omh.jpg"
import LinkedIn from "../../assets/images/linkedinicon.png";
import gitHub from "../../assets/images/github-logo.png";

// import { Redirect } from "react-router-dom";


function NewsFeed () {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const userId = sessionUser.id;
    const user = useSelector(state => state.users[userId]);
    const [body, setBody] = useState("");
    // const sessionUser = useSelector(state => state.session.user)

    useEffect(() => {
        dispatch(userProfileView(userId))
        dispatch(fetchAllPostsThunk())
    }, [dispatch])
    
    // if (!sessionUser) return <Redirect to="/login" />;
    
    const handlePost = (e) => {
        e.preventDefault();

        const posterId = sessionUser?.id;
        const posteeId = user?.id;

        if (sessionUser?.id === user?.id) {
            setBody(`What's on your mind?`)
        } else {
            setBody(`Write something to ${user?.firstName}...`)
        }

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
        <div className="newsFeed">
            <Navigation />
            <div className="leftSide">
                <FriendsList />
            </div>
            <div className="postsIndex">
                <div className="postsHeader">
                    <h3>Wall Posts</h3>
                </div>
                <div className='postContainer'>
                    <img src={user?.profileImage} alt="userProfilePic" className='commentIcon' />
                    <form onSubmit={handlePost} className='postForm'>
                        <input
                            type="text"
                            onChange={(e) => setBody(e.target.value)}
                            placeholder={sessionUser?.id === user?.id ?
                                `What's on your mind?` :
                                `Write something to ${user?.firstName}...`}
                            className='postText'
                            value={body}
                        />
                        <button
                            type="submit"
                            className='postButton'
                        >Post
                        </button>
                    </form>
                </div>
                <PostsIndex />
            </div>
            <div className="rightSide">
                <div className="advertisement">
                    <div className="adHeader">
                        <h5>Sponsored</h5>
                    </div>
                    <div>
                        <h4>Software Engineer for Hire</h4>
                    </div>
                    <div>
                        <img src={OHHeadshot} className="headshot"></img>
                    </div>
                    <div className='links'>
                        <a href="https://www.linkedin.com/in/omar-hammad-93810413b/" target="_blank"><img src={LinkedIn} className='linkedInIcon'></img></a>
                        <a href="https://github.com/o-hammad/Facebook.git" target="_blank"><img src={gitHub} className='gitHubIcon'></img></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsFeed;