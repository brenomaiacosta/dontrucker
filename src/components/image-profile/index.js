import React, { memo } from 'react';

import {
    Container,
    Image,
    Icon
} from './styles';

const ImageProfile = ({ size, iconSize, image }) => (
    <Container size={size}>
        {image != null  &&
            <Image
                source={image}
            />
        }
        {image == null &&
            <Icon
                size={iconSize}
            />
        }
    </Container>
)

export default memo(ImageProfile);