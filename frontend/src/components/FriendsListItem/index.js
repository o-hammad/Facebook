import { Link } from "react-router-dom";
import "./FriendsListItem.css"

function FriendsListItem(friend) {
    
    
    return (
        <div className="friendsListItemContainer">
            <div>
                <img src={friend.friend?.profileImage} className="friendsListIcons" alt="profilePic"></img>
            </div>
            <div>
                <p><Link to={`/users/${friend.friend.id}`}>{friend.friend.firstName} {friend.friend.lastName}</Link></p>
            </div>
        </div>
    )
}

export default FriendsListItem;