import { Link } from "react-router-dom";



function FriendItem (friend) {
    debugger
    return (
        <div className="friendContainer">
            <img src="https://facebook85-seeds.s3.amazonaws.com/blank-head-profile-pic-for-a-man.jpg" alt="profilePicture" className='profilePicture'></img>
            <Link to={`/users/${friend.friend.id}`}>{friend.friend.firstName} {friend.friend.lastName}</Link>
        </div>
    )
}

export default FriendItem;