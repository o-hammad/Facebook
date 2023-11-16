import csrfFetch from "./csrf";

const GET_ONE_USER = "GET_ONE_USER";
const CREATE_POST = "post/CREATE_POST";

const createPost = post => ({
    type: CREATE_POST,
    payload: post
})

export const createPostThunk = (post) => async dispatch => {
    const { posterId, posteeId, body} = post;

    const response = await csrfFetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
            poster_id: posterId,
            postee_id: posteeId,
            body
        })
    });

    if (response.ok) {
        const post = await response.json()
        dispatch(createPost(post))
    }
}

const postReducer = (state = {}, action) => {
    const newState = Object.assign({}, Object.freeze(state));

    switch (action.type) {
        case GET_ONE_USER:
            // newState[action.payload.user.id] = action.payload
            const nextState = { ...newState, ...action.payload.posts }
            return nextState
        case CREATE_POST:
            const withPost = { ...newState, ...action.payload.post }
            return withPost
        default:
            return state;
    }
}

export default postReducer;

