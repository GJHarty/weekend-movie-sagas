import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieList.css';
import { Button, makeStyles, Card, CardContent, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

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
        history.push('/add_movie');
    };

    const cardStyles = makeStyles({
        root: {
          minWidth: 275,
        },
        bullet: {
          display: 'inline-block',
          margin: '0 2px',
          transform: 'scale(0.8)',
        },
        title: {
          fontSize: 14,
        },
        pos: {
          marginBottom: 12,
        },
    });
    // theme class initialization
    const cardClasses = cardStyles();

    return (
        <main>
            <h1>MovieList</h1>
            <Button variant="contained" color="primary" onClick={goToAddMovie} style={{marginBottom: '20px'}}>Add New Movie</Button>
            <section className="movies">
                <Grid container spacing={3} justifycontent="center">
                    {movies.map(movie => {
                        return (
                            <Grid item xs={2} key={movie.id}>
                                <Card className={cardClasses.root, "movieCard"}>
                                    <CardContent className="movieCardContent">
                                        <Typography  variant="h5" component="h2">
                                            <p className="movieTitleDisplay">{movie.title}</p>
                                        </Typography>
                                        <Typography variant="body2" component="p">
                                            <img 
                                                id={movie.id} 
                                                onClick={(event) => fetchDetails(event.target.id)} 
                                                src={movie.poster} alt={movie.title}
                                            />
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        );
                    })}
                </Grid>
            </section>
        </main>
    );
}

export default MovieList;