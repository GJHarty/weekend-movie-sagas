import React from "react";
import TextField from "@material-ui/core/TextField";
import AutoComplete from '@material-ui/lab/Autocomplete';
import { useSelector } from "react-redux";

export default function SearchBar() {
    const movies = useSelector(store => store.movies);

    return (
        <AutoComplete
            id="search-bar"
            options={movies}
            getOptionLabel={(option) => option.movieTitle}
            style={{width: 300}}
            renderInput={(params) => <TextField {...params} label="Search" variant="outlined" />}
        />
    )
}