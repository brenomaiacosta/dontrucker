import styled from 'styled-components/native';
import IconFI from 'react-native-vector-icons/Fontisto';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { colorWhite } from '../colors';

export const Container = styled.View`
    background-color: ${props => props.color || colorWhite};
    height: ${props => hp(props.size + '%') || hp('15%')}px;
    width: ${props => hp(props.size + '%') || hp('15%')}px;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
`;

export const Image = styled.Image.attrs(props => ({
    source: {
        uri: props.source || ''
    }
}))`
    height: 100%;
    width: 100%;
    border-radius: 100px;
`;

export const Icon = styled(IconFI).attrs(props => ({
    name: 'person',
    size: hp(props.size + '%') || hp('10%'),
    color: 'gray',
}))``;