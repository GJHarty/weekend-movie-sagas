import axios from "axios";

export default function* saveMovie(action) {
    // submit updated title and/or description to the db
    try {
        yield axios.put(`/api/movie/${action.payload.id}`, action.payload);
        yield put({
            type: 'FETCH_MOVIES',
        })
    } catch (err) {
        console.log('saveMovie error', err);
    }
}