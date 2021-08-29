import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { PersistGate } from 'redux-persist/integration/react';



// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_DETAILS', fetchDetails);
    yield takeEvery('CREATE_MOVIE', createMovie);
    yield takeEvery('SAVE_MOVIE', saveMovie);
}

function* saveMovie(action) {
    // submit updated title and/or description to the db
    try {
        yield axios.put(`/api/movie/${action.payload.id}`, action.payload);
        fetchAllMovies();
    } catch (err) {
        console.log('saveMovie error', err);
    }
}

function* createMovie(action) {
    // submit new movie information to database
    try {
        yield axios.post('api/movie', action.payload);
        fetchAllMovies();
    } catch (err) {
        console.log('createMovie error', err);
    }
}

function* fetchDetails(action) {
    // go to a specific movie's details page
    try {
        const details = yield axios.get(`/api/details`, {params: {id: action.payload}});
        console.log('get details:', details.data);
        yield put({ type: 'SET_DETAILS', payload: details.data });
    } catch (err) {
        console.log('fetchDetails error', err);
    }
}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });
    } catch (err) {
        console.log('get all error', err);
    }
        
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store focused movie details
const details = (state = {genres: []}, action) => {
    switch (action.type) {
        case 'SET_DETAILS':
            return action.payload[0];
        default:
            return state;
    }
}

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, details);

// Create one store that all components can use
let storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        /* details, */
        persistedReducer,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);
let persistor = persistStore(storeInstance);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
        <Provider store={storeInstance}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>,
    document.getElementById('root')
);
