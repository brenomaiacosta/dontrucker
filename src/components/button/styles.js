import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { colorWhite, colorGreenPrimary, colorGreenSecondary, colorPrimary, colorSecondary } from '../colors';

export const Container = styled(RectButton)`
    width: ${props => props.size || '100%'};
    height: 60px;
    background-color: ${props => props.color || colorSecondary};
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    margin-top: 8px;
`;

export const ButtonText = styled.Text`
    color: ${colorWhite};
    font-size: ${wp('5%')}px;
    font-weight: bold;
`;
