import React, { memo } from 'react';

import {
    Container,
    Stars,
    Rating
} from './styles';

const StarRating = ({ align, rating }) => (
    <Container align={align}>
        <Stars
            disabled={true}
            rating={rating}
        />

        <Rating>{rating}</Rating>
    </Container>
) 

export default memo(StarRating);