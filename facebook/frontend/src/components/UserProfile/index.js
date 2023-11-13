import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getUser } from "../../store/user";
import { useSelector } from "react-redux";

function UserProfile () {
    const { userId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser(userId));
    }, [])

    const user = useSelector(state => state.user[userId]);

    debugger

    return (
        <h1>{user.email}</h1>
    )
}

export default UserProfile;
