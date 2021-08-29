// store specific movie details
const details = (state = {genres: []}, action) => {
    switch (action.type) {
        case 'SET_DETAILS':
            return action.payload[0];
        default:
            return state;
    }
}

export default details;