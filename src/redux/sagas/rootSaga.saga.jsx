import { takeEvery } from '@redux-saga/core/effects';
// import our saga handlers
import fetchAllMovies from './fetchAllMovies.saga';
import fetchDetails from './fetchDetails.saga';
import saveMovie from './saveMovie.saga';
import createMovie from './createMovie.saga';

// Create the rootSaga generator function
export default function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_DETAILS', fetchDetails);
    yield takeEvery('CREATE_MOVIE', createMovie);
    yield takeEvery('SAVE_MOVIE', saveMovie);
}