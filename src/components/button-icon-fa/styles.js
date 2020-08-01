import styled from 'styled-components/native';
import IconFA from 'react-native-vector-icons/FontAwesome5';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { colorWhite } from '../colors';

export const Button = styled.TouchableOpacity`
    height: ${hp('5.5%')}px;
    width: ${hp('5.5%')}px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: ${props => props.color || 'transparent'};
`;

export const Icon = styled(IconFA).attrs(props => ({
    name: props.name,
    size: wp(props.size + '%') || wp('5%'),
    color: props.color || colorWhite,
}))``;

