import React, { memo } from 'react';

import {
    Button,
    Icon
} from './styles';

const ButtonIconFA = ({ colorIcon, colorButton, name, size, onPress }) => (
    <Button
        onPress={() => onPress()}
        color={colorButton}
    >
        <Icon
            name={name}
            size={size}
            color={colorIcon}
        />
    </Button>
);

export default memo(ButtonIconFA);