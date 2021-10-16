import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import React from 'react';

function ResultArea({photos}) {
    return (
        <Box sx={{ width: "100%", height: 450}}>
            <ImageList variant="woven" cols={3} gap={8}>
                {photos.map((photo) => (
                    <ImageListItem key={photo.id}>
                        <img
                            src={`${photo.largeImageURL}?w=248&fit=crop&auto=format`}
                            srcSet={`${photo.largeImageURL}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={photo.tags}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
}

export default ResultArea;
