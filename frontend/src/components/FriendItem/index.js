import { Link } from "react-router-dom";



function FriendItem (friend) {
    return (
        <div className="friendContainer">
            <img src={friend.friend.profileImage} alt="profilePicture" className='profilePicture'></img>
            <Link to={`/users/${friend.friend.id}`}>{friend.friend.firstName} {friend.friend.lastName}</Link>
        </div>
    )
}

export default FriendItem;