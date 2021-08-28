import { useHistory } from "react-router-dom";
import { Button, Container, makeStyles, TextField, TextareaAutosize, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { useState } from 'react';

export default function AddMovie() {
    const history = useHistory();
    const [genre, setGenre] = useState('');

    const returnHome = () => {
        history.push('/');
    }

    const handleGenreChange = (event) => {
        console.log(event.target.value);
        setGenre(event.target.value);
    }

    const saveMovie = () => {
        console.log('Saving Movie');
    }

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
                    <FormControl className={classes.root} noValidate autoComplete="off">
                        <TextField id="title" label="Title" />
                        <TextField id="poster" label="Poster URL" />
                        <TextareaAutosize aria-label="minimum height" minRows={5} placeholder="Description" />
                        <FormControl variant="filled" className={classes.formControl}>
                            <InputLabel id="genre-select-label">Genre</InputLabel>
                            <Select
                                labelId="genre-select-label"
                                id="genre-select"
                                value={genre}
                                onChange={handleGenreChange}
                                label="Genre"
                            >
                                <MenuItem value={'Adventure'}>Adventure</MenuItem>
                                <MenuItem value={'Animated'}>Animated</MenuItem>
                                <MenuItem value={'Biographical'}>Biographical</MenuItem>
                                <MenuItem value={'Comedy'}>Comedy</MenuItem>
                                <MenuItem value={'Disaster'}>Disaster</MenuItem>
                                <MenuItem value={'Drama'}>Drama</MenuItem>
                                <MenuItem value={'Epic'}>Epic</MenuItem>
                                <MenuItem value={'Fantasy'}>Fantasy</MenuItem>
                                <MenuItem value={'Musical'}>Musical</MenuItem>
                                <MenuItem value={'Romantic'}>Romantic</MenuItem>
                                <MenuItem value={'Science Fiction'}>Science Fiction</MenuItem>
                                <MenuItem value={'Space-Opera'}>Space Opera</MenuItem>
                                <MenuItem value={'Superhero'}>Superhero</MenuItem>
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