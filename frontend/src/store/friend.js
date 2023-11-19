import csrfFetch from "./csrf";

const GET_ONE_USER = "GET_ONE_USER";
const CREATE_FRIEND = "friend/CREATE_FRIEND";
const REMOVE_FRIEND = "friend/REMOVE_FRIEND";

export const createFriend = friendship => ({
    type: CREATE_FRIEND,
    payload: friendship
})

export const removeFriend = friendshipId => {
    return {
        type: REMOVE_FRIEND,
        payload: friendshipId
    }
};


export const createFriendThunk = (friendship) => async dispatch => {
    const { frienderId, friendeeId } = friendship;

    const response = await csrfFetch("/api/friends", {
        method: "POST",
        body: JSON.stringify({
            friender_id: frienderId,
            friendee_id: friendeeId
        })
    });

    if (response.ok) {
        const post = await response.json()
        debugger
        dispatch(createFriend(post))
    }
}

export const deleteFriendThunk = (friendshipId) => async dispatch => {
    debugger
    const response = await csrfFetch(`/api/friends/${friendshipId}`, {
        method: "DELETE"
    })

    if (response.ok) {
        dispatch(removeFriend(friendshipId))
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
            delete newState[action.payload];
            return newState;
        default:
            return state;
    }
}

export default friendReducer;

