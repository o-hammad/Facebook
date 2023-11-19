

const GET_ONE_USER = "GET_ONE_USER";

const getOneUser = user => ({
    type: GET_ONE_USER,
    payload: user
});

export const userProfileView = (id) => async dispatch => {
    const response = await fetch(`/api/users/${id}`)

    if (response.ok) {
        const user = await response.json()
        dispatch(getOneUser(user))
    }
}

const userReducer = (state = {}, action) => {
    const newState = Object.assign({}, Object.freeze(state));

    switch(action.type) {
        case GET_ONE_USER:
            // newState[action.payload.user.id] = action.payload
            const nextState = {...newState, ...action.payload.user}
            return nextState
        default:
            return state;
    }
}

export default userReducer;