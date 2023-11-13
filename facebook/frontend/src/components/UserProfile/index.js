import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { userProfileView } from '../../store/user';
import { useDispatch, useSelector } from 'react-redux';


function UserProfile () {
    const { userId } = useParams();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(userProfileView(userId))
    }, [dispatch, userId])

    const user = useSelector(state => state.user[userId]);

    debugger

    if (!user) {
        return null;
    }

    return (
        <h1>{user.user.email}</h1>
    )
}

export default UserProfile;