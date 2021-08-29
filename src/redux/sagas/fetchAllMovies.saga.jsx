import axios from "axios";
import { put } from 'redux-saga/effects';

export default function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ 
            type: 'SET_MOVIES', 
            payload: movies.data,
        });
    } catch (err) {
        console.log('get all error', err);
    }  
}