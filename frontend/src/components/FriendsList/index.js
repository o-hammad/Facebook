import { useSelector } from "react-redux";
import FriendsListItem from "../FriendsListItem";
import "./FriendsList.css"

function FriendsList() {
    const users = useSelector(state => state.users)
    const friends = useSelector(state => state.friends);
    const friendships = Object.values(friends);
    const sessionUser = useSelector(state => state.session.user)

    let friendsList = []

    friendships.forEach((friendship) => {
        if (friendship.friendeeId === sessionUser.id) {
            friendsList.push(users[friendship.frienderId])
        }
    })

    return (
        <div>
            <div className="friendshipsListContainer">
                <h3>Friends</h3>
                {friendsList.map((friendListItem) => {
                    return <FriendsListItem friend={friendListItem} />
                })}
            </div>
        </div>
    )
}

export default FriendsList;