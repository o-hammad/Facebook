import { useSelector } from "react-redux";
import FriendItem from "../FriendItem";
import "./FriendsIndex.css"

function FriendsIndex (props) {
    // const sessionUser = useSelector(state => state.users)
    // const friends = useSelector(state => state.friends)
    const users = useSelector(state => state.users)

    // const friendships = Object.values(friends)
    let friendsList = []
    
    props.friends.forEach((friendship) => {
        if (friendship.friendeeId === props.userId) {
            friendsList.push(users[friendship.frienderId])
        }
    })

    return (
        <div className="friendshipsContainer">
            {friendsList.map((friendListItem) => {
                return <FriendItem friend={friendListItem}/>
            })}
        </div>
    )
}

export default FriendsIndex;