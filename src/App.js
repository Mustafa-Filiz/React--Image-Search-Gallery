import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import ResultArea from './components/ResultArea';
import SearchBar from './components/SearchBar';

const useStyles = makeStyles({
    App: {
        margin: "auto",
        width: '90%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
});

function App() {
    const classes = useStyles();

    const [searchTerm, setSearchTerm] = useState('');
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        axios
            .get(
                `https://pixabay.com/api/?key=23876519-c9ef1b40ba3e626025d19cec6&q=${searchTerm}&image_type=photo`
            )
            .then((res) => setPhotos(res.data.hits));
    }, [searchTerm]);

    return (
        <Box className={classes.App}>
            <SearchBar setSearchTerm={setSearchTerm} />
            <ResultArea photos={photos} />
        </Box>
    );
}

export default App;
