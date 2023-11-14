

const GET_ONE = "user/GET_ONE";

const getOneUser = user => ({
    type: GET_ONE,
    payload: user
});

export const userProfileView = (id) => async dispatch => {
    const response = await fetch(`/api/users/${id}`)

    debugger

    if (response.ok) {
        const user = await response.json()
        debugger
        dispatch(getOneUser(user))
    }
}

const userReducer = (state = {}, action) => {
    const newState = Object.assign({}, Object.freeze(state));

    debugger

    switch(action.type) {
        case GET_ONE:
            newState[action.payload.user.id] = action.payload
            return newState
        default:
            return state;
    }
}

export default userReducer;