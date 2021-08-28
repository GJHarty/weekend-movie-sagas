import { useHistory } from "react-router-dom";
import { Button, Container, makeStyles, TextField, 
            TextareaAutosize, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { useState } from 'react';
import { useDispatch } from "react-redux";

export default function AddMovie() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [title, setTitle] = useState('Pacific Rim');
    const [poster, setPoster] = useState('https://upload.wikimedia.org/wikipedia/en/f/f3/Pacific_Rim_FilmPoster.jpeg');
    const [description, setDescription] = useState('Big Robots');
    const [genre, setGenre] = useState(1);


    const returnHome = () => {
        history.push('/');
    }

    const saveMovie = () => {
        console.log('Saving Movie', title, poster, description, genre);
        dispatch({
            type: 'CREATE_MOVIE',
            payload: {title, poster, description, genre_id: genre},
        });
    };

    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
          },
        },
    }));

    const classes = useStyles();

    return (
        <>
            <h1>Add Movie</h1>
            <div>
                <Container className="formContainer" maxWidth="md">
                    <FormControl className={classes.root} noValidate autoComplete="off" >
                        <TextField id="title" label="Title" value={title} onChange={(event) => setTitle(event.target.value)}/>
                        <TextField id="poster" label="Poster Image URL" value={poster} onChange={(event) => setPoster(event.target.value)}/>
                        <TextareaAutosize 
                            aria-label="minimum height" 
                            minRows={5} placeholder="Description" 
                            value={description} 
                            onChange={(event) => setDescription(event.target.value)}/>
                        {/* Bundled up the genre selector into its own form to allow label to show properly */}
                        <FormControl variant="filled" className={classes.formControl}>
                            <InputLabel id="genre-select-label">Genre</InputLabel>
                            <Select
                                labelId="genre-select-label"
                                id="genre-select"
                                value={genre}
                                onChange={(event) => setGenre(event.target.value)}
                                label="Genre"
                            >
                                <MenuItem value={1}>Adventure</MenuItem>
                                <MenuItem value={2}>Animated</MenuItem>
                                <MenuItem value={3}>Biographical</MenuItem>
                                <MenuItem value={4}>Comedy</MenuItem>
                                <MenuItem value={5}>Disaster</MenuItem>
                                <MenuItem value={6}>Drama</MenuItem>
                                <MenuItem value={7}>Epic</MenuItem>
                                <MenuItem value={8}>Fantasy</MenuItem>
                                <MenuItem value={9}>Musical</MenuItem>
                                <MenuItem value={10}>Romantic</MenuItem>
                                <MenuItem value={11}>Science Fiction</MenuItem>
                                <MenuItem value={12}>Space Opera</MenuItem>
                                <MenuItem value={13}>Superhero</MenuItem>
                            </Select>
                        </FormControl>
                        <Button variant="contained" color="primary" onClick={saveMovie}>Save</Button>
                    </FormControl>
                </Container>
            </div>
            <Button variant="contained" color="default" onClick={returnHome}>Cancel</Button>
        </>
    )
}