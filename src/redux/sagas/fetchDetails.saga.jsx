import axios from "axios";
import { put } from 'redux-saga/effects';

export default function* fetchDetails(action) {
    // go to a specific movie's details page
    try {
        const details = yield axios.get(`/api/details`, {params: {id: action.payload}});
        console.log('get details:', details.data);
        yield put({ 
            type: 'SET_DETAILS', 
            payload: details.data,
        });
    } catch (err) {
        console.log('fetchDetails error', err);
    }
}

