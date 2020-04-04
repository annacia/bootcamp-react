import React from 'react';
import {
  Card, CardText, CardBody, CardTitle
} from 'reactstrap';

import './MovieCard/style.css';

const MovieCard = (props) => {
    const { title, description } = props
    return (
        <Card id="movie-card">
            <CardBody>
                <CardTitle>{title}</CardTitle>
                <CardText>{description}</CardText>
            </CardBody>
        </Card>
    );
};

export default MovieCard;