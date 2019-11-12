import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Tabletop from 'tabletop';

const Gallery = () => {
    const [images, setImages] = useState([]);
    useEffect(() => {
        Tabletop.init({
            key: '1AYZS1iCqkpEvZy3NJZinZ6mRopmAmBn-xhIwbVgOxwE',
            callback: (googleData) => {
                setImages(googleData)
            },
            simpleSheet: true
        });
    }, [])
    return (
        <Container>
            {
                images.length > 2 ? images.map(image => (

                    <img style={{ width: "350px", height: "250px" }} src={`https://drive.google.com/uc?export=view&id=${image.Id}`} alt="img" />
                )) : <p>Loading...</p>
            }
        </Container>
    )
}

export default Gallery
