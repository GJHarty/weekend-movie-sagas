/* 
Currently the AutoComplete From throws a warning. After doing some research
I was unable to figure out how to set up the default values in a way that 
prevents the issue. It does not affect the functionality of the components.
*/

import React from "react";
import TextField from "@material-ui/core/TextField";
import AutoComplete from '@material-ui/lab/Autocomplete';
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

export default function SearchBar() {
    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);
    const [searchValue, setSearchValue] = useState(movies[0]);

    const fetchDetails = () => {
        console.log('testing button');
        for (let movie of movies) {
            if (Object.values(movie).indexOf(searchValue.movieTitle) > -1) {
                dispatch({
                    type: 'FETCH_DETAILS',
                    payload: movie.movieId,
                });
                history.push('/details');
            };
        };
    };

    return (
        <>
            <form>
                <AutoComplete
                    id="search-bar"
                    options={movies}
                    getOptionLabel={(option) => option.movieTitle}
                    style={{width: 300}}
                    renderInput={(params) => <TextField {...params} label="Search" variant="outlined" />}
                    value={searchValue}
                    onChange={(event, newValue) => setSearchValue(newValue)}
                />
                <Button variant="contained" color="default" style={{float: 'left'}} onClick={fetchDetails} >Submit</Button> 
            </form>
        </>
    )
}