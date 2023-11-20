import { useSelector } from "react-redux";
import FriendItem from "../FriendItem";
import "./FriendsIndex.css"

function FriendsIndex () {
    const friends = useSelector(state => state.friends)
    const friendships = Object.values(friends)

    debugger
    return (
        <div className="friendshipsContainer">
            {friendships.map((friendListItem) => {
                debugger
                return <FriendItem friend={friendListItem}/>
            })}
        </div>
    )
}

export default FriendsIndex;