import React from 'react';
import { Alert } from 'react-native';

export function AlertConfirm(title, message, onPress ) {

    Alert.alert(
        title,
        message,
        [
            {
                text: "Cancelar",
                onPress: () => {},
                style: "cancel"
            },
            {
                text: "OK",
                onPress: () => onPress()
            }
        ],
        { cancelable: false }
    );
};