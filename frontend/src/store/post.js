import csrfFetch from "./csrf";

const GET_ONE_USER = "GET_ONE_USER";
const CREATE_POST = "post/CREATE_POST";
const REMOVE_POST = "post/REMOVE_POST";

const createPost = post => ({
    type: CREATE_POST,
    payload: post
})

export const removePost = postId => {
    return {
        type: REMOVE_POST,
        postId
    }
};

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
        debugger
        dispatch(createPost(post))
    }
}

export const deletePostThunk = (postId) => async dispatch => {
    const response = await csrfFetch(`/api/posts/${postId}`, {
        method: "DELETE"
    })

    if (response.ok) {
        dispatch(removePost(postId))
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
            debugger
            const withPost = { ...newState, ...action.payload }
            debugger
            return withPost
        case REMOVE_POST:
            debugger
            delete newState[action.postId];
            debugger
            return newState;
        default:
            return state;
    }
}

export default postReducer;

