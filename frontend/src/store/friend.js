import csrfFetch from "./csrf";

const GET_ONE_USER = "GET_ONE_USER";
const CREATE_FRIEND = "friend/CREATE_FRIEND";
const REMOVE_FRIEND = "friend/REMOVE_FRIEND";

export const createFriend = friend => ({
    type: CREATE_FRIEND,
    payload: friend
})

export const removeFriend = frienderId => {
    return {
        type: REMOVE_FRIEND,
        payload: frienderId
    }
};


export const createFriendThunk = (friendship) => async dispatch => {
    const { frienderId, friendeeId } = friendship;

    debugger

    const response = await csrfFetch("/api/friends", {
        method: "POST",
        body: JSON.stringify({
            friender_id: frienderId,
            friendee_id: friendeeId
        })
    });

    if (response.ok) {
        const friend = await response.json()
        debugger
        return dispatch(createFriend(friend))
    }
}

export const deleteFriendThunk = (userId, currentUserId) => async dispatch => {
    debugger

    const response = await csrfFetch("/api/friends/39", {
        method: "DELETE",
        body: JSON.stringify({
            current_user_id: currentUserId,
            user_id: userId
        })
    })

    if (response.ok) {
        const friendRemoval = await response.json()
        debugger
        const friendId = Object.values(friendRemoval)
        return dispatch(removeFriend(friendId))
    }
}

const friendReducer = (state = {}, action) => {
    const newState = Object.assign({}, Object.freeze(state));

    switch (action.type) {
        case GET_ONE_USER:
            const updatedState = { ...newState, ...action.payload.friends };
            return updatedState;
        case CREATE_FRIEND:
            debugger
            const nextState = { ...newState, ...action.payload }
            return nextState
        case REMOVE_FRIEND:
            debugger
            delete newState[action.payload[0].id];
            return newState;
        default:
            return state;
    }
}

export default friendReducer;

