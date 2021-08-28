import { Button } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieList.css'

function MovieList() {
    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const fetchDetails = (movieId) => {
        dispatch({
            type: 'FETCH_DETAILS',
            payload: movieId,
        });
        history.push('/details');
    };

    const goToAddMovie = () => {
        history.push('/add_movie')
    }

    return (
        <main>
            <h1>MovieList</h1>
            <Button variant="contained" color="primary" onClick={goToAddMovie}>Add New Movie</Button>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            {/* literally have no idea why onClick={(movie) => goToDetails(movie.id)} returns undefined had to use a non-react way to solve */}
                            <img id={movie.id} onClick={(event) => fetchDetails(event.target.id)} src={movie.poster} alt={movie.title}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;