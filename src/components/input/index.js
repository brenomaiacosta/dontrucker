import React, { memo } from 'react';

import  {
    Container,
    TextInput,
    Icon
} from './styles';

const Input = (({ name, icon, size, ...rest }) => {

    return (
        <Container size={size} >
            <Icon
                solid={true}
                name={icon}
                size={20}
                color={'gray'}
            />
            <TextInput
                {...rest}
            />
        </Container>
    );
});

export default memo(Input);
