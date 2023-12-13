import csrfFetch from "./csrf";

const GET_ONE_USER = "GET_ONE_USER";
const CREATE_FRIEND = "friend/CREATE_FRIEND";
const REMOVE_FRIEND = "friend/REMOVE_FRIEND";

export const createFriend = friendship => ({
    type: CREATE_FRIEND,
    payload: friendship
})

export const removeFriend = frienderId => {
    return {
        type: REMOVE_FRIEND,
        payload: frienderId
    }
};


export const createFriendThunk = (friendship) => async dispatch => {
    debugger
    
    const { frienderId, friendeeId } = friendship;

    const response = await csrfFetch("/api/friends", {
        method: "POST",
        body: JSON.stringify({
            friender_id: frienderId,
            friendee_id: friendeeId
        })
    });

    if (response.ok) {
        const friendship = await response.json()
        return dispatch(createFriend(friendship))
    }
}

export const deleteFriendThunk = (userId, currentUserId) => async dispatch => {
    debugger

    const response = await csrfFetch("/api/friends/308", {
        method: "DELETE",
        body: JSON.stringify({
            current_user_id: currentUserId,
            user_id: userId
        })
    })

    if (response.ok) {
        // const friendRemoval = await response.json()
        // const friendId = Object.values(friendRemoval)
        const friendships = await response.json()
        return dispatch(removeFriend(friendships))
    }
}

const friendReducer = (state = {}, action) => {
    const newState = Object.assign({}, Object.freeze(state));


    switch (action.type) {
        case GET_ONE_USER:
            // const updatedState = { ...newState, ...action.payload.friends };
            return { ...newState, ...action.payload.friends }
        case CREATE_FRIEND:
            debugger
            const nextState = { ...newState, ...action.payload.friends }
            return nextState
        case REMOVE_FRIEND:
            debugger
            // delete newState[action.payload[0].id];
            const friendships = Object.keys(action.payload.friends)
            delete newState[friendships[0]]
            delete newState[friendships[1]]
            return newState;
        default:
            return state;
    }
}

export default friendReducer;

