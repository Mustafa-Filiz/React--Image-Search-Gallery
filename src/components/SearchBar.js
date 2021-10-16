import { InputLabel, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';

const useStyles = makeStyles({
    searchContainer: {
        width: '80%',
        height: 100,
        display: 'flex',
        justifyContent: 'center',
        margin: "20px auto",

    },
});

function SearchBar({ setSearchTerm }) {
    const classes = useStyles();

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <Box className={classes.searchContainer}>
            <form style={{width: "100%"}}>
                <InputLabel htmlFor="searchArea">
                    Search for an image:
                </InputLabel>
                <TextField
                    id="searchArea"
                    type="text"
                    variant="outlined"
                    fullWidth
                    onChange={handleChange}
                />
            </form>
        </Box>
    );
}

export default SearchBar;
