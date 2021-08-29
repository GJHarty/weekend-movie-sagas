import { put } from "@redux-saga/core/effects";
import axios from "axios";

export default function* createMovie(action) {
    // submit new movie information to database
    try {
        yield axios.post('api/movie', action.payload);
        yield put({
            type: 'FETCH_MOVIES',
        })
    } catch (err) {
        console.log('createMovie error', err);
    }
}