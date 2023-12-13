

const GET_ONE_USER = "GET_ONE_USER";

const getOneUser = users => ({
    type: GET_ONE_USER,
    payload: users
});

export const userProfileView = (id) => async dispatch => {
    const response = await fetch(`/api/users/${id}`)

    if (response.ok) {
        const user = await response.json()
        dispatch(getOneUser(user))
    }
}

const userReducer = (state = {}, action) => {
    // const newState = Object.assign({}, Object.freeze(state));

    switch(action.type) {
        case GET_ONE_USER:
            // newState[action.payload.user.id] = action.payload
            // const nextState = {...newState, ...action.payload.user}
            // return nextState
            return action.payload.users
        default:
            return state;
    }
}

export default userReducer;