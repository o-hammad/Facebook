
// import csrfFetch from "./csrf";


// const GET_CURRENT_USER = 'user/getCurrentUser';
// // const REMOVE_CURRENT_USER = 'user/removeCurrentUser';

// const getCurrentUser = (user) => ({
//     type: GET_CURRENT_USER,
//     payload: user
// });

// // const removeCurrentUser = () => ({
// //     type: REMOVE_CURRENT_USER
// // });

// export const getUser = ( userId ) => async dispatch => {
//     const response = await csrfFetch(`/api/users/${userId}`);

//     const data = await response.json();
//     dispatch(getCurrentUser(data));
// };

// const userReducer = (state = {}, action) => {
//     const newState = Object.assign({}, Object.freeze(state));

//     debugger

//     switch (action.type) {
//         case GET_CURRENT_USER: 
//             newState[action.payload.user.id] = action.payload;
//             return newState;
//         // case REMOVE_CURRENT_USER:
//         //     return { ...state, user: null };
// //         default:
// //             return state;
// //     }
// // };

// export default userReducer;